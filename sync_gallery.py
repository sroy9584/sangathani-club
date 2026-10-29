"""
Sangathani Club - Multi-Event Gallery Synchronizer
Scans Photos/gallery/ and registers Durga Puja, Kali Puja, and Cultural photos.
"""

import os
import json

GALLERY_DIR = r"e:\Sangathani Club\Photos\gallery"
OUTPUT_JSON = r"e:\Sangathani Club\js\gallery-data.json"
SUPPORTED_EXTS = {".jpg", ".jpeg", ".png", ".webp"}

def sync_gallery():
    if not os.path.exists(GALLERY_DIR):
        os.makedirs(GALLERY_DIR, exist_ok=True)
        print(f"Created gallery folder at: {GALLERY_DIR}")

    files = sorted([
        f for f in os.listdir(GALLERY_DIR)
        if os.path.splitext(f)[1].lower() in SUPPORTED_EXTS
    ])

    print(f"Found {len(files)} photos in {GALLERY_DIR}")

    rhythms = [
        'tile-hero', 'tile-tall', 'tile-square', 'tile-tall', 'tile-wide',
        'tile-square', 'tile-wide', 'tile-tall', 'tile-square', 'tile-wide',
        'tile-hero', 'tile-tall', 'tile-wide', 'tile-square', 'tile-tall',
        'tile-wide', 'tile-square', 'tile-square', 'tile-tall', 'tile-wide'
    ]

    items = []
    for idx, filename in enumerate(files):
        num = idx + 1
        tile_type = rhythms[idx % len(rhythms)]
        ext = os.path.splitext(filename)[1].lower()

        if "kali" in filename.lower():
            category = "kali"
            year = "2025"
            caption = f"Shyama Kali Puja 2025 · Moment {num:02d}"
            download_name = f"sangathani-club-kali-puja-2025-{num:02d}{ext}"
        else:
            category = "durga"
            year = "2026"
            caption = f"Durga Puja 2026 · Moment {num:02d}"
            download_name = f"sangathani-club-durga-puja-2026-{num:02d}{ext}"

        items.append({
            "id": num,
            "filename": filename,
            "src": f"Photos/gallery/{filename}",
            "downloadName": download_name,
            "caption": caption,
            "category": category,
            "year": year,
            "tileType": tile_type
        })

    with open(OUTPUT_JSON, "w", encoding="utf-8") as f:
        json.dump(items, f, indent=2, ensure_ascii=False)

    print(f"Updated {OUTPUT_JSON} with {len(items)} items.")

if __name__ == "__main__":
    sync_gallery()
