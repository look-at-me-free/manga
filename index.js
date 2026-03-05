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

  { title: "Volume 1 Chapter 8",  id: "V1-C008", url: "https://drive.google.com/file/d/1ZOkEahRiIUXyFj-F_NmfXJjSecEG8b8E/view?usp=drive_link" },
  { title: "Volume 1 Chapter 9",  id: "V1-C009", url: "https://drive.google.com/file/d/1BnqVYkWh70SmZUKuo_XiEETqAfKRBkRz/view?usp=drive_link" },
  { title: "Volume 1 Chapter 10", id: "V1-C010", url: "https://drive.google.com/file/d/1ThSV1CAFgZwXWYEZx8i1oTL2L-iKVMmZ/view?usp=drive_link" },
  { title: "Volume 1 Chapter 11", id: "V1-C011", url: "https://drive.google.com/file/d/19kRXReOH6B0n-mQ4l_8sbMO1gciD__zh/view?usp=drive_link" },
  { title: "Volume 1 Chapter 12", id: "V1-C012", url: "https://drive.google.com/file/d/1V4lKM9N0W9XShS7i_x5Boq6Yqp8-HVp7/view?usp=drive_link" },
  { title: "Volume 1 Chapter 13", id: "V1-C013", url: "https://drive.google.com/file/d/1eHwqod3QwfI4jYwOOEKYCd--tFgtg3nk/view?usp=drive_link" },
  { title: "Volume 1 Chapter 14", id: "V1-C014", url: "https://drive.google.com/file/d/1JK6caXUfx62YanePMV38P6bWMgQGVIxw/view?usp=drive_link" },
  { title: "Volume 1 Chapter 15", id: "V1-C015", url: "https://drive.google.com/file/d/1jDw5a3Z41ZCkt3KkHJOJPOgRI_S5BRaT/view?usp=drive_link" },
  { title: "Volume 1 Chapter 16", id: "V1-C016", url: "https://drive.google.com/file/d/1MI9NS9xSw-Gu5o2kP8-jsMm9GoR2AgwN/view?usp=drive_link" },
  { title: "Volume 1 Chapter 17", id: "V1-C017", url: "https://drive.google.com/file/d/1ZC-wSYPVIXzoAka-0YD-l03yspGelMwD/view?usp=drive_link" },

  { title: "Volume 1 Chapter 18", id: "V1-C018", url: "https://drive.google.com/file/d/1I_GYxwC62ObDl0mvNXArLe6OtOBOG63t/view?usp=drive_link" },
  { title: "Volume 1 Chapter 19", id: "V1-C019", url: "https://drive.google.com/file/d/1jmL32DFLrwXSZr7IUXdhS3cQyAppUOtO/view?usp=drive_link" },
  { title: "Volume 1 Chapter 20", id: "V1-C020", url: "https://drive.google.com/file/d/1sHytQ5m_bswGMv9colR5taIatIchb_gR/view?usp=drive_link" },
  { title: "Volume 1 Chapter 21", id: "V1-C021", url: "https://drive.google.com/file/d/1prQGCeJcwI7b9SvXZAd064n275CQpXfr/view?usp=drive_link" },
  { title: "Volume 1 Chapter 22", id: "V1-C022", url: "https://drive.google.com/file/d/1VPJcAkYXPz_oU-s78DrIi3w3vddxTh9E/view?usp=drive_link" },
  { title: "Volume 1 Chapter 23", id: "V1-C023", url: "https://drive.google.com/file/d/1MP79r9Z4McWxkl5kjjya6XtxjBIaB7aB/view?usp=drive_link" },
  { title: "Volume 1 Chapter 24", id: "V1-C024", url: "https://drive.google.com/file/d/1W61esEMyP5TmbkfpqqTuLguFocs3TyNo/view?usp=drive_link" },
  { title: "Volume 1 Chapter 25", id: "V1-C025", url: "https://drive.google.com/file/d/1CcRdCmImoZpj-zBOD6SxsFc_QlSpJlTx/view?usp=drive_link" },
  { title: "Volume 1 Chapter 26", id: "V1-C026", url: "https://drive.google.com/file/d/1NcxRhXHgEcd0_Y127cIuJjSWp3YduEB3/view?usp=drive_link" },
  { title: "Volume 1 Chapter 27", id: "V1-C027", url: "https://drive.google.com/file/d/1KMrs_5P9D7nVPeBS0U1C6UxbGaNcheWV/view?usp=drive_link" },
];

  // ====== AD ZONES ======
  const BETWEEN_ZONE = "5865236"; // money zone (300x250)
  const END_ZONE     = "5865236"; // same zone at footer for now
  const END_ADS      = 9;         // footer grid count

  // ====== AD DENSITY ======
  const BETWEEN_EVERY = 2;  // place between ads after every N chapters
  const BETWEEN_SLOTS = 3;  // how many 300x250 in each between block

  // ====== BEHAVIOR ======
  const OPEN_SMART = true;           // open 3 cards (first/mid/last) on load
  const CLOSE_OTHERS_ON_OPEN = true; // 1 iframe at a time (desktop)
  const LAZY_ADS = true;             // loads ads near viewport

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
    return id ? `https://drive.google.com/file/d/${id}/preview` : url;
  }

  // ====== ADS ======
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

  let adObserver = null;
  function initLazyAds(){
    if(adObserver || !LAZY_ADS) return;

    adObserver = new IntersectionObserver((entries) => {
      let didInit = false;
      for(const entry of entries){
        if(!entry.isIntersecting) continue;
        const slot = entry.target;
        ensureIns(slot);
        adObserver.unobserve(slot);
        didInit = true;
      }
      if(didInit) setTimeout(serveAds, 30);
    }, { root:null, rootMargin:"900px 0px", threshold:0.01 });

    $$(`.exo-slot[data-zone]`).forEach(slot => adObserver.observe(slot));
  }
  function observeNewSlots(root){
    if(!adObserver) return;
    $$(`.exo-slot[data-zone]`, root).forEach(slot => adObserver.observe(slot));
  }
  function initAllAdsNow(){
    $$(`.exo-slot[data-zone]`).forEach(ensureIns);
    serveAds();
  }

  // ====== Ad blocks ======
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
    title.className = "end-ads-title";
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

  // ====== Cards ======
  function makeDetails(item, idx){
    const d = document.createElement("details");
    d.className = "card";
    d.dataset.idx = String(idx);
    d.id = `item-${idx}`;

    const title = escapeHtml(item.title || `Item ${idx+1}`);
    const id    = item.id ? escapeHtml(item.id) : "";

    const openUrl  = item.url;
    const embedUrl = toDrivePreview(item.url);

    // IMPORTANT: we render ONLY ONE "OPEN" in the header, and NEVER render another "OPEN" inside content.
    // This prevents the "double open button" spam/glitch forever.
    d.innerHTML = `
      <summary>
        <div class="leftstack">
          <div class="doc">${title}</div>
          ${id ? `<div class="id">${id}</div>` : ``}
        </div>

        <!-- CENTER: EXPAND (perfectly centered) -->
        <div class="midstack">
          <button class="pill expbtn expand-btn" type="button" aria-label="Expand chapter">
            EXPAND <span class="chev"></span>
          </button>
          <div class="expand-hint">(click to EXPAND THE CHAPTER)</div>
        </div>

        <!-- RIGHT: OPEN -->
        <div class="rightstack">
          <a class="pill primary open-btn" href="${escapeHtml(openUrl)}" target="_blank" rel="noopener">OPEN</a>
          <div class="open-note">(this opens a new tab for the chapter!)</div>
        </div>
      </summary>

      <div class="content" data-src="${escapeHtml(embedUrl)}" data-open="${escapeHtml(openUrl)}"></div>
    `;

    // Force-center the 3 columns even if your CSS isn't perfect yet:
    const summary = d.querySelector("summary");
    if(summary){
      summary.style.display = "grid";
      summary.style.gridTemplateColumns = "1fr auto 1fr";
      summary.style.alignItems = "center";
      summary.style.gap = "12px";
    }

    const mid = d.querySelector(".midstack");
    if(mid){
      mid.style.display = "flex";
      mid.style.flexDirection = "column";
      mid.style.alignItems = "center";
      mid.style.justifyContent = "center";
      mid.style.textAlign = "center";
      mid.style.minWidth = "220px";
    }

    const right = d.querySelector(".rightstack");
    if(right){
      right.style.display = "flex";
      right.style.flexDirection = "column";
      right.style.alignItems = "flex-end";
      right.style.justifyContent = "center";
      right.style.textAlign = "right";
    }

    const left = d.querySelector(".leftstack");
    if(left){
      left.style.display = "flex";
      left.style.flexDirection = "column";
      left.style.alignItems = "flex-start";
      left.style.justifyContent = "center";
    }

    return d;
  }

  function openSmart(cards){
    if(!OPEN_SMART) return;
    if(cards.length <= 2){
      cards.forEach(c => c.open = true);
      return;
    }
    const first = 0;
    const mid   = Math.floor(cards.length/2);
    const last  = cards.length - 1;
    [first, mid, last].forEach(i => { if(cards[i]) cards[i].open = true; });
  }

  // ====== Render ======
  function render(){
    const container = $("#container");
    if(!container) return;

    // HARD RESET so nothing ever stacks
    container.replaceChildren();

    container.appendChild(makeFeaturedMoneySlot());

    ITEMS.forEach((item, i) => {
      container.appendChild(makeDetails(item, i));

      const isGap = ((i + 1) % BETWEEN_EVERY === 0) && (i + 1) < ITEMS.length;
      if(isGap) container.appendChild(buildBetweenAd(BETWEEN_SLOTS));
    });

    container.appendChild(buildEndAds());

    observeNewSlots(container);

    const cards = $$("details.card", container);
    openSmart(cards);
  }

  // ====== UI EVENTS ======
  // Expand button toggles details cleanly
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".expbtn");
    if(!btn) return;
    const d = btn.closest("details");
    if(!d) return;
    d.open = !d.open;
    e.preventDefault();
    e.stopPropagation();
  });

  // Embed viewer on open (desktop + iPhone)
  document.addEventListener("toggle", (e) => {
    const d = e.target;
    if(!(d instanceof HTMLDetailsElement)) return;

    const content = d.querySelector(".content[data-src]");
    if(!content) return;

    if(d.open){
      const isMobile = window.matchMedia("(max-width: 900px)").matches;

      // Desktop: keep clean
      if(!isMobile && CLOSE_OTHERS_ON_OPEN){
        $$("details.card[open]").forEach(x => { if(x !== d) x.open = false; });
      }

      // Don’t rebuild if already embedded
      if(content.querySelector("iframe")) return;

      const embedSrc = content.dataset.src;

      // IMPORTANT: NO buttons inside content (prevents double-open glitch)
      content.replaceChildren();

      const iframe = document.createElement("iframe");
      iframe.loading = "lazy";
      iframe.referrerPolicy = "no-referrer";
      iframe.src = embedSrc;
      iframe.allow = "fullscreen";
      iframe.style.width = "100%";
      iframe.style.height = "78vh";
      iframe.style.border = "0";
      content.appendChild(iframe);

    } else {
      content.replaceChildren();
    }
  }, true);

  // ====== SEARCH ======
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
      if(out.length >= 40) break;
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
        }, 160);
      });

      input.addEventListener("keydown", (e) => {
        if(e.key !== "Enter") return;
        const hits = runSearch(input.value);
        if(hits[0]) window.open(hits[0].url, "_blank", "noopener");
      });
    }
  }

  function boot(){
    // guard against accidental double-boot
    if(window.__ARCHIVE_BOOTED__) return;
    window.__ARCHIVE_BOOTED__ = true;

    render();
    wireUI();

    if(LAZY_ADS){
      initLazyAds();
      setTimeout(serveAds, 900);
    } else {
      initAllAdsNow();
    }
  }

  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", boot, { once:true });
  } else {
    boot();
  }
})();
