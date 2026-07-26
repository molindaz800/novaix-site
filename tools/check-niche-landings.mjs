import { existsSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const slugs = [
  "transporte",
  "clinicas-dentales",
  "veterinarias",
  "asesorias-gestorias",
  "academias",
  "reformas-servicios"
];
const index = readFileSync(resolve(root, "landing-negocios.html"), "utf8");
const sitemap = readFileSync(resolve(root, "sitemap.xml"), "utf8");
const errors = [];

for (const slug of slugs) {
  const filename = `landing-${slug}.html`;
  const path = resolve(root, filename);
  if (!existsSync(path)) {
    errors.push(`${filename}: missing file`);
    continue;
  }

  const html = readFileSync(path, "utf8");
  const checks = [
    [/<title>[^<]{20,70}<\/title>/, "title"],
    [/<meta name="description" content="[^"]{70,170}">/, "meta description"],
    [new RegExp(`<link rel="canonical" href="https://novaix\\.es/${filename}">`), "canonical"],
    [/<meta property="og:title" content="[^"]+">/, "Open Graph title"],
    [/<meta property="og:description" content="[^"]+">/, "Open Graph description"],
    [/<script type="application\/ld\+json">[\s\S]+?<\/script>/, "JSON-LD"]
  ];

  for (const [pattern, label] of checks) {
    if (!pattern.test(html)) errors.push(`${filename}: missing or invalid ${label}`);
  }

  if ((html.match(/<h1\b/g) || []).length !== 1) {
    errors.push(`${filename}: expected exactly one h1`);
  }
  if (html.includes("\uFFFD")) {
    errors.push(`${filename}: contains Unicode replacement characters`);
  }

  for (const match of html.matchAll(/<script type="application\/ld\+json">([\s\S]+?)<\/script>/g)) {
    try {
      JSON.parse(match[1]);
    } catch {
      errors.push(`${filename}: malformed JSON-LD`);
    }
  }

  for (const match of html.matchAll(/(?:src|href)="(imagenes\/[^"]+)"/g)) {
    if (!existsSync(resolve(root, match[1]))) {
      errors.push(`${filename}: missing asset ${match[1]}`);
    }
  }

  if (!index.includes(`href="${filename}"`)) {
    errors.push(`${filename}: not linked from landing-negocios.html`);
  }
  if (!sitemap.includes(`https://novaix.es/${filename}`)) {
    errors.push(`${filename}: not listed in sitemap.xml`);
  }
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`Validated ${slugs.length} niche landing pages.`);
