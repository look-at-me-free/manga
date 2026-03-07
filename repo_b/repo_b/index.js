// index.js
(() => {
  // ====== EDIT THIS LIST (FULL LIST, NO PLACEHOLDERS) ======
  const ITEMS = [
    { title: "Volume 1 Chapter 1",  id: "V1-C001", url: "https://drive.google.com/file/d/1OovhU8PaSu4ZK4CsJMp4EilJ7zXM96S1/view?usp=sharing" },
    { title: "Volume 1 Chapter 2",  id: "V1-C002", url: "https://drive.google.com/file/d/1aVwsgv8L23LU_7fFZoEWO7Rj-_6aeCHl/view?usp=sharing" },
    { title: "Volume 1 Chapter 3",  id: "V1-C003", url: "https://drive.google.com/file/d/1pBiTpyyRv5FxI9015aH__6Wj7mGMhu_w/view?usp=sharing" },
    { title: "Volume 1 Chapter 4",  id: "V1-C004", url: "https://drive.google.com/file/d/1ETkV_XiipV_aAIfJQ_DApnfbSGkWa6Ap/view?usp=sharing" },
    { title: "Volume 1 Chapter 5",  id: "V1-C005", url: "https://drive.google.com/file/d/1B6Ok2wbJ1qVHWcbvkl2NqpdLd2W_Mhtd/view?usp=sharing" },
    { title: "Volume 1 Chapter 6",  id: "V1-C006", url: "https://drive.google.com/file/d/1z63JfaOeV_x6N692_Sb8_VKtT50_Eqgl/view?usp=sharing" },
    { title: "Volume 1 Chapter 7",  id: "V1-C007", url: "https://drive.google.com/file/d/1GP6yKJwHqAVc8Sn-V5hy3luG62pt0FeB/view?usp=sharing" },

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

    { title: "Volume 1 Chapter 28", id: "V1-C028", url: "https://drive.google.com/file/d/1rNHvzyircPNTJJlcatnaWQkMijU07LZE/view?usp=drive_link" },
    { title: "Volume 1 Chapter 29", id: "V1-C029", url: "https://drive.google.com/file/d/1hLLUxs_RZJYvKtDUCwHgDuRV76LuWKkV/view?usp=drive_link" },
    { title: "Volume 1 Chapter 30", id: "V1-C030", url: "https://drive.google.com/file/d/1STbyMki4GNDW6qs2rG-rPpnzvLrrt0e0/view?usp=drive_link" },
    { title: "Volume 1 Chapter 31", id: "V1-C031", url: "https://drive.google.com/file/d/1dqjTHJ6sKLcLOiqg87hde6Y1hfiATJjk/view?usp=drive_link" },
    { title: "Volume 1 Chapter 32", id: "V1-C032", url: "https://drive.google.com/file/d/1UUjYqc1OHXRZjKW7MeX48gHE6pf5Ujel/view?usp=drive_link" },
    { title: "Volume 1 Chapter 33", id: "V1-C033", url: "https://drive.google.com/file/d/1KcmGGqelVZTt570xNLnafqd2jyeIcV5Z/view?usp=drive_link" },
    { title: "Volume 1 Chapter 34", id: "V1-C034", url: "https://drive.google.com/file/d/1UkYqj3zRvR_fXRqJuh_jw3yjnBNIWynt/view?usp=drive_link" },
    { title: "Volume 1 Chapter 35", id: "V1-C035", url: "https://drive.google.com/file/d/14vIFX1TQPdvCwbFS-aB6zKqfXd8Uyc5U/view?usp=drive_link" },
    { title: "Volume 1 Chapter 36", id: "V1-C036", url: "https://drive.google.com/file/d/1tyPQWzqZeoInK3BxLtCKjWzSZpj8-qkT/view?usp=drive_link" },

    { title: "Volume 1 Chapter 37", id: "V1-C037", url: "https://drive.google.com/file/d/1uO49EyNuVJwZCHcTzCV9xmBBxweCcCcW/view?usp=sharing" },
    { title: "Volume 1 Chapter 38", id: "V1-C038", url: "https://drive.google.com/file/d/1qq11E_waai3Viqz3nVnER5ioycOu1M8U/view?usp=sharing" },
    { title: "Volume 1 Chapter 39", id: "V1-C039", url: "https://drive.google.com/file/d/18R3U4BAnasqf2mqoaETdx04omgqUc7pw/view?usp=sharing" },
    { title: "Volume 1 Chapter 40", id: "V1-C040", url: "https://drive.google.com/file/d/1t72TfDt8vxA5XKYNyAMg7Aev249Z44JW/view?usp=sharing" },
    { title: "Volume 1 Chapter 41", id: "V1-C041", url: "https://drive.google.com/file/d/14pY3V2TJY4cy51_a5IZ38Pk_eiM_hD2w/view?usp=sharing" },
    { title: "Volume 1 Chapter 42", id: "V1-C042", url: "https://drive.google.com/file/d/1MFTVXJs6eH_7IKEB2_4YtATK2ne50mmh/view?usp=sharing" },
    { title: "Volume 1 Chapter 43", id: "V1-C043", url: "https://drive.google.com/file/d/1CPYxIzLSh5xpmSeXE7HKjjLzh8LZ_X5H/view?usp=sharing" },
    { title: "Volume 1 Chapter 44", id: "V1-C044", url: "https://drive.google.com/file/d/1_FQYqbb6GdQT0IuMAMGAOGMrZKB8rKPm/view?usp=sharing" },
    { title: "Volume 1 Chapter 45", id: "V1-C045", url: "https://drive.google.com/file/d/1HDly6Yzqp0huKG2y9S22oBAyL3UH_rIm/view?usp=sharing" },
    { title: "Volume 1 Chapter 46 (Best)", id: "V1-C046", url: "https://drive.google.com/file/d/1NRj3CvbfMHdeoBiDxK3-Bgl5hy-tefVg/view?usp=sharing" },
    { title: "Volume 1 Chapter 47", id: "V1-C047", url: "https://drive.google.com/file/d/1YPr9v-4AHHLXsKVYDK8hta_U_QtHR1FF/view?usp=sharing" },
    { title: "Volume 1 Chapter 48", id: "V1-C048", url: "https://drive.google.com/file/d/1vGvftogiDEmBxKpz2-B4FjLb-1_SA_41/view?usp=sharing" },
    { title: "Volume 1 Chapter 49", id: "V1-C049", url: "https://drive.google.com/file/d/15d5ztI_0POTTh-pxO78BT9GU_B3YC4pb/view?usp=sharing" },
    { title: "Volume 1 Chapter 50", id: "V1-C050", url: "https://drive.google.com/file/d/10JTf0vNHcoTSdGfQBBlZGz44QY7-6U6W/view?usp=sharing" },
    { title: "Volume 1 Chapter 51", id: "V1-C051", url: "https://drive.google.com/file/d/17keZ6OJa9qTsJAlx1ZnhDSj-mNWDaux-/view?usp=sharing" },
    { title: "Volume 1 Chapter 52", id: "V1-C052", url: "https://drive.google.com/file/d/1ldyRD9vU5PFh1H3EXzhL5Tj92OHMdF0e/view?usp=sharing" },
    { title: "Volume 1 Chapter 53", id: "V1-C053", url: "https://drive.google.com/file/d/1F7r-XLl0hiElPYRG8mmHWj4Qyn6nwSnq/view?usp=sharing" },
    { title: "Volume 1 Chapter 54 (Best)", id: "V1-C054", url: "https://drive.google.com/file/d/1IKH9WGvIszbVADA1leOPZGCHvl5jUOMO/view?usp=sharing" },
    { title: "Volume 1 Chapter 55", id: "V1-C055", url: "https://drive.google.com/file/d/1ocKZ4DWTnLmboUcpdm44QsR7RxpgJ1GS/view?usp=drive_link" },
    { title: "Volume 1 Chapter 56", id: "V1-C056", url: "https://drive.google.com/file/d/1OpCjHOAc5T_7-MONayydUFR6fqOmcE9A/view?usp=drive_link" },
    { title: "Volume 1 Chapter 57", id: "V1-C057", url: "https://drive.google.com/file/d/15W4J4-vBfZnM8O3d_R94pUe1wcI81onW/view?usp=drive_link" },
    { title: "Volume 1 Chapter 58", id: "V1-C058", url: "https://drive.google.com/file/d/1uMYTAeNxRkxaMPy3QgsHkSqmyDFYgXxt/view?usp=drive_link" },
    { title: "Volume 1 Chapter 59", id: "V1-C059", url: "https://drive.google.com/file/d/1tfQ9hwZzdXAZIVXQ3RiCU2houJ36ckTW/view?usp=drive_link" },
    { title: "Volume 1 Chapter 60", id: "V1-C060", url: "https://drive.google.com/file/d/1ABnYI6QsX51LyzbS7svxqsR3SvzZlKPx/view?usp=drive_link" },
    { title: "Volume 1 Chapter 61", id: "V1-C061", url: "https://drive.google.com/file/d/1JL-bTyF3XDOu_sEIpqgaPnChSapqcbNa/view?usp=drive_link" },
    { title: "Volume 1 Chapter 62", id: "V1-C062", url: "https://drive.google.com/file/d/1VkpmN_RYVO5sIoh6qkyd8QLmf7BIUoKO/view?usp=drive_link" },
    { title: "Volume 1 Chapter 63", id: "V1-C063", url: "https://drive.google.com/file/d/1Y6S5G3_ddrOpF1BfK-C5o2GYmnXWRtZD/view?usp=drive_link" },
  ];

  // ====== AD ZONES ======
  const BETWEEN_ZONE = "5865236";
  const END_ZONE     = "5865236";
  const END_ADS      = 24;

  // ====== AD DENSITY ======
  const BETWEEN_EVERY = 2;
  const BETWEEN_SLOTS = 3;

  // ====== BEHAVIOR ======
  const OPEN_SMART = true;                // opens first/middle/last chunk-cards after initial render
  const OPEN_FIRST_ON_LOAD = true;        // ensures Chapter 1 is open (desktop-friendly)
  const CLOSE_OTHERS_ON_OPEN = true;
  const LAZY_ADS = true;

  // ✅ FEATURED AD ABOVE CHAPTERS (OFF by default)
  const SHOW_FEATURED_AD_ABOVE_CHAPTERS = false;

  // ====== SCALE (500–800 chapters safe) ======
  const CHUNK_SIZE = 90;                  // cards per chunk
  const CHUNK_ROOT_MARGIN = "1800px 0px"; // preload next chunk before user hits it

  // ====== SCROLL ======
  const SCROLL_MAX_MS = 1500;

  // ====== SEARCH ======
  const SEARCH_MAX_RESULTS = 40;
  const SEARCH_DEBOUNCE_MS = 90;

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
    wrap.id = "endAds";

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
    grid.className = "between-grid featured";

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

    d.innerHTML = `
      <summary>
        <div class="leftstack">
          <div class="doc">${title}</div>
          ${id ? `<div class="id">${id}</div>` : ``}
        </div>

        <div class="actions">
          <button class="pill expbtn expand-btn" type="button" aria-label="Read chapter">
            ▶ READ <span class="chev"></span>
          </button>
          <div class="expand-hint">Opens below</div>
        </div>

        <div class="action-open">
          <a class="pill primary open-btn" href="${escapeHtml(openUrl)}" target="_blank" rel="noopener">OPEN</a>
          <div class="open-note">(opens in new tab)</div>
        </div>
      </summary>

      <div class="content" data-src="${escapeHtml(embedUrl)}"></div>
    `;

    return d;
  }

  // ====== Smooth scroll ======
  function easeOutCubic(t){ return 1 - Math.pow(1 - t, 3); }

  function smoothScrollToY(targetY, maxMs = SCROLL_MAX_MS){
    const startY = window.scrollY || window.pageYOffset || 0;
    const distance = targetY - startY;

    if(Math.abs(distance) < 2){
      window.scrollTo(0, targetY);
      return;
    }

    const base = 650;
    const extra = Math.min(850, Math.abs(distance) * 0.25);
    const duration = Math.min(maxMs, base + extra);

    const start = performance.now();
    function step(now){
      const t = Math.min(1, (now - start) / duration);
      const e = easeOutCubic(t);
      window.scrollTo(0, Math.round(startY + distance * e));
      if(t < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  function scrollToEl(el, { offset = 10, smooth = true } = {}){
    if(!el) return;
    const rect = el.getBoundingClientRect();
    const y = Math.max(0, rect.top + (window.scrollY || 0) - offset);
    if(smooth) smoothScrollToY(y, SCROLL_MAX_MS);
    else window.scrollTo(0, y);
  }

  // ====== Chunked rendering (so 500–800 is fine) ======
  let renderedUntil = 0;
  let chunkSentinelObserver = null;

  function renderChunk(container, start, end){
    const frag = document.createDocumentFragment();

    for(let i = start; i < end; i++){
      const item = ITEMS[i];
      frag.appendChild(makeDetails(item, i));

      const isGap = ((i + 1) % BETWEEN_EVERY === 0) && (i + 1) < ITEMS.length;
      if(isGap) frag.appendChild(buildBetweenAd(BETWEEN_SLOTS));
    }

    container.appendChild(frag);
    observeNewSlots(container);
    renderedUntil = end;
  }

  function ensureChunkObserver(container){
    const sentinel = $("#chunkSentinel");
    if(!sentinel) return;

    if(chunkSentinelObserver) return;
    chunkSentinelObserver = new IntersectionObserver((entries) => {
      for(const entry of entries){
        if(!entry.isIntersecting) continue;
        if(renderedUntil >= ITEMS.length) return;

        const nextEnd = Math.min(ITEMS.length, renderedUntil + CHUNK_SIZE);
        renderChunk(container, renderedUntil, nextEnd);
        // keep sentinel at bottom
        container.appendChild(sentinel);

        // if fully rendered, append footer ads once
        if(renderedUntil >= ITEMS.length && !$("#endAds")){
          container.appendChild(buildEndAds());
          observeNewSlots(container);
        }

        // lazy serve ads after adding new slots
        if(LAZY_ADS) setTimeout(serveAds, 60);
      }
    }, { root:null, rootMargin: CHUNK_ROOT_MARGIN, threshold: 0.01 });

    chunkSentinelObserver.observe(sentinel);
  }

  // ====== Open / Embed ======
  function openDetails(d){
    if(!d) return;
    d.open = true;
    // trigger embed build via toggle listener
  }

  function openFirstChapter({ scroll=false } = {}){
    const first = $("#item-0");
    if(first){
      openDetails(first);
      if(scroll) scrollToEl(first, { offset: 12, smooth: true });
    }
  }

  function openLatestChapter({ scroll=true } = {}){
    const lastIdx = ITEMS.length - 1;
    ensureRenderedToIndex(lastIdx, () => {
      const last = $(`#item-${lastIdx}`);
      if(last){
        openDetails(last);
        if(scroll) scrollToEl(last, { offset: 12, smooth: true });
      }
    });
  }

  function ensureRenderedToIndex(idx, cb){
    // Already rendered
    if(idx < renderedUntil){
      cb?.();
      return;
    }

    const container = $("#container");
    if(!container) { cb?.(); return; }

    // Render chunks synchronously until idx is included (fast enough for button press)
    while(renderedUntil < ITEMS.length && idx >= renderedUntil){
      const nextEnd = Math.min(ITEMS.length, renderedUntil + CHUNK_SIZE);
      renderChunk(container, renderedUntil, nextEnd);
    }

    // append footer ads if not present and all rendered
    if(renderedUntil >= ITEMS.length && !$("#endAds")){
      container.appendChild(buildEndAds());
      observeNewSlots(container);
    }

    // keep sentinel at bottom if present
    const sentinel = $("#chunkSentinel");
    if(sentinel) container.appendChild(sentinel);

    cb?.();
    if(LAZY_ADS) setTimeout(serveAds, 60);
  }

  // ====== Toggle handler (iframe injection + labels) ======
  document.addEventListener("toggle", (e) => {
    const d = e.target;
    if(!(d instanceof HTMLDetailsElement)) return;
    if(!d.classList.contains("card")) return;

    const content = d.querySelector(".content[data-src]");
    if(!content) return;

    const expBtn = d.querySelector(".expbtn");
    const hint   = d.querySelector(".expand-hint");

    if(d.open){
      if(expBtn) expBtn.innerHTML = '▲ HIDE <span class="chev"></span>';
      if(hint) hint.textContent = "Click to collapse";

      const isMobile = window.matchMedia("(max-width: 900px)").matches;
      if(!isMobile && CLOSE_OTHERS_ON_OPEN){
        $$("details.card[open]").forEach(x => { if(x !== d) x.open = false; });
      }

      if(!content.querySelector("iframe")){
        content.replaceChildren();
        const iframe = document.createElement("iframe");
        iframe.loading = "lazy";
        iframe.referrerPolicy = "no-referrer";
        iframe.src = content.dataset.src;
        iframe.allow = "fullscreen";
        content.appendChild(iframe);
      }
    } else {
      if(expBtn) expBtn.innerHTML = '▶ READ <span class="chev"></span>';
      if(hint) hint.textContent = "Opens below";
      content.replaceChildren();
    }
  }, true);

  // ====== Click handling ======
  document.addEventListener("click", (e) => {
    // Expand button toggles without summary weirdness
    const btn = e.target.closest(".expbtn");
    if(btn){
      const d = btn.closest("details");
      if(d){
        d.open = !d.open;
        e.preventDefault();
        e.stopPropagation();
      }
      return;
    }

    // First chapter buttons
    const firstBtn =
      e.target.closest("#openFirstTop") ||
      e.target.closest("#openFirstBottom") ||
      e.target.closest("#openFirst");

    if(firstBtn){
      e.preventDefault();
      e.stopPropagation();
      openFirstChapter({ scroll: true });
      return;
    }

    // Latest chapter buttons (go all the way down)
    const latestBtn =
      e.target.closest("#openLatestTop") ||
      e.target.closest("#openLatestBottom") ||
      e.target.closest("#openLatest");

    if(latestBtn){
      e.preventDefault();
      e.stopPropagation();
      openLatestChapter({ scroll: true });
      return;
    }
  });

  // ====== Fuzzy search (title + id, partial + typos) ======
  function norm(s){
    return String(s || "")
      .toLowerCase()
      .normalize("NFKD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, " ")
      .trim();
  }

  function grams3(s){
    s = `  ${s}  `;
    const out = [];
    for(let i=0;i<s.length-2;i++) out.push(s.slice(i,i+3));
    return out;
  }

  function levenshtein(a, b){
    if(a === b) return 0;
    a = String(a); b = String(b);
    const al = a.length, bl = b.length;
    if(al === 0) return bl;
    if(bl === 0) return al;

    // small optimization: ensure b is shorter for memory
    if(bl > al){ const t=a; a=b; b=t; }
    const n = a.length, m = b.length;

    let prev = new Array(m + 1);
    let cur  = new Array(m + 1);

    for(let j=0;j<=m;j++) prev[j] = j;

    for(let i=1;i<=n;i++){
      cur[0] = i;
      const ca = a.charCodeAt(i-1);
      for(let j=1;j<=m;j++){
        const cost = (ca === b.charCodeAt(j-1)) ? 0 : 1;
        cur[j] = Math.min(
          prev[j] + 1,
          cur[j-1] + 1,
          prev[j-1] + cost
        );
      }
      const tmp = prev; prev = cur; cur = tmp;
    }
    return prev[m];
  }

  // Precompute a fast index that scales to 800+ items
  let SEARCH_INDEX = null;
  function buildSearchIndex(){
    if(SEARCH_INDEX) return SEARCH_INDEX;

    SEARCH_INDEX = ITEMS.map((it, i) => {
      const titleN = norm(it.title);
      const idN    = norm(it.id);
      const combo  = (titleN + " " + idN).trim();

      // grams set for quick overlap score
      const g = grams3(combo);
      const gset = new Set(g);

      // tokens for cheap word matching
      const toks = combo.split(/\s+/).filter(Boolean);

      return {
        i,
        title: it.title || `Item ${i+1}`,
        id: it.id || "",
        titleN,
        idN,
        combo,
        toks,
        gset
      };
    });

    return SEARCH_INDEX;
  }

  function scoreItem(qN, qToks, qGrams, it){
    let score = 0;

    // Strong boost for substring matches (partial is enough)
    if(it.combo.includes(qN)) score += 70;
    if(it.titleN.includes(qN)) score += 35;
    if(it.idN.includes(qN))    score += 55;

    // Token containment (even partial tokens)
    let tokenHits = 0;
    for(const qt of qToks){
      if(!qt) continue;
      // match inside tokens or across combo
      if(it.combo.includes(qt)) tokenHits += 1;
      else {
        // allow tiny typos on short tokens (e.g. "c01", "chaptr")
        if(qt.length >= 3){
          let best = 99;
          for(const t of it.toks){
            if(Math.abs(t.length - qt.length) > 2) continue;
            const d = levenshtein(qt, t);
            if(d < best) best = d;
            if(best <= 1) break;
          }
          if(best <= 1) tokenHits += 0.6;
        }
      }
    }
    score += tokenHits * 10;

    // Trigram overlap for “similarity vibe”
    // (good at: V1-C06 vs V1-C060, "chpater" vs "chapter", etc.)
    if(qGrams.length){
      let hit = 0;
      for(const g of qGrams){
        if(it.gset.has(g)) hit++;
      }
      const overlap = hit / Math.max(1, qGrams.length);
      score += overlap * 40;
    }

    // If query is short, be stricter (avoid random noise)
    if(qN.length <= 2) score *= 0.55;

    return score;
  }

  function runSearch(query){
    const qN = norm(query);
    if(!qN) return [];

    const qToks = qN.split(/\s+/).filter(Boolean);
    const qGrams = grams3(qN);

    const idx = buildSearchIndex();
    const scored = [];

    for(const it of idx){
      const s = scoreItem(qN, qToks, qGrams, it);
      if(s >= 18) scored.push({ it, s });
    }

    scored.sort((a,b) => b.s - a.s);

    return scored.slice(0, SEARCH_MAX_RESULTS).map(x => ({
      i: x.it.i,
      title: x.it.title,
      id: x.it.id,
      score: x.s
    }));
  }

  function jumpToItem(i){
    ensureRenderedToIndex(i, () => {
      const el = $(`#item-${i}`);
      if(el){
        // open it + scroll
        openDetails(el);
        scrollToEl(el, { offset: 12, smooth: true });
      }
    });
  }

  function wireSearchUI(){
    const input = $("#q");
    const meta  = $("#meta");
    const nav   = $("#nav");

    const clearBtn =
      $("#clear") ||
      $("#clearTop") ||
      $("#clearBottom");

    if(meta) meta.textContent = `Items: ${ITEMS.length}`;

    if(clearBtn){
      clearBtn.addEventListener("click", () => {
        if(input) input.value = "";
        if(nav) nav.style.display = "none";
        if(meta) meta.textContent = `Items: ${ITEMS.length}`;
      });
    }

    if(!input) return;

    let tmr = null;
    input.addEventListener("input", () => {
      clearTimeout(tmr);
      tmr = setTimeout(() => {
        const q = input.value || "";
        if(!q.trim()){
          if(nav) nav.style.display = "none";
          if(meta) meta.textContent = `Items: ${ITEMS.length}`;
          return;
        }

        const hits = runSearch(q);
        if(meta) meta.textContent = hits.length ? `Matches: ${hits.length}` : "No matches.";

        if(nav){
          nav.innerHTML = hits.map(h => {
            const label = escapeHtml(h.title);
            const tag   = h.id ? `<span class="nav-id">${escapeHtml(h.id)}</span>` : "";
            // data-i lets us jump without relying on hash only
            return `<a href="#item-${h.i}" data-i="${h.i}">${label}${tag}</a>`;
          }).join("");
          nav.style.display = hits.length ? "flex" : "none";
        }
      }, SEARCH_DEBOUNCE_MS);
    });

    // Enter goes to best match
    input.addEventListener("keydown", (e) => {
      if(e.key !== "Enter") return;
      const hits = runSearch(input.value);
      if(hits[0]){
        e.preventDefault();
        jumpToItem(hits[0].i);
      }
    });

    // Clicking a search chip should jump + open
    if(nav){
      nav.addEventListener("click", (e) => {
        const a = e.target.closest("a[data-i]");
        if(!a) return;
        e.preventDefault();
        const i = parseInt(a.dataset.i, 10);
        if(Number.isFinite(i)) jumpToItem(i);
      });
    }
  }

  // ====== Render ======
  function render(){
    const container = $("#container");
    if(!container) return;

    container.replaceChildren();

    // Optional featured slot above chapters
    if(SHOW_FEATURED_AD_ABOVE_CHAPTERS){
      container.appendChild(makeFeaturedMoneySlot());
    }

    // chunk sentinel (kept at bottom)
    const sentinel = document.createElement("div");
    sentinel.id = "chunkSentinel";
    sentinel.style.height = "1px";
    sentinel.style.width = "100%";
    sentinel.style.opacity = "0";
    container.appendChild(sentinel);

    renderedUntil = 0;
    // first chunk
    const firstEnd = Math.min(ITEMS.length, CHUNK_SIZE);
    renderChunk(container, 0, firstEnd);
    container.appendChild(sentinel);

    // if total fits in one chunk, append end ads immediately
    if(renderedUntil >= ITEMS.length){
      container.appendChild(buildEndAds());
    }

    ensureChunkObserver(container);

    // Open smart / open first
    if(OPEN_FIRST_ON_LOAD){
      openFirstChapter({ scroll: false });
    } else if(OPEN_SMART){
      // smart open among what exists right now (first chunk)
      const cards = $$("details.card", container);
      if(cards.length){
        const mid = Math.floor(cards.length / 2);
        cards[0].open = true;
        if(cards[mid]) cards[mid].open = true;
        // last of chunk (not necessarily last overall)
        cards[cards.length - 1].open = true;
      }
    }
  }

  function boot(){
    if(window.__ARCHIVE_BOOTED__) return;
    window.__ARCHIVE_BOOTED__ = true;

    // render early
    render();
    wireSearchUI();

    // ads
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
