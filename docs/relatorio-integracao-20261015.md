# Integração da biblioteca — 15/10/2026

Branch exclusiva: feature/biblioteca-orientacoes-pdfs-20261015. PR #2 permanece draft. Sem merge nem alteração da main.

## Entrega
- index.html: menu Orientações, carregamento dos dados e integração, ajustes de controles para telas estreitas.
- dados/integracao-biblioteca-abas.js: 772 combinações e 108 variações na consulta principal, ordem inversa, pesquisa textual e categorias; significados complementares nas fichas, sentimentos, tempo e técnicas nos métodos.
- orientacoes.html e dados/apresentacao-publica.js: apresentação sem rótulos de arquivos e páginas; metadados originais preservados nos objetos.
- service-worker.js: correção de sintaxe e cache de navegação por URL.

## Verificações efetivas
- Parsing de todos os scripts de ambas as páginas, dados e service worker: aprovado.
- DOM simulado (JSDOM), sem autenticação real: 36 cartas, 828 consultas de categorias sem exceção, sentimentos disponíveis nas 36 cartas, biblioteca integrada na consulta de pares, busca sem resultados com contador zero.
- Renderizações das categorias das 36 cartas: nenhum nome .pdf ou rótulo Fonte: encontrado.
- Orientações: execução dos scripts sem exceção; nenhum nome de PDF ou indicação numérica de página no conteúdo renderizado.
- Dados originais de conteúdo não modificados.

## Limitações
- Revisão visual desktop/mobile não executada: Chromium ausente; instalação falhou. CSS responsivo ajustado, sem alegar validação visual.
- Login, sincronização remota e instalação/offline do PWA não testados; dependem dos serviços existentes.
- Teste de DOM usou um cliente de autenticação simulado somente no teste, sem modificar o login do projeto.
- A implantação de prévia depende da integração Vercel do repositório. Produção não foi publicada por esta alteração.
