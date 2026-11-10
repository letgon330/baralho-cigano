/* Remove somente metadados de apresentação; os objetos de auditoria não são alterados. */
(()=>{
const clean=()=>{
for(const el of document.querySelectorAll('p,small'))if(/^Fonte(?: documental| das categorias)?:/i.test(el.textContent.trim()))el.remove();
const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);let node;
while((node=walker.nextNode())){if(['SCRIPT','STYLE'].includes(node.parentElement?.tagName))continue;const value=node.nodeValue;const result=value.replace(/\s*[—–·,-]?\s*(?:páginas?|p\.)\s*\d+(?:\s*[–—-]\s*\d+)?/gi,'').replace(/(?:NOVOS(?:\s*[2-7])?|pdf24_convertido\s*\(1\))\.pdf/gi,'material de estudo');if(result!==value)node.nodeValue=result;}
};clean();new MutationObserver(clean).observe(document.body,{childList:true,subtree:true});
})();
