const fs = require("fs");
const http = require("http");
const https = require("https");
const { URL } = require("url");

const loadEnv = () => {
  const envPath = `${process.cwd()}/.env`;
  if (!fs.existsSync(envPath)) return;
  const content = fs.readFileSync(envPath, "utf8");
  content.split("\n").forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) return;
    const index = trimmed.indexOf("=");
    if (index === -1) return;
    const key = trimmed.slice(0, index).trim();
    const value = trimmed.slice(index + 1).trim();
    if (!process.env[key]) process.env[key] = value;
  });
};

loadEnv();

const PORT = process.env.PORT || 8787;
const CLIENT_ID = process.env.FATSECRET_CLIENT_ID;
const CLIENT_SECRET = process.env.FATSECRET_CLIENT_SECRET;
const REGION = process.env.FATSECRET_REGION || "ES";
const OFF_BASE_URL = process.env.OFF_BASE_URL
  || (REGION === "ES" ? "https://es.openfoodfacts.org" : "https://world.openfoodfacts.org");
const OFF_STRICT_COUNTRY = process.env.OFF_STRICT_COUNTRY === "1";
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_MODELS = (process.env.GEMINI_MODELS || "gemini-2.5-flash-lite,gemini-1.5-flash-latest,gemini-1.5-pro-latest,gemini-1.0-pro-vision").split(",").map((m) => m.trim()).filter(Boolean);
const GEMINI_API_VERSIONS = (process.env.GEMINI_API_VERSIONS || "v1,v1beta").split(",").map((v) => v.trim()).filter(Boolean);

if (!CLIENT_ID || !CLIENT_SECRET) {
  console.error("Missing FATSECRET_CLIENT_ID or FATSECRET_CLIENT_SECRET in .env");
  process.exit(1);
}

const tokenCache = { token: null, expiresAt: 0 };

const requestText = (url, options = {}) =>
  new Promise((resolve, reject) => {
    const req = https.request(url, options, (res) => {
      let data = "";
      res.on("data", (chunk) => {
        data += chunk;
      });
      res.on("end", () => {
        resolve({ status: res.statusCode || 0, text: data });
      });
    });
    req.on("error", reject);
    if (options.body) {
      req.write(options.body);
    }
    req.end();
  });

const requestJson = async (url, options = {}) => {
  const { status, text } = await requestText(url, options);
  let json = null;
  try {
    json = JSON.parse(text);
  } catch (error) {
    json = null;
  }
  return { status, text, json };
};

const parseGeminiJson = (text) => {
  if (!text) return null;
  try {
    let cleaned = String(text || "").trim();
    if (cleaned.startsWith("```")) {
      cleaned = cleaned.replace(/^```[a-zA-Z]*\n?/, "").replace(/```$/, "").trim();
    }
    if (cleaned.startsWith("`json")) {
      cleaned = cleaned.replace(/^`json\n?/, "").replace(/```$/, "").trim();
    }
    return JSON.parse(cleaned);
  } catch (error) {
    const match = String(text || "").match(/\{[\s\S]*\}/);
    if (match) {
      try {
        return JSON.parse(match[0]);
      } catch (parseError) {
        return null;
      }
    }
  }
  return null;
};

const callGemini = async (payload) => {
  let response = null;
  let lastError = null;
  for (const model of GEMINI_MODELS) {
    for (const version of GEMINI_API_VERSIONS) {
      const apiUrl = new URL(`https://generativelanguage.googleapis.com/${version}/models/${model}:generateContent`);
      apiUrl.searchParams.set("key", GEMINI_API_KEY);
      response = await requestJson(apiUrl.toString(), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      if (response.status >= 200 && response.status < 300) {
        break;
      }
      console.error("[Gemini] error status:", response.status);
      console.error("[Gemini] error body:", response.text);
      lastError = response.text;
    }
    if (response && response.status >= 200 && response.status < 300) {
      break;
    }
  }
  if (!response || response.status < 200 || response.status >= 300) {
    throw new Error(lastError || "Gemini error");
  }
  return response.json?.candidates?.[0]?.content?.parts?.[0]?.text || "";
};

const getAccessToken = async () => {
  const now = Date.now();
  if (tokenCache.token && now < tokenCache.expiresAt - 10_000) {
    return tokenCache.token;
  }

  const body = new URLSearchParams({
    grant_type: "client_credentials",
    scope: "basic"
  });

  const auth = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64");
  const { status, text, json } = await requestJson("https://oauth.fatsecret.com/connect/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: body.toString()
  });

  if (status < 200 || status >= 300) {
    throw new Error(`FatSecret token error: ${text}`);
  }

  const data = json;
  tokenCache.token = data.access_token;
  tokenCache.expiresAt = now + data.expires_in * 1000;
  return tokenCache.token;
};

const buildOffSearchUrl = (baseUrl, query, page, pageSize) => {
  const url = new URL("/cgi/search.pl", baseUrl);
  url.searchParams.set("search_terms", query);
  url.searchParams.set("search_simple", "1");
  url.searchParams.set("action", "process");
  url.searchParams.set("json", "1");
  url.searchParams.set("page", String(page));
  url.searchParams.set("page_size", String(pageSize));
  url.searchParams.set("fields", "code,product_name,product_name_es,brands,brand_owner,image_front_small_url,image_front_url,image_url,nutriments");
  if (REGION === "ES") {
    url.searchParams.set("lc", "es");
    if (OFF_STRICT_COUNTRY) {
      url.searchParams.set("tagtype_0", "countries");
      url.searchParams.set("tag_contains_0", "contains");
      url.searchParams.set("tag_0", "Spain");
    }
  }
  return url;
};

const fetchFoods = async (query, page = 1, pageSize = 12) => {
  const safePage = Number(page) > 0 ? Number(page) : 1;
  const safePageSize = Number(pageSize) > 0 ? Math.min(Number(pageSize), 50) : 20;
  const baseUrls = [OFF_BASE_URL];
  if (!baseUrls.includes("https://world.openfoodfacts.org")) {
    baseUrls.push("https://world.openfoodfacts.org");
  }

  let searchJson = null;
  let lastError = null;
  for (const baseUrl of baseUrls) {
    try {
      const url = buildOffSearchUrl(baseUrl, query, safePage, safePageSize);
      const searchResponse = await requestJson(url.toString(), {
        headers: {
          "User-Agent": "CaloriePlanner/1.0"
        }
      });
      if (searchResponse.status < 200 || searchResponse.status >= 300) {
        throw new Error(`Open Food Facts error: ${searchResponse.text}`);
      }
      if (!searchResponse.json) {
        throw new Error(`Open Food Facts error: ${searchResponse.text}`);
      }
      searchJson = searchResponse.json;
      break;
    } catch (error) {
      lastError = error;
    }
  }

  if (!searchJson) {
    throw lastError || new Error("Open Food Facts error");
  }

  const products = searchJson.products || [];
  const items = products.map((item) => {
    const nutriments = item.nutriments || {};
    const kcal = Number(nutriments["energy-kcal_100g"] || nutriments["energy-kcal"] || 0);
    const protein = Number(nutriments.proteins_100g || nutriments.proteins || 0);
    const fat = Number(nutriments.fat_100g || nutriments.fat || 0);
    const carbs = Number(nutriments.carbohydrates_100g || nutriments.carbohydrates || 0);
    const brand = item.brands || item.brand_owner || "";
    const imageUrl = item.image_front_small_url || item.image_front_url || item.image_url || "";
    return {
      id: item.code,
      name: item.product_name || item.product_name_es || `Producto ${item.code}`,
      brand,
      image_url: imageUrl,
      kcal_100g: Math.round(kcal),
      protein_100g: Math.round(protein),
      fat_100g: Math.round(fat),
      carbs_100g: Math.round(carbs)
    };
  });

  return {
    items,
    count: Number(searchJson.count || 0),
    page: safePage,
    pageSize: safePageSize
  };
};

const searchCache = new Map();
const SEARCH_CACHE_TTL_MS = 5 * 60 * 1000;

const fetchFoodDetails = async (foodId) => {
  const token = await getAccessToken();
  const detailsUrl = new URL("https://platform.fatsecret.com/rest/server.api");
  detailsUrl.searchParams.set("method", "food.get");
  detailsUrl.searchParams.set("food_id", foodId);
  detailsUrl.searchParams.set("format", "json");

  const detailsResponse = await requestJson(detailsUrl.toString(), {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  if (detailsResponse.status < 200 || detailsResponse.status >= 300) {
    throw new Error(`FatSecret details error: ${detailsResponse.text}`);
  }

  if (!detailsResponse.json) {
    throw new Error(`FatSecret details error: ${detailsResponse.text}`);
  }

  const details = detailsResponse.json;
  const servings = details?.food?.servings?.serving;
  const list = Array.isArray(servings) ? servings : [servings];
  const filtered = list.filter(Boolean).map((serving) => ({
    serving_description: serving.serving_description,
    calories: Number(serving.calories) || 0,
    protein: Number(serving.protein) || 0,
    fat: Number(serving.fat) || 0,
    carbohydrate: Number(serving.carbohydrate) || 0,
    metric_serving_amount: Number(serving.metric_serving_amount) || 0,
    metric_serving_unit: serving.metric_serving_unit || ""
  }));

  return {
    name: details?.food?.food_name || "",
    brand: details?.food?.brand_name || "",
    servings: filtered
  };
};

// Usar Open Food Facts (gratuito) para buscar por código de barras
const findFoodByBarcode = async (barcode) => {
  const baseUrls = [OFF_BASE_URL];
  if (!baseUrls.includes("https://world.openfoodfacts.org")) {
    baseUrls.push("https://world.openfoodfacts.org");
  }

  let response = null;
  let lastError = null;
  for (const baseUrl of baseUrls) {
    try {
      const url = new URL(`/api/v0/product/${barcode}.json`, baseUrl);
      if (REGION === "ES") {
        url.searchParams.set("lc", "es");
      }
      response = await requestJson(url.toString(), {
        headers: {
          "User-Agent": "CaloriePlanner/1.0"
        }
      });
      if (response.status < 200 || response.status >= 300) {
        throw new Error(`Open Food Facts error: ${response.text}`);
      }
      if (!response.json) {
        throw new Error(`Open Food Facts error: ${response.text}`);
      }
      break;
    } catch (error) {
      lastError = error;
    }
  }

  if (!response || !response.json) {
    throw lastError || new Error("Open Food Facts error");
  }

  if (response.json.status !== 1) {
    throw new Error(`Producto no encontrado para código: ${barcode}`);
  }

  const product = response.json.product;
  const nutriments = product.nutriments || {};
  const imageUrl = product.image_front_url || product.image_url || product.image_front_small_url || "";

  // Extraer información nutricional por 100g
  const per100g = {
    calories: Math.round(nutriments["energy-kcal_100g"] || nutriments["energy-kcal"] || 0),
    protein: Math.round(nutriments.proteins_100g || nutriments.proteins || 0),
    fat: Math.round(nutriments.fat_100g || nutriments.fat || 0),
    carbohydrate: Math.round(nutriments.carbohydrates_100g || nutriments.carbohydrates || 0)
  };

  // Crear porciones
  const servings = [];

  // Porción por 100g
  servings.push({
    serving_description: "100g",
    calories: per100g.calories,
    protein: per100g.protein,
    fat: per100g.fat,
    carbohydrate: per100g.carbohydrate,
    metric_serving_amount: 100,
    metric_serving_unit: "g"
  });

  // Si hay serving_size, añadirla
  if (product.serving_size) {
    const servingMatch = product.serving_size.match(/(\d+)/);
    const servingGrams = servingMatch ? parseInt(servingMatch[1]) : 100;
    const ratio = servingGrams / 100;

    servings.push({
      serving_description: product.serving_size,
      calories: Math.round(per100g.calories * ratio),
      protein: Math.round(per100g.protein * ratio),
      fat: Math.round(per100g.fat * ratio),
      carbohydrate: Math.round(per100g.carbohydrate * ratio),
      metric_serving_amount: servingGrams,
      metric_serving_unit: "g"
    });
  }

  return {
    food_id: barcode,
    name: product.product_name || product.product_name_es || `Producto ${barcode}`,
    brand: product.brands || product.brand_owner || "",
    image_url: imageUrl,
    servings
  };
};

const setCors = (res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
};

const server = http.createServer(async (req, res) => {
  setCors(res);
  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }
  const url = new URL(req.url, `http://${req.headers.host}`);
  if (url.pathname === "/api/search") {
    const query = url.searchParams.get("q");
    const page = Number(url.searchParams.get("page") || 1);
    const pageSize = Number(url.searchParams.get("page_size") || 12);
    console.log(`[FatSecret] search: ${query || "-"}`);
    if (!query) {
      res.writeHead(400, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Missing query" }));
      return;
    }

    try {
      const cacheKey = JSON.stringify({
        q: query.toLowerCase(),
        page,
        pageSize,
        region: REGION,
        base: OFF_BASE_URL
      });
      const cached = searchCache.get(cacheKey);
      if (cached && cached.expiresAt > Date.now()) {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(cached.data));
        return;
      }
      if (cached) searchCache.delete(cacheKey);

      const data = await fetchFoods(query, page, pageSize);
      searchCache.set(cacheKey, { data, expiresAt: Date.now() + SEARCH_CACHE_TTL_MS });
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(data));
    } catch (error) {
      console.error("[FatSecret] error:", error.message || error);
      res.writeHead(500, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: error.message || "Server error" }));
    }
    return;
  }

  if (url.pathname === "/api/food") {
    const foodId = url.searchParams.get("food_id");
    console.log(`[FatSecret] food: ${foodId || "-"}`);
    if (!foodId) {
      res.writeHead(400, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Missing food_id" }));
      return;
    }
    try {
      const data = await fetchFoodDetails(foodId);
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(data));
    } catch (error) {
      console.error("[FatSecret] error:", error.message || error);
      res.writeHead(500, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: error.message || "Server error" }));
    }
    return;
  }

  if (url.pathname === "/api/barcode") {
    const barcode = url.searchParams.get("barcode");
    console.log(`[OpenFoodFacts] barcode: ${barcode || "-"}`);
    if (!barcode) {
      res.writeHead(400, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Missing barcode" }));
      return;
    }
    try {
      // Usar Open Food Facts (gratuito)
      const product = await findFoodByBarcode(barcode);
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(product));
    } catch (error) {
      console.error("[OpenFoodFacts] error:", error.message || error);
      const status = String(error.message || "").includes("Producto no encontrado") ? 404 : 500;
      res.writeHead(status, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: error.message || "Server error" }));
    }
    return;
  }

  if (url.pathname === "/api/food-suggest" && req.method === "POST") {
    if (!GEMINI_API_KEY) {
      res.writeHead(500, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Missing GEMINI_API_KEY in .env" }));
      return;
    }
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", async () => {
      try {
        const parsed = JSON.parse(body || "{}");
        const query = String(parsed.query || "").trim();
        if (!query) {
          res.writeHead(400, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ error: "Missing query" }));
          return;
        }

        const payload = {
          contents: [
            {
              role: "user",
              parts: [
                {
                  text: `Para el alimento "${query}", devuelve SOLO JSON válido con claves: kcal, protein_g, fat_g, carbs_g, per_amount, per_unit. Usa valores por 100g o 100ml (per_amount=100, per_unit="g" o "ml"). Si no estás seguro, usa null.`
                }
              ]
            }
          ]
        };

        let text = "";
        try {
          text = await callGemini(payload);
        } catch (error) {
          res.writeHead(500, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ error: error.message || "Gemini error" }));
          return;
        }

        const data = parseGeminiJson(text);
        if (!data) {
          res.writeHead(500, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ error: "No JSON from Gemini", raw: text }));
          return;
        }

        if (!data.per_amount) data.per_amount = 100;
        if (!data.per_unit) data.per_unit = "g";
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(data));
      } catch (error) {
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: error.message || "Server error" }));
      }
    });
    return;
  }

  if (url.pathname === "/api/label-ocr" && req.method === "POST") {
    if (!GEMINI_API_KEY) {
      res.writeHead(500, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Missing GEMINI_API_KEY in .env" }));
      return;
    }
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", async () => {
      try {
        const parsed = JSON.parse(body || "{}");
        const image = parsed.image || "";
        const mimeType = parsed.mimeType || "image/jpeg";
        if (!image) {
          res.writeHead(400, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ error: "Missing image" }));
          return;
        }

        const payload = {
          contents: [
            {
              role: "user",
              parts: [
                {
                  text: "Extrae los valores nutricionales por 100g o 100ml. Responde SOLO con JSON válido con claves: kcal, protein_g, fat_g, carbs_g, per_amount, per_unit. Si no encuentras un valor, usa null."
                },
                {
                  inline_data: {
                    mime_type: mimeType,
                    data: image
                  }
                }
              ]
            }
          ]
        };

        let text = "";
        try {
          text = await callGemini(payload);
        } catch (error) {
          res.writeHead(500, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ error: error.message || "Gemini error" }));
          return;
        }

        const data = parseGeminiJson(text);
        if (!data) {
          res.writeHead(500, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ error: "No JSON from Gemini", raw: text }));
          return;
        }

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(data));
      } catch (error) {
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: error.message || "Server error" }));
      }
    });
    return;
  }

  // Servir archivos estáticos
  const filePath = url.pathname === "/" ? "/index.html" : url.pathname;
  const fullPath = `${process.cwd()}${filePath}`;

  const contentTypes = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "application/javascript",
    ".json": "application/json",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".gif": "image/gif",
    ".svg": "image/svg+xml",
    ".mp4": "video/mp4",
    ".webm": "video/webm",
    ".ico": "image/x-icon"
  };

  const ext = filePath.substring(filePath.lastIndexOf("."));
  const contentType = contentTypes[ext] || "application/octet-stream";

  try {
    if (fs.existsSync(fullPath) && fs.statSync(fullPath).isFile()) {
      const content = fs.readFileSync(fullPath);
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content);
      return;
    }
  } catch (e) {
    // File not found, continue to 404
  }

  res.writeHead(404, { "Content-Type": "text/html" });
  res.end("<h1>404 Not Found</h1>");
});

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Open http://localhost:${PORT}/planner.html in your browser`);
});
