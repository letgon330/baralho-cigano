/* Lunária — Biblioteca Arcana | Catálogo público ilustrativo + acervo pessoal local */
(() => {
  "use strict";
  const CATEGORIES = [
    ["Autoconhecimento, Meditação e Gnose","Explore sua consciência e os caminhos do despertar interior.","☾"],
    ["Bruxaria, Wicca e Paganismo","Conheça tradições pagãs, a espiritualidade da natureza e a arte da bruxaria.","✧"],
    ["Magia Natural e Elemental","Descubra o simbolismo e as práticas associados aos elementos da natureza.","❀"],
    ["Ervas, Banhos, Incensos e Cristais","Explore os usos tradicionais e simbólicos dos elementos naturais.","✿"],
    ["Feitiços, Rituais e Proteção","Conheça práticas ritualísticas, encantamentos e tradições de proteção espiritual.","✦"],
    ["Magia Lunar e Astrologia","Explore os ciclos lunares, os astros e suas interpretações simbólicas.","☽"],
    ["Tarot, Baralho Cigano e Oráculos","Desvende as cartas, os símbolos e os diferentes métodos de interpretação.","✧"],
    ["Numerologia e Simbolismo","Descubra as tradições de interpretação dos números e símbolos sagrados.","∞"],
    ["Espiritualidade, Mediunidade e Plano Astral","Explore diferentes concepções sobre o espírito e os planos de existência.","✶"],
    ["Xamanismo e Druidismo","Conheça tradições ancestrais e sua relação com a natureza.","♧"],
    ["Mitologias e Religiões Antigas","Viaje pelas histórias, divindades e crenças das civilizações antigas.","✺"],
    ["Budismo, Hinduísmo e Filosofias Orientais","Descubra ensinamentos e caminhos de desenvolvimento espiritual do Oriente.","❋"],
    ["Hermetismo, Alquimia e Cabala","Investigue as tradições herméticas e os símbolos da transformação.","◇"],
    ["Magia Cerimonial, Angelical e Enochiana","Estude sistemas de magia ritual e suas estruturas simbólicas.","✳"],
    ["Goétia e Magia do Caos","Explore diferentes sistemas de ocultismo e práticas mágicas contemporâneas.","✴"],
    ["Umbanda, Quimbanda e Benzimentos","Conheça tradições espirituais brasileiras e seus saberes populares.","❈"],
    ["Magia Sexual e Manifestação","Investigue tradições que relacionam energia criativa, desejo e intenção.","♡"],
    ["Ocultismo, Teosofia e Maçonaria","Descubra correntes filosóficas, escolas iniciáticas e ensinamentos esotéricos.","✥"],
    ["Plantas Medicinais e Saúde","Explore conhecimentos botânicos e usos tradicionais das plantas.","❀"],
    ["História, Enciclopédias e Temas Diversos","Consulte pesquisas históricas, obras de referência e conteúdos complementares.","✧"]
  ].map((c,i) => ({id:i+1,name:c[0],description:c[1],symbol:c[2]}));

  // Referências de livros realmente citados pelo proprietário do acervo.
  // Apenas metadados: nenhum PDF protegido é incorporado ao repositório.
  const EXAMPLES = [
    ["Wicca para Todos","Claudiney Prieto",2],
    ["Guia Essencial da Bruxa Solitária","Scott Cunningham",2],
    ["O Livro Completo de Bruxaria","Raymond Buckland",2],
    ["A Bíblia das Bruxas","Janet e Stewart Farrar",2],
    ["A Bruxaria Hoje","Gerald Gardner",2],
    ["O Oráculo da Deusa","Amy Sophia Marashinsky",7],
    ["O Livro de Runas","Ralph Blum",7],
    ["O Livro de Thoth","Aleister Crowley",7],
    ["Guia de Combinações — Desbloqueie Suas Tiragens","",7],
    ["Guia Didático Baralho Cigano — Métodos de Tiragem","",7],
    ["A Cabala Mística","Dion Fortune",13],
    ["O Mistério das Catedrais","Fulcanelli",13],
    ["A Chave da Alquimia","Paracelso",13],
    ["Alquimia: Introdução ao Simbolismo","Marie-Louise von Franz",13],
    ["A Árvore da Vida","Israel Regardie",13],
    ["Magia Natural","Scott Cunningham",3],
    ["Bruxa Natural — Guia Completo","",3],
    ["Os Elementais","",3],
    ["O Poder do Mito","Joseph Campbell",11],
    ["Os Deuses do Egito","Claude Traunecker",11],
    ["A Grande Epopeia dos Celtas","Jean Markale",11],
    ["Xamanismo — A Arte do Êxtase","Mircea Eliade",10],
    ["Sabedoria e Magia dos Celtas","Ana Elizabeth Cavalcanti da Costa",10],
    ["Os Druidas, Sacerdotes-Xamãs dos Celtas","Alan Impelliceri",10],
    ["A Astrologia Egípcia","François Suzzarini",6],
    ["A Astrologia da Mãe-Terra","Marcia Starck",6],
    ["Numerologia Fácil","",8],
    ["O Significado Místico dos Números","Jean Lauand",8],
    ["Síntese do Hinduísmo","",12],
    ["Tratado das Plantas Medicinais","Telma Sueli Mesquita Grandi",19],
    ["A Cura Através dos Chás","",19],
    ["Vampirismo","J. Herculano Pires",9],
    ["Sonhos: Mensagens da Alma","Adenáuer Novaes",9],
    ["A Visão Espírita do Sono e dos Sonhos","Carlos Bernardo Loureiro",9],
    ["O Livro da Bruxa","Roberto Lopes",20],
    ["Malleus Maleficarum","Heinrich Kramer",20],
    ["Mulheres que Correm com os Lobos","Clarissa Pinkola Estés",1],
    ["A Visão e a Voz","Aleister Crowley",14],
    ["A Hora das Bruxas — Volume 1","Anne Rice",20],
    ["Reinventando Tradições — Bruxaria Neopagã no Brasil","Janluis Duarte",20],
    ["Os Andarilhos do Bem","",20],
    ["Feitiços e Encantos","Eddie Van Feu",5],
    ["O Livro das Sombras","",2],
    ["O Livro de Ouro da Mitologia","Thomas Bulfinch",11],
    ["Runas — O Texto Rúnico","",7],
    ["O Retorno da Deusa","Neide Miele",2],
    ["Medicina Alternativa de A à Z","",19],
    ["A Moderna Feitiçaria","",2],
    ["Mitos Hindus e Budistas","",12],
    ["O Anuário da Grande Mãe","",2],
    ["Wicca — Crenças e Práticas","Gary Cantrell",2],
    ["Wicca — A Bruxaria Saindo das Sombras","MillenniuM",2],
    ["O Livro das Religiões","",20],
    ["As Mulheres Celtas","",11]
  ].map((a,i) => ({id:"seed-"+i,title:a[0],author:a[1],category:a[2],description:"Referência bibliográfica do acervo Lunária.",url:"",origin:"seed"}));

  const STORE_KEY = "lunaria-biblioteca-v1";
  const $ = (id) => document.getElementById(id);
  let saved = {};
  try { saved = JSON.parse(localStorage.getItem(STORE_KEY) || "{}") || {}; } catch (_) {}
  let state = {
    customBooks:Array.isArray(saved.customBooks) ? saved.customBooks : [],
    overrides:saved.overrides && typeof saved.overrides === "object" ? saved.overrides : {},
    favorites:Array.isArray(saved.favorites) ? saved.favorites : [],
    statuses:saved.statuses && typeof saved.statuses === "object" ? saved.statuses : {}
  };
  let search = "", categoryFilter = "", statusFilter = "", sort = "az", visibleLimit = 12, selectedBook = null, toastTimer;

  function save() { try { localStorage.setItem(STORE_KEY,JSON.stringify(state)); } catch(_) { toast("Não foi possível salvar. Verifique o espaço de armazenamento."); } }
  function text(v) { return String(v == null ? "" : v); }
  function esc(v) { return text(v).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"); }
  function normal(v) { return text(v).normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().trim(); }
  function category(id) { return CATEGORIES.find(c => c.id === Number(id)) || CATEGORIES[19]; }
  function allBooks() {
    return EXAMPLES.map(b => Object.assign({},b,state.overrides[b.id] || {},{id:b.id,origin:"seed"}))
      .concat(state.customBooks.filter(b=>b && b.title).map(b=>Object.assign({},b,{origin:"custom"})));
  }
  function getBook(id) { return allBooks().find(b=>b.id === id); }
  function fav(id) { return state.favorites.includes(id); }
  function bookStatus(id) { return state.statuses[id] || "nao-iniciado"; }
  function toast(message) { const el=$("toast"); el.textContent=message; el.classList.add("visible");clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove("visible"),3500); }
  function validUrl(v) { try { const u=new URL(v); return u.protocol==="https:" || u.protocol==="http:" ? u.href : ""; } catch(_) { return ""; } }
  function cover(book) {
    const style=(Number(book.category)%6)+1;
    const heading=book.title.length>46?book.title.slice(0,46)+"…":book.title;
    return '<div class="book-cover cover-'+style+'"><div class="cover-inner"><span>✧</span><strong>'+esc(heading)+'</strong><small>LUNÁRIA · BIBLIOTECA ARCANA</small></div></div>';
  }
  function shortCat(book) { return category(book.category).name.split(",")[0]; }
  function favButton(book) { return '<button type="button" class="star-action '+(fav(book.id)?"is-fav":"")+'" data-fav="'+esc(book.id)+'" aria-label="'+(fav(book.id)?"Remover dos favoritos":"Adicionar aos favoritos")+'" title="Favoritar">'+(fav(book.id)?"♥":"♡")+'</button>'; }

  function renderCategories() {
    const books=allBooks();
    $("categoryGrid").innerHTML=CATEGORIES.map(c=>{
      const n=books.filter(b=>Number(b.category)===c.id).length;
      return '<button type="button" class="category-card" data-category="'+c.id+'"><span class="category-top"><span class="symbol">'+esc(c.symbol)+'</span><span class="number">ABA '+String(c.id).padStart(2,"0")+'</span></span><strong>'+esc(c.name)+'</strong><small>'+esc(c.description)+'</small><small class="cat-count">'+n+' título'+(n===1?"":"s")+' no catálogo</small></button>';
    }).join("");
    $("heroCount").textContent=books.length;
  }

  function renderFeatured() {
    const picks=["seed-2","seed-5","seed-11","seed-18"].map(getBook).filter(Boolean);
    $("featuredGrid").innerHTML=picks.map(b =>
      '<article class="featured-card">'+cover(b)+'<div class="featured-info"><span class="tiny-tag">'+esc(shortCat(b))+'</span><h3>'+esc(b.title)+'</h3><p>'+esc(b.author || "Autor não informado")+'</p><div class="card-bottom"><button type="button" class="more-button" data-open="'+esc(b.id)+'">Ver detalhes →</button>'+favButton(b)+'</div></div></article>'
    ).join("");
  }

  function getFiltered() {
    let result=allBooks().filter(b=>{
      const matchText=!search || normal(b.title+" "+b.author+" "+category(b.category).name).includes(normal(search));
      const matchCategory=!categoryFilter || Number(b.category)===Number(categoryFilter);
      const matchStatus=!statusFilter || (statusFilter==="favoritos"?fav(b.id):bookStatus(b.id)===statusFilter);
      return matchText && matchCategory && matchStatus;
    });
    const comp=(a,b)=>normal(a).localeCompare(normal(b),"pt-BR");
    if(sort==="za")result.sort((a,b)=>comp(b.title,a.title));
    else if(sort==="author")result.sort((a,b)=>comp(a.author||"zzz",b.author||"zzz")||comp(a.title,b.title));
    else result.sort((a,b)=>comp(a.title,b.title));
    return result;
  }

  function renderLibrary() {
    const books=getFiltered();
    $("resultsLabel").textContent=books.length+" título"+(books.length===1?" encontrado":"s encontrados");
    $("libraryGrid").innerHTML=books.slice(0,visibleLimit).map(b=>
      '<article class="book-card">'+cover(b)+'<div class="book-body"><span class="tiny-tag">'+esc(shortCat(b))+'</span><h3>'+esc(b.title)+'</h3><p class="author">'+esc(b.author||"Autor não informado")+'</p><div class="book-controls"><button type="button" class="more-button" data-open="'+esc(b.id)+'">Ver detalhes →</button>'+favButton(b)+'</div></div></article>'
    ).join("");
    $("emptyState").hidden=books.length>0;
    $("loadMore").hidden=books.length<=visibleLimit;
  }
  function renderSanctuary() {
    const live=allBooks();
    const list=live.filter(b=>fav(b.id));
    $("favCount").textContent=list.length;
    $("favStat").textContent=list.length;
    $("readingStat").textContent=live.filter(b=>bookStatus(b.id)==="lendo").length;
    $("doneStat").textContent=live.filter(b=>bookStatus(b.id)==="concluido").length;
    $("sanctuaryBooks").innerHTML=list.length?list.slice(0,4).map(b=>
      '<div class="mini-book"><span class="mini-cover">☾</span><span><strong>'+esc(b.title)+'</strong><small>'+esc(b.author||shortCat(b))+'</small></span><button type="button" title="Abrir detalhes" aria-label="Abrir detalhes" data-open="'+esc(b.id)+'">↗</button></div>'
    ).join(""):'<p class="panel-empty">Seus livros favoritos aparecerão aqui. ♡<br>Comece marcando um coração no catálogo.</p>';
  }
  function render() { renderCategories();renderFeatured();renderLibrary();renderSanctuary(); }
  function toggleFav(id) {
    if(!getBook(id))return;
    if(fav(id))state.favorites=state.favorites.filter(x=>x!==id);else state.favorites.push(id);
    save();render();if(selectedBook===id)renderDetails(id);
    toast(fav(id)?"Livro adicionado aos seus favoritos ♡":"Livro removido dos favoritos");
  }
  function renderDetails(id) {
    const b=getBook(id); if(!b)return; selectedBook=id;
    const url=validUrl(b.url),status=bookStatus(id);
    $("bookDetails").innerHTML='<div class="details-layout">'+cover(b)+'<div><p class="kicker">ABA '+String(b.category).padStart(2,"0")+'</p><h2>'+esc(b.title)+'</h2><p class="author">'+esc(b.author||"Autor não informado")+'</p><p class="details-category">'+esc(category(b.category).name)+'</p><p class="details-description">'+esc(b.description||"Uma obra para explorar na Biblioteca Arcana.")+'</p></div></div><div class="details-controls"><button type="button" class="button outline" data-fav="'+esc(b.id)+'">'+(fav(id)?"♥ Nos favoritos":"♡ Favoritar")+'</button><select id="detailStatus" aria-label="Situação da leitura"><option value="nao-iniciado"'+(status==="nao-iniciado"?" selected":"")+'>Ainda não comecei</option><option value="lendo"'+(status==="lendo"?" selected":"")+'>Estou lendo</option><option value="concluido"'+(status==="concluido"?" selected":"")+'>Leitura concluída</option></select><button type="button" class="button outline" data-edit="'+esc(b.id)+'">Editar dados</button>'+(url?'<a href="'+esc(url)+'" target="_blank" rel="noopener noreferrer" class="button primary">Abrir livro ↗</a>':'')+'</div>'+(b.origin==="custom"?'<button type="button" class="details-delete" data-delete="'+esc(b.id)+'">Remover livro do meu catálogo</button>':'')+(url?"":'<p class="form-note">Nenhum link de leitura foi cadastrado. Use “Editar dados” para adicioná-lo.</p>');
  }
  function openBook(id) { if(!getBook(id))return;renderDetails(id);$("bookDialog").showModal(); }

  function editBook(id) {
    const b=id?getBook(id):null;
    $("bookForm").reset();
    $("bookId").value=b?b.id:"";
    $("bookTitle").value=b?b.title:"";
    $("bookAuthor").value=b?b.author:"";
    $("bookCategory").value=b?b.category:"2";
    $("bookUrl").value=b?b.url:"";
    $("bookDescription").value=b?b.description:"";
    $("addDialogTitle").innerHTML=b?"Editar <em>livro</em>":"Adicionar <em>um livro</em>";
    if($("bookDialog").open)$("bookDialog").close();
    $("addDialog").showModal();
    $("bookTitle").focus();
  }
  function submitBook(evt) {
    evt.preventDefault();
    const id=$("bookId").value, title=$("bookTitle").value.trim(), author=$("bookAuthor").value.trim();
    const cat=Number($("bookCategory").value), userUrl=$("bookUrl").value.trim();
    const url=userUrl?validUrl(userUrl):"";
    if(!title || !CATEGORIES.some(c=>c.id===cat)){toast("Preencha o título e selecione uma categoria.");return;}
    if(userUrl && !url){toast("Informe um link válido começando com https:// ou http://.");return;}
    const update={title,author,category:cat,url,description:$("bookDescription").value.trim()};
    if(id.startsWith("seed-")) state.overrides[id]=update;
    else if(id.startsWith("personal-")) {
      const index=state.customBooks.findIndex(b=>b.id===id);if(index<0)return;
      state.customBooks[index]=Object.assign({},state.customBooks[index],update);
    } else {
      const duplicate=allBooks().some(b=>normal(b.title)===normal(title)&&normal(b.author)===normal(author));
      if(duplicate){toast("Este título já está no catálogo. Abra-o para editar.");return;}
      state.customBooks.push(Object.assign({id:"personal-"+Date.now()+"-"+Math.floor(Math.random()*99999),origin:"custom"},update));
    }
    save();$("addDialog").close();render();toast("Livro salvo na Biblioteca Arcana ✧");
  }
  function deleteBook(id) {
    const b=getBook(id);if(!b || b.origin!=="custom")return;
    if(!confirm('Deseja remover "'+b.title+'" do seu catálogo pessoal?'))return;
    state.customBooks=state.customBooks.filter(x=>x.id!==id);state.favorites=state.favorites.filter(x=>x!==id);delete state.statuses[id];save();$("bookDialog").close();render();toast("Livro removido do catálogo.");
  }

  function selectCategory(num) {
    categoryFilter=String(num);$("categoryFilter").value=categoryFilter;
    $("librarySearch").value="";$("heroSearch").value="";search="";
    $("statusFilter").value="";statusFilter="";visibleLimit=12;renderLibrary();
    document.querySelector("#biblioteca").scrollIntoView({behavior:"smooth"});
  }
  function clearFilters() {
    search="";categoryFilter="";statusFilter="";sort="az";visibleLimit=12;
    $("librarySearch").value="";$("heroSearch").value="";$("categoryFilter").value="";$("statusFilter").value="";$("sortSelect").value="az";renderLibrary();
  }

  function csvParse(raw) {
    const source=raw.replace(/^\uFEFF/,"").trim();
    if(!source)return [];
    const first=source.split(/\r?\n/)[0];
    const delimiters=[";",",","\t"];
    const sep=delimiters.sort((a,b)=>first.split(b).length-first.split(a).length)[0];
    const lines=[];let row=[],field="",quotes=false;
    for(let i=0;i<source.length;i++) {
      const char=source[i];
      if(char==='"') {if(quotes&&source[i+1]==='"'){field+='"';i++;}else quotes=!quotes;}
      else if(char===sep&&!quotes){row.push(field);field="";}
      else if((char==="\n"||char==="\r")&&!quotes){if(char==="\r"&&source[i+1]==="\n")i++;row.push(field);lines.push(row);row=[];field="";}
      else field+=char;
    }
    row.push(field);lines.push(row);
    const headers=(lines.shift()||[]).map(x=>normal(x).replace(/\s+/g,"_"));
    return lines.filter(x=>x.some(v=>v.trim())).map(cols=>{
      const obj={};headers.forEach((h,i)=>obj[h]=text(cols[i]).trim());return obj;
    });
  }
  function identifyCategory(raw) {
    if(Number.isInteger(Number(raw))&&Number(raw)>=1&&Number(raw)<=20)return Number(raw);
    const match=text(raw).match(/(?:aba\s*)?0?(20|1[0-9]|[1-9])/i);
    if(match && /aba/i.test(raw))return Number(match[1]);
    const n=normal(raw);
    const c=CATEGORIES.find(c=>normal(c.name)===n || normal(c.name).includes(n)&&n.length>=5);
    return c?c.id:20;
  }
  function parseImportedBook(raw) {
    if(!raw || typeof raw!=="object")return null;
    const title=text(raw.title||raw.titulo||raw.livro||raw.nome).trim();
    if(!title)return null;
    const author=text(raw.author||raw.autor||raw.autora||"").trim();
    const url=validUrl(text(raw.url||raw.link||"").trim());
    const description=text(raw.description||raw.descricao||raw.observacoes||"").trim();
    const categoryId=identifyCategory(raw.category||raw.categoria||raw.aba||raw.pasta||20);
    return {title:title.slice(0,200),author:author.slice(0,150),category:categoryId,description:description.slice(0,700),url};
  }
  function importItems(items) {
    let added=0,skipped=0;
    const known=new Set(allBooks().map(b=>normal(b.title)+"|"+normal(b.author)));
    for(const row of items) {
      const b=parseImportedBook(row);if(!b){skipped++;continue;}
      const key=normal(b.title)+"|"+normal(b.author);
      if(known.has(key)){skipped++;continue;}
      state.customBooks.push(Object.assign({id:"personal-"+Date.now()+"-"+Math.floor(Math.random()*1000000),origin:"custom"},b));
      known.add(key);added++;
    }
    save();render();toast(added+" livros importados; "+skipped+" ignorados (repetidos ou inválidos).");
  }
  async function importFile(file) {
    if(!file)return;
    try {
      const body=await file.text();
      if(file.name.toLowerCase().endsWith(".json")) {
        const input=JSON.parse(body);
        if(Array.isArray(input)){importItems(input);return;}
        if(input && Array.isArray(input.customBooks)) {
          const known=new Set(allBooks().map(b=>normal(b.title)+"|"+normal(b.author)));
          let restored=0;
          for(const raw of input.customBooks) {
            const b=parseImportedBook(raw);if(!b)continue;
            const id=text(raw.id).startsWith("personal-")?text(raw.id):"personal-"+Date.now()+"-"+Math.floor(Math.random()*1000000);
            const key=normal(b.title)+"|"+normal(b.author);
            const existing=state.customBooks.findIndex(x=>x.id===id);
            if(existing>=0){state.customBooks[existing]=Object.assign({id,origin:"custom"},b);restored++;}
            else if(!known.has(key)){state.customBooks.push(Object.assign({id,origin:"custom"},b));known.add(key);restored++;}
          }
          if(input.overrides && typeof input.overrides==="object")state.overrides=Object.assign({},state.overrides,input.overrides);
          if(input.statuses && typeof input.statuses==="object")state.statuses=Object.assign({},state.statuses,input.statuses);
          if(Array.isArray(input.favorites))state.favorites=Array.from(new Set(state.favorites.concat(input.favorites))).filter(x=>getBook(x));
          save();render();toast("Backup importado! Seus livros e preferências foram recuperados.");return;
        }
        if(input && Array.isArray(input.books)){importItems(input.books);return;}
        throw new Error("Estrutura JSON não reconhecida");
      }
      const rows=csvParse(body);
      if(!rows.length)throw new Error("A planilha está vazia ou contém apenas cabeçalhos");
      importItems(rows);
    } catch(err) { toast("Não foi possível importar: "+err.message); }
    finally { $("importInput").value=""; }
  }
  function exportBackup() {
    const data={version:1,generatedAt:new Date().toISOString(),customBooks:state.customBooks,overrides:state.overrides,favorites:state.favorites,statuses:state.statuses};
    const blob=new Blob([JSON.stringify(data,null,2)],{type:"application/json;charset=utf-8"});
    const href=URL.createObjectURL(blob);
    const a=document.createElement("a");a.href=href;a.download="lunaria-backup-"+new Date().toISOString().slice(0,10)+".json";document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(href),1500);
    toast("Backup do seu catálogo exportado com sucesso.");
  }

  function init() {
    document.querySelectorAll("dialog").forEach(dialog=>{
      dialog.addEventListener("click",e=>{if(e.target===dialog)dialog.close();});
    });
    $("year").textContent=new Date().getFullYear();
    $("categoryFilter").innerHTML='<option value="">Todas as categorias</option>'+CATEGORIES.map(c=>'<option value="'+c.id+'">ABA '+String(c.id).padStart(2,"0")+' — '+esc(c.name)+'</option>').join("");
    $("bookCategory").innerHTML=CATEGORIES.map(c=>'<option value="'+c.id+'">ABA '+String(c.id).padStart(2,"0")+' — '+esc(c.name)+'</option>').join("");
    render();
    document.addEventListener("click",e=>{
      const t=e.target.closest("[data-fav],[data-open],[data-category],[data-trail],[data-close],[data-edit],[data-delete]");
      if(!t)return;
      if(t.dataset.fav){toggleFav(t.dataset.fav);return;}
      if(t.dataset.open){openBook(t.dataset.open);return;}
      if(t.dataset.category){selectCategory(t.dataset.category);return;}
      if(t.dataset.trail){selectCategory(t.dataset.trail);return;}
      if(t.dataset.close){$(t.dataset.close).close();return;}
      if(t.dataset.edit){editBook(t.dataset.edit);return;}
      if(t.dataset.delete){deleteBook(t.dataset.delete);}
    });
    $("heroSearchForm").addEventListener("submit",e=>{e.preventDefault();search=$("heroSearch").value.trim();$("librarySearch").value=search;categoryFilter="";$("categoryFilter").value="";statusFilter="";$("statusFilter").value="";visibleLimit=12;renderLibrary();document.querySelector("#biblioteca").scrollIntoView({behavior:"smooth"});});
    $("librarySearch").addEventListener("input",e=>{search=e.target.value;visibleLimit=12;renderLibrary();});
    $("categoryFilter").addEventListener("change",e=>{categoryFilter=e.target.value;visibleLimit=12;renderLibrary();});
    $("statusFilter").addEventListener("change",e=>{statusFilter=e.target.value;visibleLimit=12;renderLibrary();});
    $("sortSelect").addEventListener("change",e=>{sort=e.target.value;renderLibrary();});
    $("clearFilters").addEventListener("click",clearFilters);
    $("emptyClear").addEventListener("click",clearFilters);
    $("loadMore").addEventListener("click",()=>{visibleLimit+=12;renderLibrary();});
    $("addBookButton").addEventListener("click",()=>editBook(null));
    $("bookForm").addEventListener("submit",submitBook);
    $("bookDetails").addEventListener("change",e=>{if(e.target.id==="detailStatus" && selectedBook){state.statuses[selectedBook]=e.target.value;save();render();toast("Progresso da leitura atualizado ✧");}});
    $("importButton").addEventListener("click",()=>$("importInput").click());
    $("importInput").addEventListener("change",e=>importFile(e.target.files[0]));
    $("exportButton").addEventListener("click",exportBackup);
    $("menuButton").addEventListener("click",()=>{const menu=$("mobileNav");const visible=menu.hidden;menu.hidden=!visible;$("menuButton").setAttribute("aria-expanded",String(visible));});
    $("mobileNav").addEventListener("click",e=>{if(e.target.closest("a")){$("mobileNav").hidden=true;$("menuButton").setAttribute("aria-expanded","false");}});
  }
  init();
})();