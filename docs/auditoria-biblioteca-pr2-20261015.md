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

## Continuação da auditoria de fidelidade — lote 1 (15/10/2026)
- PDF: `COMBINAÇÕES DAS CARTAS (2) (1).pdf`, páginas 5–9, inspecionadas visualmente.
- 30 registros principais cotejados, correspondentes aos pares Cavaleiro (01) + Trevo (02) até Estrelas (16), incluindo cada direção.
- 0 correções de conteúdo aplicadas: não foram encontradas divergências materiais que justificassem substituir os textos. A análise não atesta identidade tipográfica de pontuação e espaçamento.
- Status alterado de `conferência literal pendente` para `cotejo visual concluído (páginas 5–9)` nesses 30 registros; 630 permanecem pendentes do cotejo visual.
- Totais estruturais preservados: 772 combinações únicas, 108 variações distintas e nove ocorrências repetidas arquivadas.
- Próximo lote: páginas 10–16 e 18–20, seguido dos demais registros históricos. A página 17 é uma ficha individual, não um par.

## Continuação — cotejo literal do lote 2 (15/10/2026)
- Páginas 10–20 do PDF `COMBINAÇÕES DAS CARTAS (2) (1).pdf`, excluindo p. 17 (ficha individual).
- 56 combinações direcionais cotejadas, 2 transcrições corrigidas com evidência visual: Cavaleiro + Livro (p. 13: “Você se deparará”) e Chave + Cavaleiro (p. 15: “a partir daqui”). As 54 demais permaneceram sem alteração textual.
- Resultado acumulado: **86 de 660 históricos cotejados; 574 ainda pendentes; 2 correções textuais neste lote**.
- Relatório de alterações antes/depois: `docs/auditoria-fidelidade-lote2-20261015.md`.
- Permanecem 772 combinações, 108 variações e 9 ocorrências repetidas arquivadas. A identidade tipográfica de pontuação/espaçamento não foi certificada.

## Continuação — cotejo literal do lote 3 (páginas 21–31)
- Fonte: `COMBINAÇÕES DAS CARTAS (2) (1).pdf`, páginas 21–29 e 31; página 30 contém ficha individual do Navio.
- **54 interpretações direcionais cotejadas**: Trevo (02) com cartas 11–36 em ambas as ordens, além de Navio (03) + Casa (04) e Casa + Navio.
- **0 alterações materiais de texto** neste lote: os registros correspondem às interpretações legíveis; pontuação e tipografia estritas não foram certificadas.
- Total histórico acumulado: **140/660 conferidos** (86 anteriores + 54), **520 pendentes**. Correções textuais acumuladas: **2** dos lotes anteriores.
- Banco principal segue com 772 combinações, 108 variações documentadas e 9 ocorrências repetidas preservadas.
- Observação: a fonte usa literalmente “Homem estressado e problemático” em Cigana + Trevo, mesmo sendo uma associação aparentemente inconsistente. Texto mantido por fidelidade à origem; não houve emenda interpretativa silenciosa.

## Continuação — cotejo visual do lote 4 (páginas 32–42)
- Fonte: `COMBINAÇÕES DAS CARTAS (2) (1).pdf`, páginas 32 a 42, conferidas nas imagens originais.
- **64 interpretações direcionais revisadas**: Navio (03) com cartas 05–36 e respectivas ordens inversas.
- **0 correções textuais neste lote**. Não foi comprovada divergência material. As redações existentes foram preservadas, inclusive `Navio + Âncora: Viagem chata;` conforme a página 42.
- Acumulado dos registros históricos: **204 de 660 cotejados**, **456 pendentes**; **2 correções textuais acumuladas** nos lotes anteriores.
- Banco principal continua com **772 combinações**, **108 variações** e **9 ocorrências de fonte repetidas**, preservadas. A auditoria não certifica identidade tipográfica absoluta de pontuação, espaços e maiúsculas.
- Próximo lote: página 43 em diante (Casa), descontadas as páginas que não apresentem combinações novas.

## Continuação — cotejo visual do lote 5 (páginas 43–55)
- PDF `COMBINAÇÕES DAS CARTAS (2) (1).pdf`: página 43 contém a ficha individual da Casa; página 44 repete pares já cadastrados anteriormente; nas páginas **45 a 55** há **64 registros direcionais pendentes** da Casa (04) com Árvore (05) até Cruz (36), em ambas as ordens.
- **64 registros conferidos nesta etapa**, comparados visualmente com as respectivas imagens.
- **0 correções textuais comprovadas**; os textos foram mantidos e apenas o estado da auditoria foi atualizado. A revisão não certifica pontuação, caixa e espaçamento caractere por caractere.
- Acumulado dos 660 registros históricos: **268 conferidos**, **392 pendentes**, **2 correções textuais anteriores documentadas**.
- A biblioteca mantém 772 interpretações principais, 108 variantes distintas e 9 ocorrências de fontes repetidas arquivadas.
- Próxima etapa: páginas 56 em diante, começando pelas combinações da Árvore; não alterar a main.
