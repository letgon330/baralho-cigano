# Auditoria de importações — PR #2 — 15/10/2026

## Escopo e critérios
Auditados os dados atualmente versionados de 775 combinações, 114 variações e 239 observações por carta (NOVOS a NOVOS 7).
A comparação automatizada usa: (a) carta1 + carta2 + categoria para chaves; (b) carta1 + carta2 + texto normalizado para identificar repetições literais entre categorias; (c) confronto das variantes com seus registros principais; (d) verificação de campos essenciais (interpretação, fonte e página).
A normalização de texto remove apenas diferenciação de maiúsculas, acentos e pontuação para comparar. Não confundir esta auditoria estrutural com certificação de fidelidade visual integral ao PDF.

## Resultados e alterações aplicadas
- Banco principal: **775 → 772 registros**. Removidas três duplicidades de texto comprovadamente idêntico, apesar das categorias diferentes:
  - Sol (31) + Casa (4), “Felicidade no lar, família próspera.” — NOVOS 2 p.58 / NOVOS 4 p.126.
  - Estrelas (16) + Sol (31), “Realização de sonhos, proteção divina no sucesso.” — mesmas fontes e páginas.
  - Casa (4) + Estrelas (16), “Lar abençoado, espiritualidade em casa.” — mesmas fontes e páginas.
- Variações: **114 → 108 registros**. Seis entradas com texto igual ao principal deixaram de ser classificadas como “variações” (pares 4+9, 12+1, 12+3, 3+12, 12+4 e 4+12). Não foi apagada nenhuma interpretação distinta.
- **9 ocorrências de fonte/página/categoria preservadas** em `dados/auditoria-ocorrencias-repetidas.js`. Elas não são contabilizadas como novas interpretações, mas estão consultáveis no módulo de combinações e documentam por que houve consolidação.
- **660 registros históricos** reetiquetados como `conferência literal pendente`, sem modificar os textos. A etiqueta anterior `revisada visualmente` não comprovava se o texto era uma transcrição literal ou uma paráfrase.
- **239 observações por carta** distribuídas em sete arquivos NOVOS a NOVOS 7: nenhuma repetição de texto normalizado idêntico identificada nesse conjunto. Isso não implica ausência de redundância semântica.
- Revisão automática depois das correções: **772 chaves únicas**, **772 sentidos idênticos por par distintos**, **108 variantes sem coincidência textual com o principal**, **0 registros principais sem texto/fonte/página**.

## Cuidados: não confundir conteúdo igual com divergência de método
Categorias específicas continuam separadas quando oferecem texto realmente diferente; inversões de carta não são automaticamente equivalentes. Leituras espirituais, de saúde, sentimentos de terceiros e comportamentos são *simbólicas* e não comprovam acontecimentos.
Não foram eliminadas paráfrases semanticamente similares na ausência de cotejo seguro com as fontes; falsos positivos poderiam apagar versões de escola, contexto ou direção.

## Qualidade das fontes e auditoria restante
Esta etapa verificou a estrutura e fez triagem editorial inicial. **Não é uma certificação página a página de fidelidade textual dos PDFs**: 660 registros históricos necessitam cotejo imagem ↔ texto, pois parte das importações anteriores foi normalizada ou parafraseada. Os registros adicionais NOVOS foram etiquetados como resumos/trechos quando aplicável. Também permanecem por revisar possíveis equivalências semânticas entre categorias não idênticas, todas as variações por escola, as fichas individuais de sentimentos/tempo, os trios e a Base Mestra completa.
O `index.html` principal não foi alterado: integrar a biblioteca, verificar acessibilidade e testar JS em navegadores desktop e celulares ainda é necessário.

## Proteção da publicação
Tudo foi feito em `feature/biblioteca-orientacoes-pdfs-20261015`, para revisão no PR #2, sem mesclar à `main`.
