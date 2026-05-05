#!/bin/bash
# ─────────────────────────────────────────────────────────────
# Dianarose Logistics — Asset Download Script
# Run from the project root:  bash download-assets.sh
# URLs expire ~7 days from 5 May 2026
# ─────────────────────────────────────────────────────────────
set -e
echo "⬇ Downloading Figma assets into src/assets/..."
mkdir -p src/assets/images src/assets/logo src/assets/illustrations src/assets/clients

echo "  → hero-port.png"
curl -sL -o src/assets/images/hero-port.png "https://www.figma.com/api/mcp/asset/2baceaf7-ae17-4477-98a8-76309d414acc"

echo "  → truck.png"
curl -sL -o src/assets/images/truck.png "https://www.figma.com/api/mcp/asset/0511eea7-c0cd-4117-8218-a0a7d9fb74f6"

echo "  → team.png"
curl -sL -o src/assets/images/team.png "https://www.figma.com/api/mcp/asset/27421ec4-8b6a-45db-ae4f-ce75a0fb0c11"

echo "  → workers.png"
curl -sL -o src/assets/images/workers.png "https://www.figma.com/api/mcp/asset/df29f597-f79c-42cd-987d-409608816cc6"

echo "  → man-phone.png"
curl -sL -o src/assets/images/man-phone.png "https://www.figma.com/api/mcp/asset/403e1b02-32f8-4217-90e0-60afead7dd0d"

echo "  → woman-headset.png"
curl -sL -o src/assets/images/woman-headset.png "https://www.figma.com/api/mcp/asset/b79c9bf6-537b-4021-9bcd-5526e250c04c"

echo "  → man-thinking.png"
curl -sL -o src/assets/images/man-thinking.png "https://www.figma.com/api/mcp/asset/2132105a-a2f4-4112-b009-5ac99b069e5f"

echo "  → driver.png"
curl -sL -o src/assets/images/driver.png "https://www.figma.com/api/mcp/asset/876c8e11-a310-4782-adef-d39da4bbe9e0"

echo "  → logo.png"
curl -sL -o src/assets/logo/logo.png "https://www.figma.com/api/mcp/asset/92c189ff-5b0e-4eb9-bf04-65c83aaa727c"

echo "  → logo-white.png"
curl -sL -o src/assets/logo/logo-white.png "https://www.figma.com/api/mcp/asset/796453af-4502-4dda-8717-f03a53e78be9"

echo "  → clients-strip.png (all 4 client logos)"
curl -sL -o src/assets/clients/clients-strip.png "https://www.figma.com/api/mcp/asset/f766ba28-1deb-4e61-8196-6928818eada1"

echo ""
echo "✅ Downloaded. Sizes:"
find src/assets -name "*.png" -exec ls -lh {} \;
echo ""
echo "Next: update src/lib/assets.ts imports from .svg to .png"
