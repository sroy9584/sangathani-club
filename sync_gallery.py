"""
Sangathani Club - Durga Puja 2026 Gallery Synchronizer
Scans Photos/gallery/ for photos from the Google Photos album:
https://photos.app.goo.gl/PCDCMPtp4z3qr3jR6
and registers them for the editorial masonry gallery and lightbox.
"""

import os
import json
import re

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

    items = []
    # Editorial masonry pattern rhythms
    tile_types = ["hero", "tall", "wide", "square", "square", "tall", "wide", "square", "square", "wide"]

    for idx, filename in enumerate(files):
        num = idx + 1
        tile_type = tile_types[idx % len(tile_types)] if idx > 0 else "hero"
        ext = os.path.splitext(filename)[1].lower()
        
        items.append({
            "id": num,
            "filename": filename,
            "src": f"Photos/gallery/{filename}",
            "downloadName": f"sangathani-club-durga-puja-2026-{num:02d}{ext}",
            "caption": f"Durga Puja 2026 · Moment {num:02d}",
            "category": "durga-2026",
            "year": "2026",
            "tileType": tile_type
        })

    with open(OUTPUT_JSON, "w", encoding="utf-8") as f:
        json.dump(items, f, indent=2, ensure_ascii=False)

    print(f"Updated {OUTPUT_JSON} with {len(items)} items.")

if __name__ == "__main__":
    sync_gallery()
