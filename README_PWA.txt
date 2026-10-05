ENCICLOPÉDIA CIGANA — VERSÃO PWA

Arquivos para enviar ao GitHub na raiz do repositório baralho-cigano:
- index.html (substitui o atual)
- manifest.webmanifest
- service-worker.js
- icon-192.png
- icon-512.png
- apple-touch-icon.png

Depois do commit, a Vercel deve implantar automaticamente.
Abra o endereço público HTTPS no celular.
Android/Chrome: use o botão “Instalar aplicativo” ou o menu > Instalar app / Adicionar à tela inicial.
iPhone/Safari: Compartilhar > Adicionar à Tela de Início.

A PWA usa cache para funcionar offline após a primeira visita.
Em atualizações futuras, o service-worker.js deve ter o CACHE_NAME incrementado (v2, v3...).
