# Orientações integradas ao jogo

Ao abrir um método, o fluxo exibe o guia explicado junto ao esquema de posições. O guia acompanha trocas de método. Ao consultar a tiragem, o resultado inclui o mesmo guia, conselhos documentados das cartas selecionadas, observações compatíveis com o assunto, pares adjacentes na ordem efetiva, variações e trios documentados quando houver registro exato.

As lições ilustradas são selecionadas pelo tema e pelas cartas: Raposa no trabalho, técnicas direcionais da Foice/Ratos/Caminhos e distinções afetivas. Carta Oculta fica como estudo opcional nas tiragens de três cartas; os exemplos são identificados como complementares, sem acrescentar cartas ao jogo.

Para três cartas, substitui a orientação narrativa genérica pela sequência específica do método. Não altera cartas, perguntas ou critérios da tiragem. A leitura nova inclui as orientações ao salvar. Ao reabrir uma leitura anterior, mantém seu texto salvo e acrescenta uma consulta expansível das orientações atuais, sem regravar o registro.

Implementação: dados/orientacoes-no-jogo.js; uma inclusão no carregador dados/integracao-biblioteca-abas.js; atualização do cache no service-worker.js. Fontes e páginas não são renderizadas. Nenhuma dependência ou chamada de IA externa.

Validação: sintaxe JavaScript; carregamento ordenado dos três complementos em DOM simulado; abertura e geração de orientações nos 56 métodos; ordem específica da técnica do núcleo central; ausência de nomes PDF/fontes nos resultados testados; um único guia acompanhando a troca de método; inclusão no texto salvo e preservação da leitura ao carregar histórico. Regressão: 36 cartas, 828 consultas de categorias, 772 combinações, 108 variações. Conteúdo adicionado inspecionado e verificado contra padrões de credenciais. Revisão visual em navegador, login, sincronização e offline não realizados.

Alterações restritas à branch feature/biblioteca-orientacoes-pdfs-20261015, sem merge nem solicitação de publicação em produção.
