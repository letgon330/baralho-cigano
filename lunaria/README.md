# ☾ LUNÁRIA — Biblioteca Arcana

**Onde a magia encontra o conhecimento.**

Site estático, responsivo e acessível para organizar uma biblioteca pessoal de Bruxaria, Wicca, Paganismo, Magia, Tarot, Baralho Cigano, Espiritualidade, Mitologias, Hermetismo, Alquimia e outros saberes.

## Funcionalidades

- Página inicial com identidade em rosa-bebê, lilás, vinho e dourado e ilustração da lua e dos livros.
- **20 categorias fixas** conforme o planejamento da Biblioteca Arcana.
- **54 títulos bibliográficos iniciais** referenciados no acervo do projeto (somente metadados, sem PDFs).
- Pesquisa por título, autor ou categoria.
- Filtros por área, favoritos e progresso de leitura, além de ordenação.
- Seção de destaques, trilhas para estudo e "Meu Santuário".
- Adição e edição de livros e seus links externos, com possibilidade de remover itens pessoais.
- Importação de catálogo em **CSV, TSV ou JSON**, inclusive listas exportadas de planilhas.
- Backup/restauração de livros, favoritos, links e progresso de leitura por arquivo JSON.
- Favoritos e acompanhamento de leitura ("ainda não comecei", "estou lendo", "concluído").
- Layout para computador, tablet e celular.

## Arquivos

- **index.html** — estrutura do site e textos.
- **styles.css** — layout e estilo responsivo.
- **app.js** — funcionamento do catálogo.
- **modelo-catalogo.csv** — modelo para importar livros em massa.

Não há dependências de compilação, banco de dados, login ou API. Basta hospedar os arquivos num servidor estático (GitHub Pages funciona).

## Publicar em um repositório próprio no GitHub Pages

Esta versão inicial foi desenvolvida **numa pasta e branch isoladas** do repositório existente `baralho-cigano`, sem modificar a branch principal. Para ter um endereço dedicado à Lunária e não interferir no outro site:

1. Crie um repositório público chamado `lunaria-biblioteca-arcana` em https://github.com/new.
2. Copie **os arquivos da pasta `lunaria`** para a raiz desse novo repositório, mantendo `index.html`, `styles.css` e `app.js` na mesma pasta.
3. Abra **Settings → Pages** no novo repositório.
4. Em **Build and deployment → Source**, escolha **Deploy from a branch**; em **Branch**, selecione **main** e **/(root)**, e clique **Save**.
5. Aguarde a publicação indicada pelo próprio GitHub.

O endereço normalmente fica no padrão `https://SEU-USUARIO.github.io/lunaria-biblioteca-arcana/`, mas só use o link depois de confirmar a publicação em **Settings → Pages**.

## Como importar livros

Na seção **Biblioteca Mística**, clique **Importar catálogo**. O arquivo pode ter as colunas:

```csv
titulo;autor;aba;link;descricao
Meu grimório;Autora Exemplo;02;https://exemplo.com/documento-autorizado.pdf;Livro de estudo
Outro livro;Autor Exemplo;13;;Minha observação
```

- A coluna `aba` aceita `02`, `ABA 02` ou o nome completo de uma categoria.
- Colunas alternativas aceitas: `title`, `author`, `category`, `url` ou `description`.
- Links são opcionais.
- Linhas repetidas com mesmo título e autor são ignoradas.
- Os PDFs não são importados automaticamente: o catálogo guarda metadados e **links fornecidos por você**.

Para preservar sua biblioteca entre dispositivos, clique **Exportar meu catálogo**; no outro dispositivo, importe o arquivo JSON gerado.

## Privacidade e direitos autorais

**Importante:** favoritos, status, livros adicionados e links ficam salvos **no armazenamento local do navegador (localStorage)**. Isso significa que **não existe sincronização automática entre computador e iPhone**, nem login ou armazenamento em nuvem. Limpar os dados do navegador pode apagar o catálogo personalizado; faça backup periodicamente.

Os títulos de exemplo foram incluídos apenas como **referências bibliográficas**, sem digitalizações, capas oficiais ou arquivos PDF de terceiros. Não publique livros protegidos por direitos autorais em um repositório público sem a autorização apropriada.

## Personalização

Edite no arquivo `app.js`:
- `CATEGORIES`: as 20 categorias, seus subtítulos e símbolos.
- `EXAMPLES`: lista de livros iniciais, no formato `[título, autor, número da aba]`.

A identidade visual está no arquivo `styles.css`; as cores principais usam as variáveis `--cream`, `--blush`, `--deep`, `--rose` e `--gold`.

**LUNÁRIA — Cada livro é um portal. Cada página, uma nova descoberta.**
