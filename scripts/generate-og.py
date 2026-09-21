#!/usr/bin/env python3
"""Build Pitching101 Open Graph cards: sky, clouds, wordmark baseball only, Oswald + Yesteryear."""

from __future__ import annotations

import shutil
import urllib.request
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
ASSETS = ROOT / "public" / "assets"
OUT_OG = ROOT / "public" / "og"
FONT_DIR = Path("/tmp/p101-fonts")

W, H = 1200, 630
SKY_TOP = (187, 214, 241)  # --blue-soft #BBD6F1
SKY_BOTTOM = (50, 149, 251)  # --blue #3295fb
INK = (15, 26, 46)  # --ink
INK_SOFT = (61, 86, 116)  # --ink-soft
BLUE_DARK = (26, 120, 232)  # --blue-dark

FONT_URLS = {
    "Oswald.ttf": "https://raw.githubusercontent.com/google/fonts/main/ofl/oswald/Oswald%5Bwght%5D.ttf",
    "Yesteryear-Regular.ttf": "https://raw.githubusercontent.com/google/fonts/main/ofl/yesteryear/Yesteryear-Regular.ttf",
    "DMSans.ttf": "https://raw.githubusercontent.com/google/fonts/main/ofl/dmsans/DMSans%5Bopsz%2Cwght%5D.ttf",
}


def ensure_fonts() -> None:
    FONT_DIR.mkdir(parents=True, exist_ok=True)
    for name, url in FONT_URLS.items():
        dest = FONT_DIR / name
        if dest.exists() and dest.stat().st_size > 10_000:
            continue
        urllib.request.urlretrieve(url, dest)


def oswald(size: int, weight: int = 700) -> ImageFont.FreeTypeFont:
    font = ImageFont.truetype(str(FONT_DIR / "Oswald.ttf"), size)
    font.set_variation_by_axes([weight])
    return font


def yesteryear(size: int) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(str(FONT_DIR / "Yesteryear-Regular.ttf"), size)


def dm_sans(size: int, weight: int = 500) -> ImageFont.FreeTypeFont:
    font = ImageFont.truetype(str(FONT_DIR / "DMSans.ttf"), size)
    font.set_variation_by_axes([9, weight])
    return font


def sky() -> Image.Image:
    img = Image.new("RGB", (W, H), SKY_BOTTOM)
    px = img.load()
    for y in range(H):
        t = y / (H - 1)
        color = tuple(int(SKY_TOP[i] + (SKY_BOTTOM[i] - SKY_TOP[i]) * t) for i in range(3))
        for x in range(W):
            px[x, y] = color
    return img


def paste(base: Image.Image, overlay: Image.Image, xy: tuple[int, int]) -> None:
    if overlay.mode != "RGBA":
        overlay = overlay.convert("RGBA")
    base.paste(overlay, xy, overlay)


def crop_alpha(im: Image.Image) -> Image.Image:
    bbox = im.getbbox()
    return im.crop(bbox) if bbox else im


def scale_rgba(path: Path, width: int, nearest: bool = False) -> Image.Image:
    src = crop_alpha(Image.open(path).convert("RGBA"))
    ratio = width / src.width
    size = (width, max(1, round(src.height * ratio)))
    resample = Image.Resampling.NEAREST if nearest else Image.Resampling.LANCZOS
    return src.resize(size, resample)


def text_layer(
    text: str,
    font: ImageFont.FreeTypeFont,
    fill: tuple[int, int, int],
    tracking: float = 0,
    pad: int = 12,
) -> Image.Image:
    if not text:
        return Image.new("RGBA", (1, 1), (0, 0, 0, 0))
    advances = [font.getlength(ch) + tracking for ch in text]
    advances[-1] -= tracking
    width = int(round(sum(advances))) + pad * 2
    ascent, descent = font.getmetrics()
    height = ascent + descent + pad * 2
    layer = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    draw = ImageDraw.Draw(layer)
    x = pad
    for ch, advance in zip(text, advances):
        draw.text((x, pad), ch, font=font, fill=fill)
        x += advance
    return crop_alpha(layer)


def script_lockup(word: str) -> Image.Image:
    layer = text_layer(word, yesteryear(108), BLUE_DARK, tracking=1.6, pad=28)
    return crop_alpha(layer.rotate(-8, resample=Image.Resampling.BICUBIC, expand=True))


def stack_centered(layers: list[Image.Image], gaps: list[int]) -> Image.Image:
    assert len(gaps) == len(layers) - 1
    width = max(layer.width for layer in layers)
    height = sum(layer.height for layer in layers) + sum(gaps)
    canvas = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    y = 0
    for i, layer in enumerate(layers):
        paste(canvas, layer, ((width - layer.width) // 2, y))
        y += layer.height
        if i < len(gaps):
            y += gaps[i]
    return canvas


def compose_card(title: str, kicker: str, subtitle: str, script: str = "Youth") -> Image.Image:
    card = sky().convert("RGBA")

    cloud_tl = scale_rgba(ASSETS / "pixel-cloud-1-transparent.png", 270, nearest=True)
    cloud_br = scale_rgba(ASSETS / "pixel-cloud-4-transparent.png", 230, nearest=True)
    paste(card, cloud_tl, (8, 8))
    paste(card, cloud_br, (W - cloud_br.width - 16, H - cloud_br.height - 28))

    logo = scale_rgba(ASSETS / "logo-header-navy.png", 520)
    script_img = script_lockup(script)
    title_img = text_layer(title.upper(), oswald(56, 700), INK, tracking=3.0)
    kicker_img = text_layer(kicker.upper(), oswald(24, 600), BLUE_DARK, tracking=4.4)
    sub_img = text_layer(subtitle, dm_sans(26, 500), INK_SOFT, tracking=0.3)

    # Tight lockup like the site: script sits on the varsity title.
    column = stack_centered(
        [logo, script_img, title_img, kicker_img, sub_img],
        gaps=[28, -22, 22, 14],
    )
    x = (W - column.width) // 2
    y = (H - column.height) // 2 + 12
    paste(card, column, (x, y))
    return card.convert("RGB")


CARDS = [
    {
        "name": "home.png",
        "title": "Youth pitching lessons",
        "kicker": "Naples, FL  ·  ages 8–16",
        "subtitle": "Coach Deising  ·  Pitching101",
        "copies": [
            ROOT / "src" / "app" / "opengraph-image.png",
            ROOT / "src" / "app" / "twitter-image.png",
        ],
    },
    {
        "name": "guides.png",
        "title": "Youth pitching guides",
        "kicker": "Free  ·  ages 8–16",
        "subtitle": "Arm care, strike tips, pre-catch warmup",
    },
    {
        "name": "contact.png",
        "title": "Get started",
        "kicker": "Ages 8–16  ·  Naples, FL",
        "subtitle": "We'll respond within 24 business hours",
    },
    {
        "name": "arm-care-checklist.png",
        "title": "Arm-care checklist",
        "kicker": "Free guide",
        "subtitle": "Warm-up and cool-down from lessons",
    },
    {
        "name": "strike-tips.png",
        "title": "Strike tips",
        "kicker": "Free guide",
        "subtitle": "Simple cues for more strikes",
    },
    {
        "name": "pre-catch-warmup.png",
        "title": "Pre-catch warmup",
        "kicker": "Free guide",
        "subtitle": "A short routine so catch starts ready",
    },
]


def main() -> None:
    ensure_fonts()
    OUT_OG.mkdir(parents=True, exist_ok=True)
    for spec in CARDS:
        image = compose_card(spec["title"], spec["kicker"], spec["subtitle"])
        dest = OUT_OG / spec["name"]
        image.save(dest, "PNG", optimize=True)
        for copy in spec.get("copies", []):
            shutil.copyfile(dest, copy)
        print(f"wrote {dest.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
