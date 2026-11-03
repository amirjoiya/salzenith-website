# Salzenith — Hostinger Switchover Guide

Your new website is a **static export**: plain HTML/CSS/JS files in the `out/`
folder. No server, no database, no PHP — it runs on any Hostinger shared
hosting plan. Fast, secure, nothing to update or patch.

## What you're uploading

- **Ready-made archive — CURRENT APPROVED BUILD (prepared 2026-10-27):**
  `~/workspace/salzenith-preview-rich-rows-2026-10-27.zip`
  — the verified export below as a single 24 MB zip (2,955 files, 416 HTML
  pages, SHA-256 `bc5a0317c5aad977dc8ceb2611a4191fd91358bb45e0b3e42a0e6562965cd01b`).
  Instead of uploading thousands of files one by one, upload this one zip
  into `public_html` in hPanel File Manager and use **Extract** — the zip's
  root *is* the site root, and the hidden `.htaccess` is inside it.
  A locked copy of this exact archive is also kept at
  `~/workspace/salzenith-snapshots/2026-10-27-rich-rows-approved-build/`.
  **Stale after any rebuild:** if anything changes in `src/` (WhatsApp
  number, GA4 ID, privacy page, photo swap), rebuild first and make a
  fresh zip from the new `out/` — do not deploy this archive after a rebuild.
- Folder: `salzenith-next/out/` (about 128 MB)
- Contains: 413 sitemap URLs / 416 pages (home, 10 product ranges with 362 product detail pages, products hub, 18 industries,
  industries hub, export markets with 10 country profiles, private label, process, about, knowledge, contact, quote,
  plus team, certificates, quality, packaging, logistics-shipping, sustainability, samples, wholesale, trade-terms,
  export-policy, faq, privacy-policy, terms), with the rich product-row listings on every range page,
  plus `sitemap.xml`, `robots.txt`, images and assets.

## Before switchover day — back up WordPress (30 min, do not skip)

1. In Hostinger hPanel, open **Backups** and create a full website backup.
2. Also export one manual backup and download it to your computer.
3. Note your current WordPress admin URL — you may want it later.

If anything ever looks wrong after the switch, restoring this backup brings
the old site back exactly as it was.

## Switchover day

1. In hPanel, open **File Manager** → `public_html`.
2. Move everything currently in `public_html` into a backup folder
   **outside** `public_html` (e.g. `salzenith_wordpress_backup` in the
   account home folder, one level above `public_html`). Don't delete —
   just move. Keeping it inside `public_html` would leave the whole old
   WordPress site (including its login) publicly reachable at
   `salzenith.com/_wordpress_backup/`.
3. Upload the site into `public_html` — easiest way: upload the
   ready-made zip from "What you're uploading" above and use
   **Extract** in File Manager (the zip's root *is* the site root).
   Or upload **the contents** of the `out/` folder (not the folder itself).
   Either way, `public_html/index.html` must exist, not
   `public_html/out/index.html`. The export includes a hidden
   `.htaccess` file — enable "show hidden files" in File Manager and
   make sure it uploads too; it carries the redirects below.
4. Done. Visit salzenith.com — the new site is live.

Because the site uses `trailingSlash: true`, every page lives at
`/page-name/index.html`, which Apache serves correctly with zero config.

The included `.htaccess` (source: `public/.htaccess`) also:

- Forces HTTPS + non-www, matching the site's canonical URLs
- 301-redirects the old WordPress/WooCommerce URLs verified in the live
  sitemap on 2026-10-15 — `/shop/` → `/products/`, `/cart/` and
  `/checkout/` → `/quote/`, `/my-account/` → `/contact/` — so old
  bookmarks and any indexed links don't 404
- Serves the site's branded `/404.html` instead of the server default
- Compresses text assets (HTML/CSS/JS) and caches the hashed
  `/_next/static/` JS/CSS for a year; images get only a 2-day cache
  on purpose, so the planned same-filename photo swap (PHOTO_BRIEF.md)
  is not stuck behind a long cache, and HTML is never cached
- Sets basic security headers (HSTS — one year, subdomains, no
  preload — plus nosniff, SAMEORIGIN framing, referrer and
  permissions policies), each module-guarded so it
  cannot break the site if a module is absent
- Blocks web access to `_wordpress_backup/` if it is ever left in
  `public_html` by mistake

## After going live

- [ ] Open salzenith.com on phone + desktop, click through main pages
- [ ] Check `http://salzenith.com` and `https://www.salzenith.com` both
      redirect to `https://salzenith.com`
- [ ] Check `https://salzenith.com/shop/` lands on `/products/`, and a
      nonsense URL (e.g. `/no-such-page/`) shows the branded 404 page
- [ ] Optional: confirm a product page loads fast on a phone connection
      (the .htaccess compression/caching only takes effect server-side)
- [ ] Test the quote form (it opens a pre-filled email — check it arrives)
- [ ] Submit `https://salzenith.com/sitemap.xml` in Google Search Console
- [ ] Optional, when ready: analytics and Search Console verification are
      pre-wired — paste the GA4 measurement ID (`G-…`) and/or the Search
      Console "HTML tag" token into the `analytics` block in
      `src/data/business.ts`, rebuild and re-upload. Until a value is set,
      no analytics script or verification tag ships in the export.
- [ ] Keep the WordPress backup for at least 3 months

## Updating the site later

1. Edit the content/data files in `salzenith-next/src/`
2. Run `npm run build` — fresh files appear in `out/`
3. Re-upload the changed files via File Manager (or all of `out/`)
