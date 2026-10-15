/* Consulta os mesmos registros da biblioteca, sem alterar a tiragem ou os dados salvos. */
(()=>{
'use strict';
if(window.orientacoesNoJogoAtivas)return;
window.orientacoesNoJogoAtivas=true;
const observations=[1,2,3,4,5,6,7].flatMap(i=>window[(i===1?'NOVOS':'NOVOS'+i)+'_OBSERVACOES']||[]);
const pairs=[...COMBINACOES_DOCUMENTADAS,...VARIACOES_COMBINACOES_DOCUMENTADAS];
const trios=[3,4,5].flatMap(i=>window['NOVOS'+i+'_TRIOS']||[]);
const aliases={amor:/amor|afeti|relacion|sentiment/,sentimentos:/sentiment|amor|afeti/,trabalho:/trabalho|profiss|carreira/,dinheiro:/dinheiro|financ|prosper/,familia:/famil|lar|casa/,espiritualidade:/espirit/,saude:/saude|vital/,tempo:/tempo|temporal/,estudos:/estud|aprend/,conselhos:/conselh|alert|atenc|cuidad/};
const guideFor=id=>GUIAS_VISUAIS_PDFS.find(g=>g.id===id);
const unique=rows=>{const seen=new Set();return rows.filter(x=>{const key=norm(x.title+' '+x.body);if(seen.has(key))return false;seen.add(key);return true})};
const publicText=t=>String(t||'').replace(/\b(?:NOVOS(?:\s*[2-7])?|pdf24_convertido\s*\(1\))\.pdf/gi,'material de estudo').replace(/\s*(?:páginas?|p\.)\s*\d+(?:\s*[–—-]\s*\d+)?/gi,'');
const paragraph=t=>`<p style="white-space:pre-wrap">${esc(publicText(t))}</p>`;
function cardAdvice(c,category){
 const advice=cardInfoBlocks(cardById[c.id],'conselhos').map(x=>({title:x.title,body:x.text}));
 const matching=observations.filter(x=>x.carta===Number(c.id)&&(/conselh|alert|atenc|cuidad/.test(norm(x.categoria))||aliases[category]?.test(norm(x.categoria)))).map(x=>({title:x.categoria,body:x.texto}));
 return unique([...advice,...matching]).filter(x=>x.body);
}
function instructions(ev){const guide=guideFor(ev.methodId);return guide?`<details class="acc gameMethodGuide"><summary>Como interpretar este método: ${esc(guide.title)}</summary><div class="accBody">${renderPdfVisualGuide(guide)}</div></details>`:`<p>Respeite a função de cada posição apresentada no método ${esc(ev.method.name)}.</p>`}
function readingOrientations(ev){
 let html=`<section class="gameOrientations" aria-label="Orientações desta tiragem"><h3>Orientações para esta tiragem</h3><p>Consulte o método e os conselhos documentados para as cartas selecionadas, relacionando cada orientação à pergunta e à posição.</p>${instructions(ev)}<h4>Conselhos e contexto das cartas</h4>`;
 for(const c of ev.cards){const rows=cardAdvice(c,ev.category);html+=`<details class="acc"><summary>${esc(c.position)} · ${esc(c.name)}</summary><div class="accBody">${rows.length?rows.map(x=>`<h4>${esc(publicText(x.title))}</h4>${paragraph(x.body)}`).join(''):'<p>Não há conselho complementar específico cadastrado para esta carta e este contexto. Consulte o significado e a função da posição na leitura acima.</p>'}</div></details>`}
 const ids=ev.cards.map(c=>Number(c.id)),affective=['amor','sentimentos','relacionamento','ex','reconciliacao'].includes(ev.theme);
 const related=(window.LICOES_ILUSTRADAS_PDFS||[]).filter(l=>{
 if(l.title.startsWith('Raposa no trabalho'))return ids.includes(14)&&ev.theme==='trabalho';
 if(l.title.startsWith('Carta Oculta'))return ev.cards.length===3;
 if(l.title.startsWith('Sentimento, intenção'))return affective;
 if(l.title.startsWith('Duas sequências'))return [24,25,31].every(id=>ids.includes(id));
 if(l.title.startsWith('Treino e registro'))return ev.theme==='estudos';
 if(l.title.startsWith('Foice:'))return ids.includes(10);
 if(l.title.startsWith('Ratos e Caminhos'))return ids.includes(23)||ids.includes(22);
 return false;
 });
 if(related.length)html+='<h4>Orientações ilustradas relacionadas</h4><p>Os exemplos de estudo abaixo são explicações complementares; não representam cartas extras retiradas neste jogo.</p>'+related.map(l=>`<details class="acc gameStudyLesson"><summary>${esc(l.title)}</summary><div class="accBody">${renderPdfIllustratedLesson(l)}</div></details>`).join('');
 // Somente pares adjacentes na ordem efetiva da tiragem. Variações ficam identificadas.
 const adjacent=ev.cards.slice(0,-1).map((a,i)=>({a,b:ev.cards[i+1],rows:unique(pairs.filter(x=>x.carta1===Number(a.id)&&x.carta2===Number(ev.cards[i+1].id)).map(x=>({title:x.categoria||'Geral',body:x.interpretacao_geral})))})).filter(x=>x.rows.length);
 if(adjacent.length){html+='<h4>Biblioteca complementar na ordem das cartas</h4>';for(const x of adjacent)html+=`<details class="acc"><summary>${esc(x.a.name)} + ${esc(x.b.name)} · ${x.rows.length} interpretação(ões)</summary><div class="accBody"><p>Consulte as categorias abaixo conforme o assunto da pergunta. As variantes são alternativas documentadas, não conclusões cumulativas.</p>${x.rows.map(row=>`<h4>${esc(publicText(row.title))}</h4>${paragraph(row.body)}`).join('')}</div></details>`}
 if(ev.cards.length===3){const rows=trios.filter(x=>x.cartas.every((id,i)=>id===Number(ev.cards[i].id)));if(rows.length)html+='<h4>Sequência completa documentada</h4>'+unique(rows.map(x=>({title:x.categoria,body:x.interpretacao}))).map(x=>`<details class="acc"><summary>${esc(publicText(x.title))}</summary><div class="accBody">${paragraph(x.body)}</div></details>`).join('')}
 return html+'<p>Use as orientações como leitura simbólica contextual. Elas não comprovam fatos sobre terceiros.</p></section>';
}
const originalRead=localReadHtml;
localReadHtml=function(ev){let html=originalRead(ev);const g=guideFor(ev.methodId);if(g&&ev.cards.length===3){html=html.replace(/<div class="readingGuide"><h4>Como interpretar esta sequência<\/h4>[\s\S]*?<\/div>/,'<div class="readingGuide"><h4>Sequência de leitura deste método</h4>'+g.reading.map(paragraph).join('')+'</div>')}return html+readingOrientations(ev)};
// O guia acompanha a seleção do método mesmo nos handlers já registrados pelo site.
const diagram=document.getElementById('flowMethodDiagram');
function updateMethodGuide(){if(!diagram)return;let host=document.getElementById('flowOrientationGuide');if(!host){host=document.createElement('section');host.id='flowOrientationGuide';host.className='readingGuide';host.setAttribute('aria-label','Orientações do método escolhido');diagram.insertAdjacentElement('afterend',host)}const method=DATA.methods[Number(document.getElementById('flowMethod').value)],g=method&&guideFor(method.id);host.innerHTML=g?`<h4>Orientações do método escolhido</h4><p>Antes de selecionar as cartas, confira o significado das posições e a sequência de leitura.</p><details class="acc"><summary>Ver guia explicado: ${esc(g.title)}</summary><div class="accBody">${renderPdfVisualGuide(g)}</div></details>`:'';host.hidden=!g}
if(diagram)new MutationObserver(updateMethodGuide).observe(diagram,{childList:true});
const oldLoad=loadHistory;
loadHistory=function(id){oldLoad(id);const result=document.getElementById('flowResult');if(!getHistory().some(x=>x.id===id))return;const extra=document.createElement('details');extra.className='acc gameHistoryOrientations';extra.innerHTML='<summary>Consultar orientações atuais desta tiragem</summary><div class="accBody">'+readingOrientations(buildEvidence())+'</div>';result.append(extra);result.style.display='block'};
updateMethodGuide();
})();
