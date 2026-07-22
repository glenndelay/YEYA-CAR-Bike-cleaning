from pathlib import Path
from PIL import Image, ImageDraw, ImageFilter

ROOT = Path(__file__).resolve().parents[1] / "public" / "images"
ROOT.mkdir(parents=True, exist_ok=True)

images = {
    "hero.jpg": ("YEYA CAR", (248, 246, 251), (91, 30, 166)),
    "detailing1.jpg": ("AUTO POETSEN", (248, 246, 251), (246, 195, 19)),
    "interior.jpg": ("INTERIEUR", (246, 247, 250), (91, 30, 166)),
    "motor.jpg": ("MOTOR POETSEN", (245, 244, 250), (225, 25, 25)),
    "polishing.jpg": ("POLIJSTEN", (248, 246, 251), (91, 30, 166)),
    "before-1.jpg": ("VOOR", (232, 230, 226), (120, 120, 116)),
    "after-1.jpg": ("NA", (248, 246, 251), (246, 195, 19)),
    "before-2.jpg": ("VOOR", (232, 233, 235), (130, 130, 130)),
    "after-2.jpg": ("NA", (246, 244, 250), (91, 30, 166)),
    "before-3.jpg": ("VOOR", (235, 232, 228), (128, 118, 108)),
    "after-3.jpg": ("NA", (248, 246, 251), (246, 195, 19)),
    "instagram-1.jpg": ("WASSEN", (248, 246, 251), (91, 30, 166)),
    "instagram-2.jpg": ("VELGEN", (246, 247, 250), (225, 25, 25)),
    "instagram-3.jpg": ("SCHOON", (248, 246, 251), (246, 195, 19)),
    "instagram-4.jpg": ("MOTOR", (245, 244, 250), (91, 30, 166)),
}


def make_image(filename: str, label: str, base: tuple[int, int, int], accent: tuple[int, int, int]) -> None:
    width, height = (1600, 1000) if filename == "hero.jpg" else (1200, 900)
    image = Image.new("RGB", (width, height), base)
    draw = ImageDraw.Draw(image, "RGBA")

    for y in range(height):
        opacity = int(180 * y / height)
        draw.line([(0, y), (width, y)], fill=(0, 0, 0, opacity))

    draw.ellipse((-width * 0.2, height * 0.05, width * 0.62, height * 0.92), fill=(*accent, 42))
    draw.ellipse((width * 0.42, -height * 0.2, width * 1.15, height * 0.55), fill=(255, 255, 255, 70))
    draw.rounded_rectangle((width * 0.12, height * 0.46, width * 0.88, height * 0.68), radius=height // 18, fill=(255, 255, 255, 120))
    draw.rounded_rectangle((width * 0.18, height * 0.58, width * 0.82, height * 0.76), radius=height // 20, fill=(20, 16, 34, 72))
    draw.line((width * 0.18, height * 0.42, width * 0.82, height * 0.42), fill=(*accent, 210), width=max(3, width // 260))
    draw.line((width * 0.2, height * 0.79, width * 0.8, height * 0.79), fill=(255, 255, 255, 55), width=max(2, width // 500))

    for cx in (width * 0.28, width * 0.72):
        draw.ellipse((cx - width * 0.055, height * 0.69, cx + width * 0.055, height * 0.81), fill=(20, 16, 34, 210))
        draw.ellipse((cx - width * 0.028, height * 0.72, cx + width * 0.028, height * 0.78), outline=(*accent, 180), width=max(2, width // 350))

    image = image.filter(ImageFilter.GaussianBlur(0.2))
    draw = ImageDraw.Draw(image, "RGBA")
    text = label
    box_w, box_h = width * 0.38, height * 0.095
    draw.rounded_rectangle((width * 0.08, height * 0.09, width * 0.08 + box_w, height * 0.09 + box_h), radius=18, fill=(20, 16, 34, 150), outline=(*accent, 150))
    draw.text((width * 0.105, height * 0.12), text, fill=(255, 255, 255, 230))
    image.save(ROOT / filename, quality=88, optimize=True)


for name, spec in images.items():
    make_image(name, *spec)
