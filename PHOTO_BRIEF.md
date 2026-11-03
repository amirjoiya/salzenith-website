# Salzenith — Real Photography Brief (the whole site in 10 shots)

Prepared 2026-10-09. The entire 363-page site runs on just **10 image files**.
Every product page, range page and industry page reuses one of the 9 photos
below, so replacing these 9 files upgrades the whole site at once — no code
changes, no new filenames. Shoot these, drop them in with the **exact same
names**, rebuild, re-upload (see DEPLOY.md).

## Technical specs (applies to all 9)

- Folder: `public/images/home/`
- Size: **1920 × 1280 px minimum (3:2, landscape)** — shoot wider/higher if you
  can; the site crops the same file to 16:10 (range cards), ~4:3.4 (homepage
  hero) and 6:5 (private label), so **keep the main subject centred with
  breathing room on all sides** — never tight to an edge.
- Format: JPG, good light, no filters, no text or logos baked into the image
  (except the private-label shot, where your own packaging is the point).
- One subject per shot, uncluttered background. Natural daylight or warm
  indoor light — no harsh flash.

## The 9 shots, in priority order

1. **hero.jpg** — The money shot. A pile / spread of raw pink salt chunks and
   crystals, deep pink colour, shot close enough to see crystal texture.
   Used on: homepage hero (the first thing every visitor sees).
2. **edible.jpg** — Edible salt: bowls of fine, coarse and crystal grades side
   by side so the grain differences read at a glance.
   Used on: Edible range + all its product pages, food-manufacturing,
   water-treatment, textile, leather, chemical and de-icing industry pages.
3. **lamps.jpg** — Salt lamps **switched on** in a dim room — the warm glow is
   the selling point. 3–5 lamps of different shapes/sizes grouped.
   Used on: Lamps range + all lamp product pages, home-décor industry page.
4. **private-label.jpg** — Your finished retail packaging (pouches/jars) lined
   up, labels facing camera. If own-label stock isn't ready, plain unbranded
   pouches/jars filled with pink salt still beats the placeholder.
   Used on: Private-label page hero, homepage private-label section,
   wholesale/distribution industry page.
5. **culinary.jpg** — Kitchen scene: pink salt in a grinder + a salt block /
   cooking slab in use, food context around it.
   Used on: Culinary range + product pages, food/culinary, HoReCa pages.
6. **bath.jpg** — Bath & spa: bath salt crystals in a bowl beside a tub or spa
   setting, towels/stones, calm tones.
   Used on: Bath & spa range + product pages, spa/wellness, beauty pages.
7. **licksalt.jpg** — Animal lick salt blocks (ideally with rope, in a
   farm/stable setting; livestock in frame is a bonus, not a requirement).
   Used on: Animal lick range + product pages, livestock and agriculture pages.
8. **construction.jpg** — Salt bricks/tiles: a built section of salt wall or a
   neat stack of salt bricks showing the translucent pink.
   Used on: Construction range + product pages, architecture industry page.
9. **candle.jpg** — Candle/tealight holders **lit**, close group, dark warm
   background so the glow through the salt shows.
   Used on: Candle holders range + product pages, hospitality industry page.

## Bonus file (optional, 10 minutes)

10. **og.jpg** — `public/og.jpg`, **1200 × 630 px**. This is the image
    shown when anyone shares salzenith.com on WhatsApp/social. A wide version
    of the hero shot works. Fixed 2026-10-12: the placeholder file was
    2736 × 912 (3:1) while the metadata declared 1200 × 630 — the file has
    been centre-cropped and resized to exactly 1200 × 630, so file and
    metadata now match. If you replace it with a real photo, keep it
    1200 × 630.

## How to hand this over

- **Photographer:** send this file as-is — one half-day shoot covers all 9.
- **DIY phone shoot:** shots 1, 2, 5, 6, 8 are daylight product shots and are
  phone-friendly. Shots 3 and 9 need a dim room and lit products. Shoot in the
  highest resolution, landscape, subject centred.
- **Delivery:** files named exactly as above → `public/images/home/`
  (og.jpg → `public/`) → run `node scripts/compress-images.mjs`
  (re-encodes each JPG at quality 80, same filenames and dimensions —
  camera/phone files are saved at near-maximum quality and would
  otherwise roughly double every visitor's download; the placeholders
  went from 4,072 KB total to 1,876 KB this way on 2026-10-17) →
  `npm run build` → upload `out/` per DEPLOY.md.

## Still separate from photography

WhatsApp/phone number for the topbar + floating button (not in the code yet —
~15 min to wire once the number exists) and real MOQ numbers for the
private-label terms sheet. Those two are unchanged by this brief.
