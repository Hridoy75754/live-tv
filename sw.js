/* KP Live TV service worker.
   Makes the site installable as an app and keeps the page shell available if the network drops.
   It never touches cross-origin requests (live streams, Supabase, CDN scripts), so playback is unaffected.
   Same-origin files are fetched network-first, so visitors always get the newest version when online. */
const CACHE = 'kp-live-tv-shell-v1';
const SHELL = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './supabase-config.js'];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE)
      .then(cache => cache.addAll(SHELL))
      .catch(() => {})
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;   // streams, Supabase, CDNs: browser handles them
  if (request.headers.has('range')) return;

  event.respondWith(
    fetch(request)
      .then(response => {
        if (response && response.ok && response.type === 'basic') {
          const copy = response.clone();
          caches.open(CACHE).then(cache => cache.put(request, copy)).catch(() => {});
        }
        return response;
      })
      .catch(() =>
        caches.match(request, { ignoreSearch: true }).then(hit =>
          hit || (request.mode === 'navigate' ? caches.match('./index.html') : Response.error())
        )
      )
  );
});
