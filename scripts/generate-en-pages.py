#!/usr/bin/env python3
from __future__ import annotations

import html
import json
import re
from html.parser import HTMLParser
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
BASE_URL = "https://novaix.es"
PAGES = [
    "index.html",
    "landing-facebook.html",
    "landing-negocios.html",
    "landing-gimnasios.html",
    "landing-clinicas-esteticas.html",
    "landing-peluquerias.html",
    "landing-talleres.html",
    "landing-inmobiliarias.html",
    "landing-centros-belleza.html",
    "landing-fisioterapia.html",
    "landing-academias.html",
    "landing-asesorias-gestorias.html",
    "landing-clinicas-dentales.html",
    "landing-reformas-servicios.html",
    "landing-transporte.html",
    "landing-veterinarias.html",
]
TRANSLATABLE_ATTRS = {
    "aria-label",
    "aria-roledescription",
    "data-hover",
    "data-prompt",
    "placeholder",
    "alt",
    "title",
    "content",
}
URL_ATTRS = {"href", "src", "poster", "action", "data-src"}
VOID_TAGS = {
    "area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta",
    "param", "source", "track", "wbr",
}
RAW_TAGS = {"script", "style", "noscript", "svg", "canvas"}


def normalize(value: str | None) -> str:
    return re.sub(r"\s+", " ", value or "").strip()


def parse_i18n_entries() -> dict[str, str]:
    entries: dict[str, str] = {}

    i18n = (ROOT / "i18n.js").read_text(encoding="utf-8")
    for match in re.finditer(r"^\s*E\((.*)\);\s*$", i18n, re.M):
        raw = match.group(1)
        try:
            values = json.loads(f"[{raw}]")
        except json.JSONDecodeError:
            continue
        if len(values) < 3:
            continue
        source, es, en = values[0], values[1], values[2]
        for candidate in (source, es):
            key = normalize(candidate)
            if key and en:
                entries[key] = en

    landing = (ROOT / "landing-language.js").read_text(encoding="utf-8")
    for match in re.finditer(r"T\(`([\s\S]*?)`,\s*`([\s\S]*?)`(?:,\s*`[\s\S]*?`)?\);", landing):
        source, en = match.group(1), match.group(2)
        key = normalize(source)
        if key and en:
            entries[key] = en

    for match in re.finditer(r"\[`([\s\S]*?)`,\s*`([\s\S]*?)`\]", landing):
        source, en = match.group(1), match.group(2)
        key = normalize(source)
        if key and en:
            entries[key] = en

    entries.update(json.loads((ROOT / "translations/niche-en.json").read_text(encoding="utf-8")))
    return entries


TRANSLATIONS = parse_i18n_entries()


def translate_text(value: str) -> str:
    key = normalize(value)
    if not key:
        return value
    translated = TRANSLATIONS.get(key)
    if not translated or translated == key:
        return value
    start = re.match(r"^\s*", value).group(0)
    end = re.search(r"\s*$", value).group(0)
    return f"{start}{translated}{end}"


def is_external_url(value: str) -> bool:
    return bool(re.match(r"^(?:[a-z][a-z0-9+.-]*:|//|#)", value, re.I))


def split_url(value: str) -> tuple[str, str, str]:
    hash_part = ""
    query_part = ""
    base = value
    if "#" in base:
        base, hash_part = base.split("#", 1)
        hash_part = "#" + hash_part
    if "?" in base:
        base, query_part = base.split("?", 1)
        query_part = "?" + query_part
    return base, query_part, hash_part


def rewrite_url_for_en(value: str) -> str:
    if not value or is_external_url(value) or value.startswith("data:"):
        return value
    base, query, hash_part = split_url(value)
    if not base:
        return f"./{query}{hash_part}" if value.startswith("/") else value
    if base.startswith("/"):
        base = base.lstrip("/")
    if base in ("", "index.html"):
        return f"./{query}{hash_part}"
    if base.endswith(".html"):
        return f"{base}{query}{hash_part}"
    if base.startswith("../"):
        return value
    return f"../{base}{query}{hash_part}"


def rewrite_css_urls_for_en(value: str) -> str:
    def repl(match: re.Match[str]) -> str:
        quote = match.group(1) or ""
        url = match.group(2).strip()
        rewritten = rewrite_url_for_en(url)
        return f"url({quote}{rewritten}{quote})"
    return re.sub(r"url\((['\"]?)([^)'\"]+)\1\)", repl, value)


def rewrite_script_assets_for_en(value: str) -> str:
    """Rewrite root asset paths embedded in JavaScript string literals."""
    return re.sub(
        r"(?P<quote>['\"])(?P<path>(?:videos|imagenes|og)/[^'\"]+)(?P=quote)",
        lambda match: f"{match.group('quote')}../{match.group('path')}{match.group('quote')}",
        value,
    )


def page_slug(page: str) -> str:
    return "" if page == "index.html" else page


def es_url(page: str) -> str:
    slug = page_slug(page)
    return f"{BASE_URL}/{slug}"


def en_url(page: str) -> str:
    slug = page_slug(page)
    return f"{BASE_URL}/en/{slug}"


def write_if_changed(path: Path, content: str) -> None:
    if not path.exists() or path.read_text(encoding="utf-8") != content:
        path.write_text(content, encoding="utf-8")


def translate_schema(value, key=""):
    if isinstance(value, dict):
        return {k: translate_schema(v, k) for k, v in value.items()}
    if isinstance(value, list):
        return [translate_schema(v, key) for v in value]
    if not isinstance(value, str):
        return value
    if key == "inLanguage":
        return "en"
    if key in {"name", "description", "text", "serviceType"}:
        return translate_text(value)
    if key == "url":
        for page in PAGES:
            if value == es_url(page):
                return en_url(page)
    return value


class EnglishRenderer(HTMLParser):
    def __init__(self, page: str):
        super().__init__(convert_charrefs=False)
        self.page = page
        self.out: list[str] = []
        self.raw_stack: list[str] = []
        self.json_ld = False

    def raw_tag(self) -> str | None:
        return self.raw_stack[-1] if self.raw_stack else None

    def handle_decl(self, decl: str) -> None:
        self.out.append(f"<!{decl}>")

    def handle_pi(self, data: str) -> None:
        self.out.append(f"<?{data}>")

    def handle_comment(self, data: str) -> None:
        self.out.append(f"<!--{data}-->")

    def render_attrs(self, tag: str, attrs: list[tuple[str, str | None]]) -> str:
        rendered = []
        for name, value in attrs:
            if value is None:
                rendered.append(name)
                continue
            lower = name.lower()
            original = value

            if tag.lower() == "html" and lower == "lang":
                value = "en"
            elif tag.lower() == "html" and lower == "data-static-lang":
                value = "en"
            elif lower in TRANSLATABLE_ATTRS:
                value = translate_text(value)
            elif lower.startswith("data-i18n-attr-"):
                value = original

            if lower in URL_ATTRS:
                value = self.rewrite_link_attr(tag, lower, value)
            elif lower == "style":
                value = rewrite_css_urls_for_en(value)

            rendered.append(f'{name}="{html.escape(value, quote=True)}"')
        if tag.lower() == "html" and not any(name.lower() == "data-static-lang" for name, _ in attrs):
            rendered.append('data-static-lang="en"')
        return (" " + " ".join(rendered)) if rendered else ""

    def rewrite_link_attr(self, tag: str, attr: str, value: str) -> str:
        if tag.lower() == "link" and attr == "href":
            rel = ""
            # rel is handled in set_seo_head before parse where possible; keep assets relative here.
        if value.startswith(f"{BASE_URL}/"):
            return value
        return rewrite_url_for_en(value)

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        if tag.lower() in RAW_TAGS:
            self.raw_stack.append(tag.lower())
        if tag.lower() == "script":
            self.json_ld = dict(attrs).get("type") == "application/ld+json"
        self.out.append(f"<{tag}{self.render_attrs(tag, attrs)}>")

    def handle_startendtag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        # SVG paths are not HTML void elements: dropping their slash nests every
        # subsequent path inside the first one and breaks translated diagrams.
        close = "/" if "svg" in self.raw_stack or tag.lower() == "svg" else ""
        self.out.append(f"<{tag}{self.render_attrs(tag, attrs)}{close}>")

    def handle_endtag(self, tag: str) -> None:
        self.out.append(f"</{tag}>")
        if self.raw_stack and self.raw_stack[-1] == tag.lower():
            self.raw_stack.pop()

    def handle_data(self, data: str) -> None:
        raw = self.raw_tag()
        if raw == "style":
            self.out.append(rewrite_css_urls_for_en(data))
        elif raw == "script":
            if self.json_ld:
                self.out.append(json.dumps(translate_schema(json.loads(data)), ensure_ascii=False))
            else:
                self.out.append(rewrite_script_assets_for_en(data))
        elif raw:
            self.out.append(data)
        else:
            self.out.append(translate_text(data))

    def handle_entityref(self, name: str) -> None:
        self.out.append(f"&{name};")

    def handle_charref(self, name: str) -> None:
        self.out.append(f"&#{name};")


def set_or_insert_link(head: str, rel: str, href: str, hreflang: str | None = None) -> str:
    if hreflang:
        pattern = re.compile(rf'<link\b(?=[^>]*rel=["\']{rel}["\'])(?=[^>]*hreflang=["\']{hreflang}["\'])[^>]*>', re.I)
        replacement = f'<link rel="{rel}" hreflang="{hreflang}" href="{href}">'
    else:
        pattern = re.compile(rf'<link\b(?=[^>]*rel=["\']{rel}["\'])[^>]*>', re.I)
        replacement = f'<link rel="{rel}" href="{href}">'
    if pattern.search(head):
        return pattern.sub(replacement, head, count=1)
    return head.replace("</head>", "  " + replacement + "\n</head>")


def update_head_seo(source: str, page: str, lang: str) -> str:
    canonical = en_url(page) if lang == "en" else es_url(page)
    es = es_url(page)
    en = en_url(page)
    x_default = es
    def repl(match: re.Match[str]) -> str:
        head = match.group(0)
        head = set_or_insert_link(head, "canonical", canonical)
        head = set_or_insert_link(head, "alternate", es, "es")
        head = set_or_insert_link(head, "alternate", en, "en")
        head = set_or_insert_link(head, "alternate", x_default, "x-default")
        head = re.sub(r'<meta\b(?=[^>]*property=["\']og:url["\'])(?=[^>]*content=)[^>]*>', f'<meta property="og:url" content="{canonical}">', head, flags=re.I)
        return head
    return re.sub(r"<head>[\s\S]*?</head>", repl, source, count=1, flags=re.I)


def generate_page(page: str) -> None:
    source_path = ROOT / page
    source = source_path.read_text(encoding="utf-8")
    source = update_head_seo(source, page, "en")
    parser = EnglishRenderer(page)
    parser.feed(source)
    output = "".join(parser.out)
    output = re.sub(r"\?lang=en", "", output)
    # The legal documents are currently Spanish-only; do not imply EN versions.
    def mark_legal_links(match):
        return re.sub(r'(href="(?:\.\./|/)(?:privacy|terms|data-deletion)/"[^>]*>)([^<]+)(</a>)',
                      lambda m: m[1] + m[2] + (" (ES)" if not m[2].endswith(" (ES)") else "") + m[3], match[0])
    output = re.sub(r"<footer[\s\S]*?</footer>", mark_legal_links, output)
    out_path = ROOT / "en" / ("index.html" if page == "index.html" else page)
    out_path.parent.mkdir(exist_ok=True)
    write_if_changed(out_path, output)


def update_spanish_pages() -> None:
    for page in PAGES:
        path = ROOT / page
        source = path.read_text(encoding="utf-8")
        updated = update_head_seo(source, page, "es")
        write_if_changed(path, updated)


def generate_sitemap() -> None:
    # Preserve independently maintained pages (privacy, terms, data deletion).
    # Omit lastmod rather than inventing a timestamp each time this build runs.
    path = ROOT / "sitemap.xml"
    existing = path.read_text(encoding="utf-8") if path.exists() else ""
    generated_urls = {fn(page) for fn in (es_url, en_url) for page in PAGES}
    preserved = []
    for block in re.findall(r"  <url>[\s\S]*?</url>", existing):
        loc = re.search(r"<loc>(.*?)</loc>", block)
        if loc and loc[1] not in generated_urls:
            preserved.append(block)
    rows = ['<?xml version="1.0" encoding="UTF-8"?>',
            '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
            '        xmlns:xhtml="http://www.w3.org/1999/xhtml">']
    for url_fn in (es_url, en_url):
        for page in PAGES:
            rows.extend(["  <url>", f"    <loc>{url_fn(page)}</loc>",
                f'    <xhtml:link rel="alternate" hreflang="es" href="{es_url(page)}" />',
                f'    <xhtml:link rel="alternate" hreflang="en" href="{en_url(page)}" />',
                f'    <xhtml:link rel="alternate" hreflang="x-default" href="{es_url(page)}" />',
                "  </url>"])
    rows.extend(preserved)
    rows.append("</urlset>")
    write_if_changed(path, "\n".join(rows) + "\n")


def copy_support_files() -> None:
    # GitHub Pages serves /en/ as a folder. Static assets remain at root and are referenced with ../.
    (ROOT / "en").mkdir(exist_ok=True)


def main() -> None:
    actual = {p.name for p in ROOT.glob("landing-*.html")} | {"index.html"}
    if actual != set(PAGES):
        raise ValueError(f"Update PAGES before building: {actual.symmetric_difference(PAGES)}")
    update_spanish_pages()
    copy_support_files()
    for page in PAGES:
        generate_page(page)
    generate_sitemap()
    print(f"Generated {len(PAGES)} English pages in /en and updated sitemap/hreflang.")


if __name__ == "__main__":
    main()
