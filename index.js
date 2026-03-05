// index.js
(() => {
  // ====== EDIT THIS LIST ======
  const ITEMS = [
    { title: "DBZ 284", id: "DBZ-284", url: "https://drive.google.com/file/d/1h6PGUPSCLtiKP800GfZBvu8rHaVfECLo/view?usp=drive_link" },
    { title: "DBZ 285", id: "DBZ-285", url: "https://drive.google.com/file/d/14MZ1Gfo_kVJSVzaSClPnAnrZ-g-NJ8AE/view?usp=drive_link" },
  ];

  // Zones
  const BETWEEN_ZONE = "5865236"; // your proven money zone (300x250)
  const END_ZONE     = "5865236"; // IMPORTANT: use the same money zone at the footer for now
  const END_ADS      = 12;

  // Between pattern
  const BETWEEN_ADS_PER_GAP = 6;

  const $  = (s, r=document) => r.querySelector(s);
  const $$ = (s, r=document) => Array.from(r.querySelectorAll(s));

  function escapeHtml(s){
    return String(s)
      .replaceAll("&","&amp;")
      .replaceAll("<","&lt;")
      .replaceAll(">","&gt;")
      .replaceAll('"',"&quot;")
      .replaceAll("'","&#39;");
  }

  // --- Drive URL helpers ---
  function driveFileIdFromUrl(url){
    try{
      const u = new URL(url);
      const m = u.pathname.match(/\/file\/d\/([^/]+)/);
      if(m && m[1]) return m[1];
      const id = u.searchParams.get("id");
      return id || null;
    } catch {
      const m = String(url).match(/\/file\/d\/([^/]+)/);
      return m?.[1] || null;
    }
  }

  function toDrivePreview(url){
    const id = driveFileIdFromUrl(url);
    if(!id) return url;
    return `https://drive.google.com/file/d/${id}/preview`;
  }

  // ---- Ad init (TURN .exo-slot into <ins> + serve) ----
  function ensureIns(slot){
    if(slot.dataset.inited) return;
    slot.dataset.inited = "1";

    const ins = document.createElement("ins");
    ins.className = "eas6a97888e2";
    ins.setAttribute("data-zoneid", slot.dataset.zone);
    slot.appendChild(ins);
  }

  function serveAds(){
    (window.AdProvider = window.AdProvider || []).push({ serve: {} });
  }

  // LAZY ad loading: only init when near viewport
  let adObserver = null;
  function initLazyAds(){
    if(adObserver) return;

    adObserver = new IntersectionObserver((entries) => {
      let didInit = false;

      for(const entry of entries){
        if(!entry.isIntersecting) continue;
        const slot = entry.target;
        ensureIns(slot);
        adObserver.unobserve(slot);
        didInit = true;
      }

      // only call serve if we actually initialized something new
      if(didInit) {
        // tiny delay lets DOM settle
        setTimeout(serveAds, 30);
      }
    }, {
      root: null,
      rootMargin: "900px 0px", // start loading before user reaches it
      threshold: 0.01
    });

    // observe all slots currently on page
    $$(`.exo-slot[data-zone]`).forEach(slot => adObserver.observe(slot));
  }

  function observeNewSlots(root){
    if(!adObserver) return;
    $$(`.exo-slot[data-zone]`, root).forEach(slot => adObserver.observe(slot));
  }

  // ---- Ad block builders ----
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

  function buildEndAds(){
    // keep your footer styling from CSS, but your HTML expects .end-ads grid
    const wrap = document.createElement("section");
    wrap.className = "end-ads";

    const title = document.createElement("p");
    title.className = "end-ads-title pangolin";
    title.textContent = "More panels";

    const grid = document.createElement("div");
    grid.className = "end-ads-grid";

    for(let i=0;i<END_ADS;i++){
      const slot = document.createElement("div");
      slot.className = "exo-slot";
      slot.dataset.zone = END_ZONE;
      grid.appendChild(slot);
    }

    wrap.appendChild(title);
    wrap.appendChild(grid);
    return wrap;
  }

  function makeFeaturedMoneySlot(){
    // A guaranteed above-fold 5865236 slot (this is where the money happens)
    const wrap = document.createElement("div");
    wrap.className = "between-ad";
    wrap.style.maxWidth = "1100px";
    wrap.style.margin = "16px auto 0";

    const grid = document.createElement("div");
    grid.className = "between-grid";

    const slot = document.createElement("div");
    slot.className = "exo-slot";
    slot.dataset.zone = BETWEEN_ZONE; // 5865236
    grid.appendChild(slot);

    wrap.appendChild(grid);
    return wrap;
  }

  function makeDetails(item, idx){
    const d = document.createElement("details");
    d.className = "card";
    d.dataset.idx = String(idx);
    d.id = `item-${idx}`;

    const title = escapeHtml(item.title || `Item ${idx+1}`);
    const id = item.id ? escapeHtml(item.id) : "";

    const openUrl  = item.url;
    const embedUrl = toDrivePreview(item.url);

    d.innerHTML = `
      <summary>
        <div class="leftstack">
          <div class="doc">${title}</div>
          ${id ? `<div class="id">${id}</div>` : ``}
        </div>
        <div class="actions">
          <a class="pill primary" href="${escapeHtml(openUrl)}" target="_blank" rel="noopener">Open</a>
          <button class="pill ghost expbtn" type="button">Expand <span class="chev"></span></button>
        </div>
      </summary>
      <div class="content" data-src="${escapeHtml(embedUrl)}" data-open="${escapeHtml(openUrl)}"></div>
    `;
    return d;
  }

  function render(){
    const container = $("#container");
    if(!container) return;
    container.innerHTML = "";

    // 1) Featured money slot ABOVE first chapter (high viewability)
    container.appendChild(makeFeaturedMoneySlot());

    ITEMS.forEach((item, i) => {
      const d = makeDetails(item, i);
      container.appendChild(d);

      if((i + 1) < ITEMS.length){
        container.appendChild(buildBetweenAd(BETWEEN_ADS_PER_GAP));
      }
    });

    // Footer: 12 slots (same money zone for now)
    container.appendChild(buildEndAds());

    // Observe any slots we just created
    observeNewSlots(container);

    // Open behavior: only 2 items => open both
    const cards = $$("details.card", container);
    cards.forEach(c => c.open = true);
  }

  // Expand button
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".expbtn");
    if(!btn) return;
    const d = btn.closest("details");
    if(!d) return;
    d.open = !d.open;
    e.preventDefault();
    e.stopPropagation();
  });

  // Embed: keep one iframe alive at a time (desktop); on mobile show a button
  document.addEventListener("toggle", (e) => {
    const d = e.target;
    if(!(d instanceof HTMLDetailsElement)) return;

    const content = d.querySelector(".content[data-src]");
    if(!content) return;

    if(d.open){
      // close others ONLY if you want. Since you asked for both open with 2 items,
      // we keep them both open when ITEMS.length <= 2.
      if(ITEMS.length > 2){
        $$("details[open]").forEach(x => { if(x !== d) x.open = false; });
      }

      if(content.querySelector("iframe")) return;

      const embedSrc = content.dataset.src;
      const openSrc  = content.dataset.open || embedSrc;

      const isMobile = window.matchMedia("(max-width: 900px)").matches;
      if(isMobile){
        content.innerHTML = `
          <div style="padding:16px;text-align:center">
            <a class="pill primary" href="${escapeHtml(openSrc)}" target="_blank" rel="noopener">Open viewer</a>
          </div>
        `;
      } else {
        const iframe = document.createElement("iframe");
        iframe.loading = "lazy";
        iframe.referrerPolicy = "no-referrer";
        iframe.src = embedSrc;
        iframe.allow = "fullscreen";
        content.appendChild(iframe);
      }
    } else {
      content.innerHTML = "";
    }
  }, true);

  // Search
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

  function boot(){
    render();
    wireUI();

    // Start lazy ad system AFTER DOM exists
    initLazyAds();

    // Kick an extra serve a moment later (helps on some loads)
    setTimeout(serveAds, 900);
  }

  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
