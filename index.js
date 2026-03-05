// index.js
(() => {
  // ====== EDIT THIS LIST ======
  const ITEMS = [
  { title: "Volume 1 Chapter 1", id: "V1-C001", url: "https://drive.google.com/file/d/1OovhU8PaSu4ZK4CsJMp4EilJ7zXM96S1/view?usp=sharing" },
  { title: "Volume 1 Chapter 2", id: "V1-C002", url: "https://drive.google.com/file/d/1aVwsgv8L23LU_7fFZoEWO7Rj-_6aeCHl/view?usp=sharing" },
  { title: "Volume 1 Chapter 3", id: "V1-C003", url: "https://drive.google.com/file/d/1pBiTpyyRv5FxI9015aH__6Wj7mGMhu_w/view?usp=sharing" },
  { title: "Volume 1 Chapter 4", id: "V1-C004", url: "https://drive.google.com/file/d/1ETkV_XiipV_aAIfJQ_DApnfbSGkWa6Ap/view?usp=sharing" },
  { title: "Volume 1 Chapter 5", id: "V1-C005", url: "https://drive.google.com/file/d/1B6Ok2wbJ1qVHWcbvkl2NqpdLd2W_Mhtd/view?usp=sharing" },
  { title: "Volume 1 Chapter 6", id: "V1-C006", url: "https://drive.google.com/file/d/1z63JfaOeV_x6N692_Sb8_VKtT50_Eqgl/view?usp=sharing" },
  { title: "Volume 1 Chapter 7", id: "V1-C007", url: "https://drive.google.com/file/d/1GP6yKJwHqAVc8Sn-V5hy3luG62pt0FeB/view?usp=sharing" },
];

  // Zones
  const BETWEEN_ZONE = "5865236"; // proven money zone (300x250)
  const END_ZONE     = "5865236"; // same money zone at footer for now
  const END_ADS      = 12;

  // Between pattern (3 slots per between block, every 6 items)
  const BETWEEN_EVERY = 6;
  const BETWEEN_SLOTS = 3;

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

      if(didInit){
        setTimeout(serveAds, 30);
      }
    }, {
      root: null,
      rootMargin: "900px 0px",
      threshold: 0.01
    });

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
    // single above-fold 5865236 slot (clean + high viewability)
    const wrap = document.createElement("div");
    wrap.className = "between-ad";
    wrap.style.maxWidth = "1100px";
    wrap.style.margin = "16px auto 0";

    const grid = document.createElement("div");
    grid.className = "between-grid";

    const slot = document.createElement("div");
    slot.className = "exo-slot";
    slot.dataset.zone = BETWEEN_ZONE;
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

  function openSmart(cards){
    // keep the site feeling clean: don’t open everything by default
    if(cards.length <= 2){
      cards.forEach(c => c.open = true);
      return;
    }
    const first = 0;
    const mid   = Math.floor(cards.length/2);
    const last  = cards.length - 1;
    [first, mid, last].forEach(i => { if(cards[i]) cards[i].open = true; });
  }

  function render(){
    const container = $("#container");
    if(!container) return;
    container.innerHTML = "";

    // featured slot
    container.appendChild(makeFeaturedMoneySlot());

    ITEMS.forEach((item, i) => {
      container.appendChild(makeDetails(item, i));

      // between block every N items
      const isGapPoint = ((i + 1) % BETWEEN_EVERY === 0) && (i + 1) < ITEMS.length;
      if(isGapPoint){
        container.appendChild(buildBetweenAd(BETWEEN_SLOTS));
      }
    });

    container.appendChild(buildEndAds());
    observeNewSlots(container);

    const cards = $$("details.card", container);
    openSmart(cards);
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

  // Embed
  document.addEventListener("toggle", (e) => {
    const d = e.target;
    if(!(d instanceof HTMLDetailsElement)) return;

    const content = d.querySelector(".content[data-src]");
    if(!content) return;

    if(d.open){
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

    if(meta) meta.textContent = `Items: ${ITEMS.length}`;

    if(clear){
      clear.addEventListener("click", () => {
        if(input) input.value = "";
        if(nav) nav.style.display = "none";
        if(meta) meta.textContent = `Items: ${ITEMS.length}`;
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
            if(meta) meta.textContent = `Items: ${ITEMS.length}`;
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

    initLazyAds();
    setTimeout(serveAds, 900);
  }

  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
