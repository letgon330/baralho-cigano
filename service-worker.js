/*
 * Service worker do Baralho Cigano.
 * Mantém a aplicação estática estável e injeta apenas a correção
 * responsiva do layout em páginas HTML, sem alterar os dados da aplicação.
 */

const MOBILE_LAYOUT_CSS = './mobile-layout-fix.css';

self.addEventListener('install', event => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    try {
      const keys = await caches.keys();
      await Promise.all(keys.map(key => caches.delete(key)));
    } catch (error) {
      console.warn('Limpeza do cache antigo não concluída:', error);
    }
  })());
});

self.addEventListener('fetch', event => {
  const request = event.request;

  if (request.method !== 'GET' || request.mode !== 'navigate') return;

  event.respondWith((async () => {
    try {
      const response = await fetch(request);
      const contentType = response.headers.get('content-type') || '';

      if (!contentType.includes('text/html')) return response;

      const html = await response.text();
      const tag = `<link rel="stylesheet" href="${MOBILE_LAYOUT_CSS}">`;

      if (html.includes('mobile-layout-fix.css')) {
        return new Response(html, {
          status: response.status,
          statusText: response.statusText,
          headers: response.headers
        });
      }

      const updatedHtml = html.replace(/<\/head>/i, `${tag}</head>`);

      return new Response(updatedHtml, {
        status: response.status,
        statusText: response.statusText,
        headers: response.headers
      });
    } catch (error) {
      console.warn('Falha ao aplicar correção responsiva:', error);
      return fetch(request);
    }
  })());
});
