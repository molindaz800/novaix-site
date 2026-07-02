#!/usr/bin/env python3
from __future__ import annotations

from pathlib import Path
from textwrap import wrap
from PIL import Image, ImageDraw, ImageFont, ImageFilter

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "og"
W, H = 1200, 630
FONT_BOLD = "/System/Library/Fonts/Supplemental/Arial Bold.ttf"
FONT_REG = "/System/Library/Fonts/Supplemental/Arial.ttf"

PAGES = {
    "index": {
        "bg": "imagenes/fondo.webp",
        "eyebrow": "NOVAIX · AI AGENTS",
        "title": "Agentes de IA y automatización para empresas",
        "subtitle": "Ventas, soporte y operaciones multicanal con enfoque RGPD.",
        "accent": (36, 217, 255),
    },
    "landing-facebook": {
        "bg": "imagenes/fondo.webp",
        "eyebrow": "LANDING GENERAL",
        "title": "Agentes de IA para captar y atender clientes",
        "subtitle": "Mensajes, leads, citas y datos conectados a tus herramientas.",
        "accent": (44, 209, 255),
    },
    "landing-negocios": {
        "bg": "imagenes/landing-negocios-hero.webp",
        "eyebrow": "CASOS POR NEGOCIO",
        "title": "Experiencia aplicada a negocios reales",
        "subtitle": "Explora automatizaciones por sector y canal de entrada.",
        "accent": (43, 214, 255),
    },
    "landing-gimnasios": {
        "bg": "imagenes/landing-gimnasios-hero.webp",
        "eyebrow": "GIMNASIOS",
        "title": "Recepción IA 24/7 para gimnasios",
        "subtitle": "Reservas, pruebas, precios y seguimiento sin perder leads.",
        "accent": (202, 255, 58),
    },
    "landing-clinicas-esteticas": {
        "bg": "imagenes/landing-clinicas-hero.webp",
        "eyebrow": "CLÍNICAS ESTÉTICAS",
        "title": "Recepción IA para clínicas estéticas",
        "subtitle": "Valoraciones, recordatorios y seguimiento comercial multicanal.",
        "accent": (103, 232, 249),
    },
    "landing-peluquerias": {
        "bg": "imagenes/landing-peluquerias-hero.webp",
        "eyebrow": "PELUQUERÍAS",
        "title": "Reservas y cambios de cita con IA",
        "subtitle": "WhatsApp, precios, recordatorios y huecos protegidos.",
        "accent": (244, 114, 182),
    },
    "landing-talleres": {
        "bg": "imagenes/landing-talleres-hero.webp",
        "eyebrow": "TALLERES",
        "title": "Recepción IA para talleres mecánicos",
        "subtitle": "Citas, presupuestos iniciales y seguimiento comercial.",
        "accent": (251, 146, 60),
    },
    "landing-inmobiliarias": {
        "bg": "imagenes/landing-inmobiliarias-hero.webp",
        "eyebrow": "INMOBILIARIAS",
        "title": "IA para cualificar leads inmobiliarios",
        "subtitle": "Visitas, filtros, seguimiento y derivación al equipo comercial.",
        "accent": (96, 165, 250),
    },
    "landing-centros-belleza": {
        "bg": "imagenes/landing-centros-belleza-hero.webp",
        "eyebrow": "CENTROS DE BELLEZA",
        "title": "Reservas, bonos y recordatorios con IA",
        "subtitle": "Convierte mensajes en citas y recurrencia sin saturar recepción.",
        "accent": (251, 113, 133),
    },
    "landing-fisioterapia": {
        "bg": "imagenes/landing-fisioterapia-hero.webp",
        "eyebrow": "FISIOTERAPIA",
        "title": "Recepción IA para fisioterapia",
        "subtitle": "Primeras visitas, cambios de cita y derivación profesional.",
        "accent": (45, 212, 191),
    },
}


def font(path: str, size: int) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(path, size=size)


def cover_image(path: Path) -> Image.Image:
    img = Image.open(path).convert("RGB")
    iw, ih = img.size
    scale = max(W / iw, H / ih)
    nw, nh = int(iw * scale), int(ih * scale)
    img = img.resize((nw, nh), Image.LANCZOS)
    left = (nw - W) // 2
    top = (nh - H) // 2
    return img.crop((left, top, left + W, top + H))


def rounded_rectangle(draw: ImageDraw.ImageDraw, xy, radius, fill, outline=None, width=1):
    draw.rounded_rectangle(xy, radius=radius, fill=fill, outline=outline, width=width)


def draw_wrapped(draw: ImageDraw.ImageDraw, text: str, xy: tuple[int, int], font_obj, fill, max_width: int, line_gap: int) -> int:
    x, y = xy
    words = text.split()
    lines = []
    current = ""
    for word in words:
        candidate = f"{current} {word}".strip()
        if draw.textbbox((0, 0), candidate, font=font_obj)[2] <= max_width or not current:
            current = candidate
        else:
            lines.append(current)
            current = word
    if current:
        lines.append(current)
    for line in lines:
        draw.text((x, y), line, font=font_obj, fill=fill)
        bbox = draw.textbbox((x, y), line, font=font_obj)
        y += (bbox[3] - bbox[1]) + line_gap
    return y


def make_card(slug: str, data: dict) -> None:
    bg = cover_image(ROOT / data["bg"])
    bg = bg.filter(ImageFilter.GaussianBlur(radius=1.2))
    overlay = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    od = ImageDraw.Draw(overlay)
    od.rectangle((0, 0, W, H), fill=(3, 8, 15, 158))
    od.rectangle((0, 0, int(W * 0.73), H), fill=(0, 0, 0, 112))
    od.rectangle((0, 0, W, H), fill=(0, 22, 32, 70))
    bg = Image.alpha_composite(bg.convert("RGBA"), overlay)

    d = ImageDraw.Draw(bg)
    accent = data["accent"]
    white = (248, 250, 252, 255)
    muted = (210, 222, 232, 245)

    # Brand capsule
    rounded_rectangle(d, (74, 64, 330, 122), 26, fill=(2, 18, 28, 190), outline=accent + (190,), width=2)
    d.text((102, 79), "NOVAIX", font=font(FONT_BOLD, 30), fill=white)

    # Eyebrow
    rounded_rectangle(d, (74, 154, 74 + min(560, 26 + len(data["eyebrow"]) * 18), 204), 25, fill=(2, 18, 28, 180), outline=accent + (170,), width=2)
    d.text((102, 165), data["eyebrow"], font=font(FONT_BOLD, 22), fill=accent + (255,))

    y = draw_wrapped(d, data["title"], (74, 242), font(FONT_BOLD, 62), white, 760, 12)
    y += 18
    draw_wrapped(d, data["subtitle"], (78, y), font(FONT_REG, 30), muted, 780, 8)

    # Bottom proof line
    d.line((78, 548, 430, 548), fill=accent + (230,), width=4)
    d.text((78, 566), "novaix.es", font=font(FONT_BOLD, 28), fill=white)
    d.text((245, 569), "· Automatización con IA", font=font(FONT_REG, 25), fill=muted)

    out = OUT / f"{slug}.jpg"
    out.parent.mkdir(exist_ok=True)
    bg.convert("RGB").save(out, "JPEG", quality=82, optimize=True, progressive=True)


def main() -> None:
    for slug, data in PAGES.items():
        make_card(slug, data)
        print(OUT / f"{slug}.jpg")


if __name__ == "__main__":
    main()
