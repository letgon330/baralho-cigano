/*
 * Service worker desativado.
 *
 * A aplicação é estática e deve ser carregada diretamente pela Vercel.
 * Este arquivo apenas remove caches/registro antigos para impedir que
 * uma versão anterior do service worker interfira no carregamento.
 */

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

    try {
      await self.clients.claim();
      await self.registration.unregister();
    } catch (error) {
      console.warn('Desregistro do service worker não concluído:', error);
    }
  })());
});
