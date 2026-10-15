/* Enciclopédia Cigana — correção visual móvel V17
   Somente interface: não modifica autenticação, dados, tiragens nem métodos.
   Incluir no index.html antes de </body>:
   <script src="./mobile-v17.js" defer></script>
*/
(() => {
  "use strict";
  const css = `
  html { -webkit-text-size-adjust:100%; text-size-adjust:100%; }
  body { overflow-x:hidden; }
  .wrap, .top, .panel, .appView, .hero, .hubCard, .textCard,
  .flowPanel, .flowStageCard, .metaCard { min-width:0; }
  .wrap { width:100%; }
  .hero h1, .sectionTitle, .brand, .detailTitle h2, .hubCard strong {
    overflow-wrap:break-word; word-break:normal; hyphens:auto;
  }
  button, input, select, textarea { max-width:100%; }
  .mobileMenuButton { display:none; }
  @media (max-width:700px) {
    .wrap { padding-left:14px; padding-right:14px; }
    header { position:relative; z-index:50; }
    .top { display:grid; grid-template-columns:minmax(0,1fr) auto;
      align-items:center; column-gap:10px; row-gap:8px; padding:12px 0; min-height:0; }
    .brand { margin:0; min-width:0; max-width:none; font-size:clamp(19px,5.6vw,24px);
      line-height:1.18; grid-column:1; }
    .mobileMenuButton { display:inline-flex; align-items:center; justify-content:center;
      gap:7px; grid-column:2; min-height:44px; border:1px solid var(--line);
      border-radius:14px; padding:9px 12px; background:#fff; color:var(--ink);
      font-size:15px; font-weight:700; cursor:pointer; }
    .top>.badge { display:none; }
    .accountMini { grid-column:1 / -1; width:100%; justify-content:flex-start;
      min-width:0; font-size:12px; gap:6px; }
    .accountMini span { min-width:0; overflow-wrap:anywhere; }
    .accountMini button { min-height:40px; }
    .navLinks { grid-column:1 / -1; width:100%; display:none!important; padding:10px;
      margin:0; border:1px solid var(--line); border-radius:18px; background:#fff;
      grid-template-columns:repeat(2,minmax(0,1fr)); gap:8px; }
    .navLinks.mobile-open { display:grid!important; }
    .navLinks button { display:block; width:100%; min-width:0; min-height:44px; padding:10px;
      text-align:center; white-space:normal; line-height:1.35; font-size:13px;
      overflow-wrap:break-word; }
    .navLinks button[style*="display:none"] { display:none!important; }
    .appView { padding-top:14px; }
    .hero { padding:12px 0 6px; }
    .hero h1 { font-size:clamp(27px,7.6vw,38px); line-height:1.14; }
    .hero p,.detailLead { font-size:15px; line-height:1.6; }
    .sectionTitle { font-size:clamp(25px,6vw,32px); line-height:1.2; }
    .notice { padding:14px; margin:14px 0 18px; font-size:14px; line-height:1.6; }
    .panel { padding:16px; border-radius:18px; margin-bottom:20px; }
    .hubGrid,.grid,.grid2,.metaGrid,.subjectGrid,.methodGuideGrid,.questionHub,
    .houseGrid,.contextGrid,.aiGrid,.positionGrid,.adminReadingCards {
      grid-template-columns:minmax(0,1fr); gap:12px;
    }
    .hubCard { padding:16px; border-radius:18px; }
    .hubCard strong { font-size:20px; line-height:1.25; }
    .hubCard span { font-size:14px; line-height:1.55; }
    .flowPanel { padding:15px; }
    .flowStageCard { padding:16px; }
    .flowSteps { grid-template-columns:repeat(5,minmax(125px,1fr)); gap:8px;
      overflow-x:auto; scrollbar-width:thin; }
    .flowStep { padding:12px; min-height:100px; }
    .flowStep h4 { font-size:16px; margin:8px 0; }
    .flowNav { flex-direction:column; }
    .flowNav button,.flowNav .goldBtn,.flowNav .ghostBtn { width:100%; min-height:44px; }
    .controls { align-items:stretch; }
    .controls input,.controls select,.controls button,
    .search,.select,.flowInput,.flowSelect,.flowTextarea { width:100%; min-width:0; }
    .cardTabs { position:static; max-width:100%; }
    .methodDiagram { max-width:100%; overflow-x:auto; }
    .adminModalCard { max-width:calc(100vw - 16px); }
    #pwaInstallBtn { bottom:max(12px,env(safe-area-inset-bottom)); }
    .footerNote { font-size:13px; line-height:1.6; }
  }
  @media (max-width:370px) {
    .navLinks { grid-template-columns:minmax(0,1fr); }
    .brand { font-size:19px; }
  }
  `;
  function init() {
    if (document.getElementById("mobileV17Styles")) return;
    const style = document.createElement("style");
    style.id = "mobileV17Styles";
    style.textContent = css;
    document.head.append(style);
    const nav = document.getElementById("mainNav");
    const top = nav && nav.parentElement;
    if (!nav || !top) return;
    const toggle = document.createElement("button");
    toggle.type = "button";
    toggle.id = "mobileMenuToggle";
    toggle.className = "mobileMenuButton";
    toggle.setAttribute("aria-controls", "mainNav");
    toggle.setAttribute("aria-expanded", "false");
    toggle.textContent = "☰ Menu";
    top.insertBefore(toggle, nav);
    function closeMenu() {
      nav.classList.remove("mobile-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.textContent = "☰ Menu";
    }
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("mobile-open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.textContent = open ? "✕ Fechar" : "☰ Menu";
    });
    nav.addEventListener("click", event => {
      if (event.target.closest("button")) closeMenu();
    });
    window.addEventListener("keydown", event => {
      if (event.key === "Escape") closeMenu();
    });
    window.matchMedia("(min-width:701px)").addEventListener("change", event => {
      if (event.matches) closeMenu();
    });
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, {once:true});
  } else { init(); }
})();
