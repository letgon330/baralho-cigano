# Guias visuais, conselhos e orientações dos PDFs

## Conteúdo integrado
- Nove guias com conferência visual e textual: narrativa de três cartas; passado/presente/futuro; fortalecimento do relacionamento; relacionamento em quinze cartas; novos romances; uma carta; linha do tempo; ferradura; cruz céltica.
- Cinquenta esquemas adicionais reaproveitados do catálogo já documentado, preservando as posições, a ordem e as lacunas. Total: 59 esquemas em Orientações > Guias visuais explicados; acesso correspondente em Métodos.
- Oito tópicos ilustrados com 18 ocorrências de imagens das cartas já existentes: Raposa no trabalho; Carta Oculta; sentimento/intenção/ação/resultado; sequências inversas; treino e registro; preparação da pergunta; Foice direcional; Ratos e Caminhos.
- Conselhos ilustrados transcritos em síntese e contextualizados após inspeção das imagens de NOVOS 7 (23–35), além dos guias didático, consolidado e Base Mestra. Origem preservada apenas nos objetos de auditoria.

## Fidelidade ao material
- Ferradura: texto descreve arco, figura mostra linha; divergência explicitada.
- Cruz céltica: 6 acima, 3 abaixo, 4 à esquerda, 5 à direita. Centro 1/2 na mesma célula com números legíveis.
- Quinze cartas: significados atribuídos por linha, sem inventar funções individuais por casa.
- Núcleo central e narrativa de três cartas permanecem técnicas distintas; a primeira segue 2, 1+3, 1+2, 2+3, integração.
- Carta Oculta: exemplo preservado, sem implementar fórmula matemática ausente no material.
- As ilustrações dos conselhos usam as cartas do próprio site, não capturas com marcas ou metadados pessoais dos documentos.

## Implementação
Arquivos: dados/guias-visuais-pdfs.js; dados/guias-visuais-interface.js; dados/integracao-biblioteca-abas.js; service-worker.js; este relatório. O grande index.html permanece igual ao remoto: dependências estáticas carregadas pela integração, em ordem, com mensagem de falha e preservação dos recursos anteriores.

## Validação
- Sintaxe dos scripts; DOM simulado com 59 figuras, 8 tópicos ilustrados, 18 imagens e posições correspondentes aos esquemas.
- Busca por método e navegação entre categorias; ausência de nomes de PDF e rótulos de fontes na apresentação testada.
- Regressão: 36 cartas, 828 consultas de categorias, 772 combinações e 108 variações.
- Verificação de padrões de credenciais e revisão do conteúdo adicionado: sem senhas, tokens, chaves privadas ou registros de usuários nos novos dados.
- Sem revisão visual em navegador, login, sincronização ou offline. Não foram examinadas individualmente todas as imagens dos mais de mil quadros dos materiais digitalizados. NOVOS.pdf e NOVOS 2.pdf não estão disponíveis nesta sessão; seus registros anteriormente cadastrados foram preservados.

## Envio
O commit local 50724c4 foi verificado. O Git local não possui autenticação para push; as alterações e complementos são enviados pela conexão GitHub, com novo identificador de commit, exclusivamente à branch feature/biblioteca-orientacoes-pdfs-20261015. Nenhum merge ou publicação em produção foi solicitado pelo agente.
