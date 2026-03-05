// index.js
(() => {
  // ====== EDIT THIS LIST ======
  const ITEMS = [
    // { title: "Tracksuit Dragon Ball Full Color — Volume 1", id: "DBFC-001", url: "https://drive.google.com/file/d/XXXX/view?usp=sharing" },
  ];

  // Zones
  const BETWEEN_ZONE = "5865236"; // your money rectangle zone

  const $ = (s, r=document) => r.querySelector(s);
  const $$ = (s, r=document) => Array.from(r.querySelectorAll(s));

  function escapeHtml(s){
    return String(s)
      .replaceAll("&","&amp;")
      .replaceAll("<","&lt;")
      .replaceAll(">","&gt;")
      .replaceAll('"',"&quot;")
      .replaceAll("'","&#39;");
  }

  // Convert .exo-slot placeholders into <ins> and request ads
  function initMagsrvAds(root=document){
    const slots = $$(".exo-slot[data-zone]", root);
    for(const slot of slots){
      if(slot.dataset.inited) continue;
      slot.dataset.inited = "1";

      const ins = document.createElement("ins");
      ins.className = "eas6a97888e2";
      ins.setAttribute("data-zoneid", slot.dataset.zone);
      slot.appendChild(ins);
    }
    (window.AdProvider = window.AdProvider || []).push({ serve: {} });
  }

  // Your exact ad pattern:
  // After item 1: 1 rectangle
  // After items 2..9: 3 rectangles
  // After item 10+: 6 rectangles
  function betweenAdCount(afterIndex0Based){
    const n = afterIndex0Based + 1; // chapter number
    if(n === 1) return 1;
    if(n >= 2 && n <= 9) return 3;
    return 6; // 10+
  }

  function buildBetweenAd(count){
    const wrap = document.createElement("div");
    wrap.className = "between-ad";

    const grid = document.createElement("div");
    grid.className = "between-grid";

    for(let i=0;i<count;i++){
      const slot = document.createElement("div");
      slot.className = "exo-slot";
      slot.dataset.zone = BETWEEN_ZONE;
      grid.appendChild(slot);
    }

    wrap.appendChild(grid);
    return wrap;
  }

  function makeDetails(item, idx){
    const d = document.createElement("details");
    d.className = "card";
    d.dataset.idx = String(idx);

    const title = escapeHtml(item.title || `Item ${idx+1}`);
    const id = item.id ? escapeHtml(item.id) : "";

    // no iframe injected yet; lazy-load on open
    d.innerHTML = `
      <summary>
        <div class="leftstack">
          <div class="doc">${title}</div>
          ${id ? `<div class="id">${id}</div>` : ``}
        </div>
        <div class="actions">
          <a class="pill primary" href="${escapeHtml(item.url)}" target="_blank" rel="noopener">Open</a>
          <button class="pill ghost expbtn" type="button">Expand <span class="chev"></span></button>
        </div>
      </summary>
      <div class="content" data-src="${escapeHtml(item.url)}"></div>
    `;
    return d;
  }

  function render(){
    const container = $("#container");
    if(!container) return;

    container.innerHTML = "";

    ITEMS.forEach((item, i) => {
      const d = makeDetails(item, i);
      container.appendChild(d);

      // insert between ads after each item except the last one
      if((i + 1) < ITEMS.length){
        const k = betweenAdCount(i);
        container.appendChild(buildBetweenAd(k));
      }
    });

    // init ads after DOM exists
    initMagsrvAds(document);

    // Open first/middle/last for progression vibe
    if(ITEMS.length > 0){
      const cards = $$("details.card", container);
      const mid = Math.floor((cards.length - 1) / 2);

      cards.forEach(c => c.open = false);
      if(cards[0]) cards[0].open = true;
      if(cards[mid]) cards[mid].open = true;
      if(cards[cards.length-1]) cards[cards.length-1].open = true;
    }
  }

  // Expand button behavior
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".expbtn");
    if(!btn) return;
    const d = btn.closest("details");
    if(!d) return;
    d.open = !d.open;
    e.preventDefault();
    e.stopPropagation();
  });

  // Lazy iframe: only keep ONE iframe alive at a time
  document.addEventListener("toggle", (e) => {
    const d = e.target;
    if(!(d instanceof HTMLDetailsElement)) return;

    const content = d.querySelector(".content[data-src]");
    if(!content) return;

    if(d.open){
      // close others
      $$("details[open]").forEach(x => { if(x !== d) x.open = false; });

      if(content.querySelector("iframe")) return;

      const src = content.dataset.src;

      const isMobile = window.matchMedia("(max-width: 900px)").matches;
      if(isMobile){
        content.innerHTML = `
          <div style="padding:16px;text-align:center">
            <a class="pill primary" href="${escapeHtml(src)}" target="_blank" rel="noopener">Open viewer</a>
          </div>
        `;
      } else {
        const iframe = document.createElement("iframe");
        iframe.loading = "lazy";
        iframe.referrerPolicy = "no-referrer";
        iframe.src = src;
        content.appendChild(iframe);
      }
    } else {
      content.innerHTML = "";
    }
  }, true);

  // Lightweight search (no ajax)
  let SEARCH_INDEX = null;
  function buildSearchIndex(){
    if(SEARCH_INDEX) return SEARCH_INDEX;
    SEARCH_INDEX = ITEMS.map((it, i) => ({
      i,
      t: (it.title || "").toLowerCase(),
      title: it.title || `Item ${i+1}`,
      url: it.url
    }));
    return SEARCH_INDEX;
  }

  function runSearch(q){
    q = (q || "").trim().toLowerCase();
    if(!q) return [];
    const toks = q.split(/\s+/).filter(Boolean);

    const idx = buildSearchIndex();
    const out = [];
    for(const it of idx){
      let ok = true;
      for(const tok of toks){
        if(!it.t.includes(tok)) { ok = false; break; }
      }
      if(ok) out.push(it);
      if(out.length >= 30) break;
    }
    return out;
  }

  function wireUI(){
    const input = $("#q");
    const meta = $("#meta");
    const nav = $("#nav");
    const clear = $("#clear");
    const openFirst = $("#openFirst");

    if(clear){
      clear.addEventListener("click", () => {
        if(input) input.value = "";
        if(nav) nav.style.display = "none";
        if(meta) meta.textContent = "";
      });
    }

    if(openFirst){
      openFirst.addEventListener("click", () => {
        const first = $("details.card");
        if(first) first.open = true;
        first?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }

    if(input){
      let tmr = null;
      input.addEventListener("input", () => {
        clearTimeout(tmr);
        tmr = setTimeout(() => {
          const q = input.value;
          if(!q.trim()){
            if(nav) nav.style.display = "none";
            if(meta) meta.textContent = "";
            return;
          }
          const hits = runSearch(q);
          if(meta) meta.textContent = hits.length ? `Matches: ${hits.length}` : "No matches.";
          if(nav){
            nav.innerHTML = hits.map(h => `<a href="#item-${h.i}">${escapeHtml(h.title)}</a>`).join("");
            nav.style.display = hits.length ? "flex" : "none";
          }
        }, 180);
      });

      input.addEventListener("keydown", (e) => {
        if(e.key !== "Enter") return;
        const hits = runSearch(input.value);
        if(hits[0]) window.open(hits[0].url, "_blank", "noopener");
      });
    }
  }

  // ----- Side fallback: Exo first, then other networks if empty -----
  // You paste your OTHER network code inside these functions.
  function injectFallback(side /* "left" | "right" */ , slotEl){
    // EXAMPLE:
    // slotEl.innerHTML = `<script src="https://other-network.example/tag.js"></script>`;
    // or slotEl.innerHTML = `...their <ins> + serve call...`;
  }

  function slotLooksFilled(slotEl){
    // simple heuristics: iframe/ins children, or height changes
    if(slotEl.querySelector("iframe")) return true;
    // sometimes the provider injects stuff without iframe; check for >1 child
    if(slotEl.children.length >= 2) return true;
    // or if <ins> got size
    const ins = slotEl.querySelector("ins");
    if(ins){
      const r = ins.getBoundingClientRect();
      if(r.height >= 40) return true;
    }
    return false;
  }

  function runSideFallbacks(){
    const sideSlots = $$(".exo-slot[data-fallback]");
    // Give Exo a moment to fill
    setTimeout(() => {
      for(const slot of sideSlots){
        if(slotLooksFilled(slot)) continue;
        injectFallback(slot.dataset.fallback, slot);
      }
    }, 1600);
  }

  // Boot
  function boot(){
    render();
    wireUI();

    // Serve again once magsrv script is surely loaded
    setTimeout(() => initMagsrvAds(document), 700);

    // Side fallbacks after Exo has had a chance
    runSideFallbacks();
  }

  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
