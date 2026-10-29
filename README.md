# Live TV Directory — GitHub Pages

A static browser-based player built from the channel lists you supplied.

## Included
- `index.html` — responsive player, search, category filter, playlist import, fullscreen, and stream failover.
- `channels.json` — grouped channel catalogue; multiple URLs for the same normalized channel are tried as backups.
- `channels.m3u` — portable M3U playlist with alternate URLs retained as repeated entries.

## Catalogue summary
- Channel groups: 715
- Stream URLs retained: 818
- Exact duplicate URLs removed before grouping.
- Obvious placeholders, URLs containing embedded username/password credentials, and signed/expiring token URLs were excluded from the public playlist.

## Publish to GitHub Pages
1. Create or open your repository (for example `Hridoy75754/live-tv`).
2. Upload `index.html`, `channels.json`, `channels.m3u`, and `README.md` to the repository root.
3. Commit the changes.
4. Open **Settings → Pages**. Choose **Deploy from a branch**, select `main` and `/(root)`, then save.
5. Wait for deployment. The site URL will resemble `https://USERNAME.github.io/REPOSITORY/`.

## Important
- A URL being included does **not** mean the stream was tested or that you have permission to redistribute it. Use only streams you own or are authorized to publish.
- The site does not host or relay streams. It plays them in the visitor's browser.
- Some streams will fail because of CORS, geographic/IP restrictions, provider changes, expired links, unsupported formats, or outages. The backup mechanism tries another supplied URL only when a playback error is detected; it cannot guarantee availability.
- Never commit private tokens, account credentials, paid-subscription links, or personal URLs to a public repository.
- `hls.js` is loaded from jsDelivr. Native HLS playback is used where supported.
