/*
 * Service worker de compatibilidade.
 *
 * A aplicação é estática e deve ser carregada diretamente pela Vercel.
 * O service worker não intercepta requisições nem assume o controle da página.
 * Isso evita recarregamentos inesperados no Safari/iPhone e no PWA,
 * especialmente enquanto campos de formulário recebem foco e o teclado
 * virtual altera o viewport.
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

    // Não usar clients.claim() aqui.
    // O index.html possui tratamento de controllerchange que recarrega a página.
    // Em iOS isso pode causar uma navegação/reload inesperado no PWA.
    try {
      await self.registration.unregister();
    } catch (error) {
      console.warn('Desregistro do service worker não concluído:', error);
    }
  })());
});
