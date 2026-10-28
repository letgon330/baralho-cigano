const CACHE_NAME = 'enciclopedia-cigana-biblioteca-v14';
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
    caches.open(CACHE_NAME)
      .then(cache => Promise.all(APP_SHELL.map(url => cache.add(url).catch(() => null))))
      .then(() => self.skipWaiting())
  );
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

self.addEventListener('message', event => {
  if (event.data?.type === 'SKIP_WAITING') self.skipWaiting();
});

/*
 * O aplicativo é servido como arquivos estáticos pela Vercel.
 * Não interceptamos mais as requisições da página nem dos scripts.
 * Isso evita que uma falha de rede/cache do service worker seja
 * transformada em "Failed to fetch" no aplicativo.
 *
 * O cache continua disponível para instalação/uso como PWA, mas
 * a rede permanece responsável por entregar os recursos normalmente.
 */
