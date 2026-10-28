const CACHE_NAME = 'enciclopedia-cigana-biblioteca-v13';
const APP_SHELL = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icon-192.png',
  './icon-512.png',
  './apple-touch-icon.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async cache => {
      await Promise.all(
        APP_SHELL.map(url => cache.add(url).catch(() => null))
      );
      self.skipWaiting();
    })
  );
});

self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);

  // Não deixe o service worker interferir em recursos externos.
  if (url.origin !== self.location.origin) return;

  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req)
        .then(response => {
          if (response && response.ok) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(req, copy)).catch(() => {});
          }
          return response;
        })
        .catch(() =>
          caches.match(req).then(cached =>
            cached || caches.match('./index.html')
          )
        )
    );
    return;
  }

  event.respondWith(
    caches.match(req).then(async cached => {
      if (cached) return cached;

      try {
        const response = await fetch(req);

        if (response && response.ok && response.type === 'basic') {
          const copy = response.clone();
          caches.open(CACHE_NAME)
            .then(cache => cache.put(req, copy))
            .catch(() => {});
        }

        return response;
      } catch (error) {
        // Nunca propague uma rejeição do fetch pelo service worker.
        // Se não houver cache, devolve uma resposta HTTP controlada.
        return new Response('', {
          status: 503,
          statusText: 'Recurso temporariamente indisponível',
          headers: { 'Content-Type': 'text/plain; charset=utf-8' }
        });
      }
    })
  );
});
