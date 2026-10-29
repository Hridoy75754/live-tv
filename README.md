# Free Live TV Website (GitHub Pages + HLS.js)

## Files
- `index.html`: responsive player, M3U/M3U8 playlist parser, search, categories, fullscreen.
- `channels.m3u`: the published default channel catalogue for all visitors.

## Publish with GitHub Pages
1. Sign in at https://github.com/ and create a new **public** repository, for example `live-tv`.
2. Upload `index.html` and `channels.m3u` to the repository root.
3. Edit `channels.m3u` and replace the example entry with streams you are authorized to distribute. Commit changes.
   Format:
   `#EXTINF:-1 tvg-logo="https://your-domain/logo.png" group-title="News",Channel Name`
   `https://your-authorized-stream.example/live/index.m3u8`
4. Open repository **Settings → Pages**.
5. Under Build and deployment, choose **Deploy from a branch**, select `main` and `/(root)`, then Save.
6. Wait for the Pages deployment to finish. Your site will be published at a URL like `https://YOUR-USERNAME.github.io/live-tv/`.

## Important behavior
- `channels.m3u` is fetched when the public site loads; edits to this file become the shared catalogue after GitHub Pages redeploys.
- M3U file uploads, M3U URL imports, and manually added streams in the page are stored only in that visitor's browser (localStorage); they do not change the public catalogue.
- M3U URL import requires the playlist host to permit cross-origin browser access (CORS). If it fails, download the playlist and upload the file.
- Publicly loading a URL does not grant permission to redistribute its streams. Use only streams you own or have permission to publish.
- This is static hosting; it does not proxy, relay, transcode, or host video streams. Playback/buffering depends on the source host, format, CORS, and internet connection.
- Never put private tokens, passwords, or secret playlist URLs in a public repository.
