# Pré-integração da biblioteca — 15/10/2026

## Mudanças efetivamente feitas nesta etapa
- Corrigida a duplicidade de listeners dos filtros da biblioteca: o evento agora invoca a função de renderização atualizada, evitando que o script antigo substitua o conteúdo ampliado após a busca.
- As interpretações documentadas na consulta de duas cartas passam a apresentar a **categoria**, a fonte, a página e, quando disponível, o estado do cotejo visual.
- Preservadas 772 combinações, 108 variações, 36 fichas do guia e o visual rosa de `orientacoes.html`.
- **Nenhuma alteração em `index.html` ou na `main`.**

## Verificações realizadas
- Compilação sintática dos 9 blocos JavaScript internos em `orientacoes.html`: 9/9 sem erros de sintaxe.
- Fontes de scripts externos referenciadas no HTML: 21 (21 caminhos distintos).
- Banco de cartas do guia: 36 registros; combinações: 772; variações: 108.
- Link de retorno ao site (`./index.html`) preservado.

## Limitação real de integração
O `index.html` da branch é um arquivo muito grande. A ferramenta de leitura do GitHub retorna apenas SHA e conteúdo vazio para esse arquivo, inclusive sob pedido de linhas específicas. Portanto **não foi seguro modificar diretamente o menu principal** sem risco de sobrescrever a página existente. A biblioteca permanece disponível em `orientacoes.html` na branch. Não alegar que o menu principal já contém seu acesso.

## Critérios de aceite ainda pendentes
- Obter uma cópia integral editável do `index.html` (por clone local/Work/ambiente capaz de recuperar o arquivo grande) e adicionar um link visível à biblioteca sem alterar outras funções.
- Testar em navegador real: abrir a biblioteca, buscar cartas, trocar categorias, verificar direção A+B vs B+A, consultar texto/fonte/página/variações, ver trios e métodos, confirmar responsividade móvel e ausência de erros de console.
- Validar deploy de prévia do PR, mantendo o PR em rascunho.
- Auditoria textual dos 392 registros históricos ainda pendentes pode continuar após os testes de navegação.
