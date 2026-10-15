/* Integração não destrutiva da biblioteca aos painéis existentes. */
(()=>{'use strict';
const arquivos=['combinacoes-direcionais-pdf','variacoes-combinacoes-pdf','auditoria-ocorrencias-repetidas','guia-didatico-36','sentimentos-36','tempo-metodo-base-mestra','novos-observacoes-por-carta','novos2-observacoes-por-carta','novos3-observacoes-por-carta','novos4-observacoes-por-carta','novos5-observacoes-por-carta','novos6-observacoes-por-carta','novos7-observacoes-por-carta'];
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;','\'':'&#39;'}[c]));
const carregar=()=>Promise.all(arquivos.map(f=>new Promise((ok,fail)=>{const sc=document.createElement('script');sc.src='./dados/'+f+'.js';sc.onload=ok;sc.onerror=()=>fail(new Error(f));document.head.append(sc)})));
const notas=()=>[1,2,3,4,5,6,7].flatMap(i=>window[(i===1?'NOVOS': 'NOVOS'+i)+'_OBSERVACOES']||[]);
const numero=v=>{const n=Number(v);return Number.isInteger(n)?n:0};
const sessao=(id,titulo)=>{let el=document.getElementById(id);if(el)return el;el=document.createElement('section');el.id=id;el.className='panel';el.style.marginTop='18px';el.innerHTML='<h3>'+esc(titulo)+'</h3><div class="biblioteca-corpo"></div>';return el};
const linha=(nome,corpo,fonte,pagina)=>'<details style="margin:10px 0;padding:10px;border:1px solid #eed5df;border-radius:12px"><summary style="cursor:pointer;font-weight:600">'+esc(nome)+'</summary><p style="white-space:pre-wrap">'+esc(corpo)+'</p>'+(fonte?'<small>Fonte: '+esc(fonte)+(pagina?' · p. '+esc(pagina):'')+'</small>':'')+'</details>';
function instalar(){
 const link=document.querySelector('#mainNav a[href*="orientacoes.html"]');if(link){link.textContent='📖 Orientações';link.setAttribute('aria-label','Orientações: significados, conselhos, métodos e combinações');}
 const combinacoes=document.querySelector('#view-combinacoes .panel'),resultado=document.getElementById('comboResult');
 if(combinacoes&&resultado){
  const painel=sessao('biblioteca-pares-documentados','Interpretações dos PDFs por categoria');
  resultado.insertAdjacentElement('afterend',painel);
  const atualizar=()=>{
   const a=numero(document.getElementById('combo1')?.value),b=numero(document.getElementById('combo2')?.value);
   if(!a||!b)return;
   const items=(window.COMBINACOES_DOCUMENTADAS||[]).filter(x=>x.carta1===a&&x.carta2===b);
   const vers=(window.VARIACOES_COMBINACOES_DOCUMENTADAS||[]).filter(x=>x.carta1===a&&x.carta2===b);
   const repeats=(window.AUDITORIA_OCORRENCIAS_REPETIDAS||[]).filter(x=>x.carta1===a&&x.carta2===b);
   painel.querySelector('.biblioteca-corpo').innerHTML=(items.length?items.map(x=>linha(x.categoria||'Geral',x.interpretacao_geral,x.fonte,x.pagina)).join(''):'<p>Nenhuma interpretação específica encontrada para essa ordem. Consulte também a ordem inversa, se documentada.</p>')+
    vers.map(x=>linha('Variação documentada',x.interpretacao_geral,x.fonte,x.pagina)).join('')+
    repeats.map(x=>linha('Outra ocorrência da mesma interpretação',x.texto,x.fonte,x.pagina)).join('')+
    '<p style="font-size:.88em;opacity:.8">As cartas representam interpretações simbólicas e não comprovam acontecimentos.</p>';
  };
  ['combo1','combo2','combo3','comboTheme'].forEach(id=>document.getElementById(id)?.addEventListener('change',atualizar));
  document.getElementById('showComboBtn')?.addEventListener('click',atualizar);
  atualizar();
 }
 const detail=document.getElementById('cardDetail');
 if(detail){
  let writing=false;
  const mostrarCarta=()=>{
   if(writing)return;
   const text=detail.textContent||'';
   const m=text.match(/(?:^|\s)(?:0?[1-9]|[12][0-9]|3[0-6])\s*[·.\-]/);
   const byName=(window.GUIA_DIDATICO_36||[]).find(x=>text.includes(x.nome)&&x.nome.length>2);
   const n=byName?.id||(m?Number(m[0].replace(/\D/g,'')):0);
   const c=(window.GUIA_DIDATICO_36||[]).find(x=>x.id===n);
   if(!c)return;
   const senti=(window.SENTIMENTOS_36||[]).find(x=>x.id===n),tempo=(window.TEMPO_METODO_BASE||[]).find(x=>x.numero===n);
   const existing=detail.querySelector('#biblioteca-carta-extra');
   if(existing?.dataset.carta===String(n))return;
   writing=true;
   if(existing)existing.remove();
   const el=sessao('biblioteca-carta-extra','Orientações e significados documentados');
   el.dataset.carta=String(n);
   el.querySelector('.biblioteca-corpo').innerHTML=[
     linha('Características',c.caracteristicas,c.fonte),
     linha('Amor e relacionamentos',c.amor,c.fonte),
     linha('Sexualidade',c.sexualidade,c.fonte),
     senti&&linha('Sentimentos', [senti.sentimento,senti.positivo&&'Em positivo: '+senti.positivo,senti.negativo&&'Em negativo: '+senti.negativo].filter(Boolean).join('\n'),senti.fonte,senti.pagina),
     tempo&&linha('Tempo: método específico',tempo.interpretacao_temporal,tempo.fonte,tempo.pagina),
     ...notas().filter(x=>x.carta===n).map(x=>linha(x.categoria,x.texto,x.fonte,x.pagina))
   ].filter(Boolean).join('');
   detail.append(el);writing=false;
  };
  new MutationObserver(()=>{if(!writing)queueMicrotask(mostrarCarta)}).observe(detail,{childList:true,subtree:false});
  mostrarCarta();
 }
}
carregar().then(instalar).catch(e=>{console.warn('Biblioteca complementar indisponível',e)});
})();