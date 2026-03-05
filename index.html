(() => {
  // ====== EDIT THIS LIST ======
  // title: what the user sees
  // url: direct PDF view link (or whatever you embed)
  // id: optional small tag shown under title (volume/chapter label)
  const ITEMS = [
    // EXAMPLE:
    // { title: "Tracksuit Dragon Ball Full Color — Volume 1", id: "DBFC-001", url: "https://drive.google.com/file/d/XXXX/view?usp=sharing" },
  ];

  // Between-ad zone
  const BETWEEN_ZONE = "5865236";

  // How often to place between-ads (every N entries)
  const BETWEEN_EVERY = 6;

  // Open 3 on load: first, middle, last
  const OPEN_PROGRESSIVE = true;

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

  // Convert .exo-slot placeholders into <ins data-zoneid="..."> and serve ads.
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

    // Serve after ins tags exist.
    (window.AdProvider = window.AdProvider || []).push({ serve: {} });
  }

  function buildBetweenAd(){
    const wrap = document.createElement("div");
    wrap.className = "between-ad";
    const slot = document.createElement("div");
    slot.className = "exo-slot";
    slot.dataset.zone = BETWEEN_ZONE;
    wrap.appendChild(slot);
    return wrap;
  }

  function makeDetails(item, idx){
    const d = document.createElement("details");
    d.className = "card";
    d.dataset.idx = String(idx);

    const title = escapeHtml(item.title || `Item ${idx+1}`);
    const id = item.id ? escapeHtml(item.id) : "";

    // We do NOT inject an iframe immediately.
    // We store data-src and only create iframe when opened.
    d.innerHTML = `
      <summary>
        <div class="leftstack">
          <div class="doc">${title}</div>
          ${id ? `<div class="id">${id}</div>` : ``}
        </div>
        <div class="actions">
          <a class="pill ghost" href="${escapeHtml(item.url)}" target="_blank" rel="noopener">Open</a>
          <span class="pill primary expbtn" role="button" tabindex="0">Expand <span class="chev"></span></span>
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

    // Insert items + between ads
    ITEMS.forEach((item, i) => {
      const d = makeDetails(item, i);
      container.appendChild(d);

      // Place between ad after every N items, but not at the end
      const isInsertPoint = (i+1) % BETWEEN_EVERY === 0 && (i+1) < ITEMS.length;
      if(isInsertPoint){
        container.appendChild(buildBetweenAd());
      }
    });

    // After DOM exists, init ads (top/left/right + between)
    initMagsrvAds(document);

    // Open first/mid/last for “progression”
    if(OPEN_PROGRESSIVE && ITEMS.length > 0){
      const cards = $$("details.card", container);
      const mid = Math.floor((cards.length - 1) / 2);

      // close all first
      cards.forEach(c => c.open = false);

      if(cards[0]) cards[0].open = true;
      if(cards[mid]) cards[mid].open = true;
      if(cards[cards.length-1]) cards[cards.length-1].open = true;
    }
  }

  // Make "Expand" pill toggle details reliably
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".expbtn");
    if(!btn) return;
    const d = btn.closest("details");
    if(!d) return;
    d.open = !d.open;
    e.preventDefault();
    e.stopPropagation();
  });

  // Lazy load iframe only when opened, and only keep ONE iframe alive at a time
  document.addEventListener("toggle", (e) => {
    const d = e.target;
    if(!(d instanceof HTMLDetailsElement)) return;

    const content = d.querySelector(".content[data-src]");
    if(!content) return;

    if(d.open){
      // close other details to keep memory low
      $$("details[open]").forEach(x => { if(x !== d) x.open = false; });

      if(content.querySelector("iframe")) return;

      const src = content.dataset.src;

      // On narrow screens, avoid embedding heavy viewer; show a button instead
      const isMobile = window.matchMedia("(max-width: 900px)").matches;

      if(isMobile){
        content.innerHTML = `
          <div class="viewer">
            <a href="${escapeHtml(src)}" target="_blank" rel="noopener">Open viewer</a>
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
      // free memory
      content.innerHTML = "";
    }
  }, true);

  // Search: local filter (no heavy ajax). Shows quick nav links.
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
    const meta  = $("#meta");
    const nav   = $("#nav");
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
            nav.innerHTML = hits.map(h => `<a href="${escapeHtml(h.url)}" target="_blank" rel="noopener">${escapeHtml(h.title)}</a>`).join("");
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

  // Boot
  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", () => {
      render();
      wireUI();
      // Ensure magsrv gets a serve call even if it loads late
      setTimeout(() => initMagsrvAds(document), 800);
    });
  } else {
    render();
    wireUI();
    setTimeout(() => initMagsrvAds(document), 800);
  }
})();
