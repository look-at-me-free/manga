// index.js
(() => {
  // ====== EDIT THIS LIST ======
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

  // ✅ Long “endcap” ad under the FINAL chapter (wide rectangle)
  // Recommended to use your banner zone (same as top banner) if you want it to look clean.
  const ENDCAP_ZONE  = "5865232";

  // ====== AD DENSITY ======
  const BETWEEN_EVERY = 2;
  const BETWEEN_SLOTS = 3;

  // ====== BEHAVIOR ======
  const OPEN_SMART = true;
  const CLOSE_OTHERS_ON_OPEN = true;
  const LAZY_ADS = true;

  // ✅ FEATURED AD ABOVE CHAPTERS (OFF = looks legit)
  const SHOW_FEATURED_AD_ABOVE_CHAPTERS = false;

  // ====== SCROLL ======
  const SCROLL_MAX_MS = 1500;

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

  // ✅ Endcap ad: one long rectangle under the FINAL chapter
  function buildEndcapAd(){
    const wrap = document.createElement("section");
    wrap.className = "endcap-ad";
    wrap.id = "endcapAd";

    const slot = document.createElement("div");
    slot.className = "exo-slot";
    slot.dataset.zone = ENDCAP_ZONE;

    wrap.appendChild(slot);
    return wrap;
  }

  // Optional featured above chapters (kept, but gated)
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

  // ====== Smooth scroll helper ======
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

  // ====== Nav helpers ======
  function openFirstChapter(){
    const first = $("details.card");
    if(first){
      first.open = true;
      first.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function openLatestChapter(){
    const lastIdx = ITEMS.length - 1;
    const latest = $(`#item-${lastIdx}`);
    if(latest){
      latest.open = true;
      latest.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  // ====== Render (requested layout) ======
  // Layout near bottom becomes:
  // ... chapters ... -> penultimate -> [24 ad block] -> final -> [long endcap ad]
  function render(){
    const container = $("#container");
    if(!container) return;

    container.replaceChildren();

    // ✅ No “spammy” ad above the chapters (unless you toggle it on)
    if(SHOW_FEATURED_AD_ABOVE_CHAPTERS){
      container.appendChild(makeFeaturedMoneySlot());
    }

    if(ITEMS.length === 0){
      return;
    }

    if(ITEMS.length === 1){
      // Single chapter: show it, then endcap
      container.appendChild(makeDetails(ITEMS[0], 0));
      container.appendChild(buildEndcapAd());
      observeNewSlots(container);
      openSmart($$("details.card", container));
      return;
    }

    const lastIdx = ITEMS.length - 1;

    // Render all chapters EXCEPT the last one
    for(let i = 0; i < lastIdx; i++){
      container.appendChild(makeDetails(ITEMS[i], i));

      // Between-ads should NOT appear after penultimate chapter.
      // So only allow gaps while (i+1) < lastIdx.
      const isGap = ((i + 1) % BETWEEN_EVERY === 0) && (i + 1) < lastIdx;
      if(isGap) container.appendChild(buildBetweenAd(BETWEEN_SLOTS));
    }

    // ✅ 24-ad block comes BEFORE final chapter
    container.appendChild(buildEndAds());

    // ✅ Final chapter (latest) comes AFTER the 24-ad block
    container.appendChild(makeDetails(ITEMS[lastIdx], lastIdx));

    // ✅ Long endcap ad under the final chapter
    container.appendChild(buildEndcapAd());

    observeNewSlots(container);

    const cards = $$("details.card", container);
    openSmart(cards);
  }

  // ====== UI EVENTS ======
  document.addEventListener("click", (e) => {
    // Expand/Hide button
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
    const of =
      e.target.closest("#openFirst") ||
      e.target.closest("#openFirstTop") ||
      e.target.closest("#openFirstBottom");
    if(of){
      e.preventDefault();
      e.stopPropagation();
      openFirstChapter();
      return;
    }

    // Latest chapter buttons (add these IDs in HTML when you want)
    const ol =
      e.target.closest("#openLatest") ||
      e.target.closest("#openLatestTop") ||
      e.target.closest("#openLatestBottom");
    if(ol){
      e.preventDefault();
      e.stopPropagation();
      openLatestChapter();
      return;
    }

    // If you still have a SEARCH button somewhere, make it just focus the input (no scary glide)
    const jump = e.target.closest("#jumpSearch");
    if(jump){
      e.preventDefault();
      e.stopPropagation();
      $("#q")?.focus();
      return;
    }
  });

  // Embed viewer on open + update button label/hint
  document.addEventListener("toggle", (e) => {
    const d = e.target;
    if(!(d instanceof HTMLDetailsElement)) return;

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

      if(content.querySelector("iframe")) return;

      content.replaceChildren();

      const iframe = document.createElement("iframe");
      iframe.loading = "lazy";
      iframe.referrerPolicy = "no-referrer";
      iframe.src = content.dataset.src;
      iframe.allow = "fullscreen";
      content.appendChild(iframe);
    } else {
      if(expBtn) expBtn.innerHTML = '▶ READ <span class="chev"></span>';
      if(hint) hint.textContent = "Opens below";
      content.replaceChildren();
    }
  }, true);

  // ====== SEARCH (works wherever #q is; top/bottom doesn’t matter) ======
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
      if(out.length >= 50) break;
    }
    return out;
  }

  function wireSearchUI(){
    const input = $("#q");
    const meta  = $("#meta");
    const nav   = $("#nav");

    const clearButtons = [
      $("#clear"),
      $("#clearBottom"),
      $("#clearTop"),
    ].filter(Boolean);

    if(meta) meta.textContent = `Items: ${ITEMS.length}`;

    clearButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        if(input) input.value = "";
        if(nav) nav.style.display = "none";
        if(meta) meta.textContent = `Items: ${ITEMS.length}`;
      });
    });

    if(!input) return;

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
      }, 140);
    });

    input.addEventListener("keydown", (e) => {
      if(e.key !== "Enter") return;
      const hits = runSearch(input.value);
      if(hits[0]){
        location.hash = `#item-${hits[0].i}`;
      }
    });
  }

  function boot(){
    if(window.__ARCHIVE_BOOTED__) return;
    window.__ARCHIVE_BOOTED__ = true;

    render();
    wireSearchUI();

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
