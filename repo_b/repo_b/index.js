(() => {
  // ====== DATA / ROUTING ======
  const WORKS_FILE = "works.json";
  const WORKS_DIR = "works";

  let WORKS = [];
  let ITEMS = [];
  let WORK_TITLE = "";
  let CURRENT_SLUG = "";

  // ====== AD ZONES ======
  const BETWEEN_ZONE = "5865236";
  const END_ZONE = "5865236";
  const END_ADS = 24;

  // ====== AD DENSITY ======
  const BETWEEN_EVERY = 2;
  const BETWEEN_SLOTS = 3;

  // ====== BEHAVIOR ======
  const OPEN_SMART = true;
  const OPEN_FIRST_ON_LOAD = true;
  const CLOSE_OTHERS_ON_OPEN = true;
  const LAZY_ADS = true;
  const SHOW_FEATURED_AD_ABOVE_CHAPTERS = false;

  // ====== SCALE ======
  const CHUNK_SIZE = 90;
  const CHUNK_ROOT_MARGIN = "1800px 0px";

  // ====== SCROLL ======
  const SCROLL_MAX_MS = 1500;

  // ====== SEARCH ======
  const SEARCH_MAX_RESULTS = 40;
  const SEARCH_DEBOUNCE_MS = 90;

  // ====== DOM HELPERS ======
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

  function escapeHtml(s) {
    return String(s)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  }

  function slugToTitle(slug) {
    return String(slug || "")
      .replace(/[_-]+/g, " ")
      .replace(/\b\w/g, c => c.toUpperCase())
      .trim();
  }

  // ====== ROUTING ======
  function getPathSlug() {
    const path = window.location.pathname.replace(/^\/+|\/+$/g, "");
    return path || "index";
  }

  function setPathSlug(slug) {
    const next = slug === "index" ? "/" : `/${encodeURIComponent(slug)}`;
    const current = window.location.pathname + window.location.search + window.location.hash;
    if (current !== next) {
      history.pushState({}, "", next);
    }
  }

  function getWorkJsonPath(slug) {
    return `${WORKS_DIR}/${slug}.json`;
  }

  async function fetchJson(path) {
    const res = await fetch(path, { cache: "no-store" });
    if (!res.ok) {
      throw new Error(`Failed to load ${path} (${res.status})`);
    }
    return res.json();
  }

  async function loadWorksManifest() {
    const data = await fetchJson(WORKS_FILE);
    WORKS = Array.isArray(data.works) ? data.works : [];
  }

  async function loadWorkBySlug(slug) {
    const data = await fetchJson(getWorkJsonPath(slug));

    CURRENT_SLUG = slug;
    WORK_TITLE = slugToTitle(slug);
    ITEMS = Array.isArray(data.items) ? data.items : [];

    renderedUntil = 0;
    SEARCH_INDEX = null;

    const currentWorkTitle = $("#currentWorkTitle");
    if (currentWorkTitle) {
      currentWorkTitle.textContent = WORK_TITLE || "Expand • Read • Scroll";
    }

    const meta = $("#meta");
    if (meta) meta.textContent = `Items: ${ITEMS.length}`;

    const input = $("#q");
    if (input) input.value = "";

    const nav = $("#nav");
    if (nav) {
      nav.innerHTML = "";
      nav.style.display = "none";
    }
  }

  function renderWorksNav() {
    const nav = $("#worksNav");
    if (!nav) return;

    nav.innerHTML = WORKS.map(work => {
      const active = work.slug === CURRENT_SLUG ? " active" : "";
      const label = slugToTitle(work.slug);

      return `
        <button
          class="work-chip${active}"
          type="button"
          data-work-slug="${escapeHtml(work.slug)}"
          aria-current="${work.slug === CURRENT_SLUG ? "page" : "false"}"
        >
          ${escapeHtml(label)}
        </button>
      `;
    }).join("");
  }

  // ====== DRIVE URL HELPERS ======
  function driveFileIdFromUrl(url) {
    try {
      const u = new URL(url);
      const m = u.pathname.match(/\/file\/d\/([^/]+)/);
      if (m && m[1]) return m[1];
      const id = u.searchParams.get("id");
      return id || null;
    } catch {
      const m = String(url).match(/\/file\/d\/([^/]+)/);
      return m?.[1] || null;
    }
  }

  function toDrivePreview(url) {
    const id = driveFileIdFromUrl(url);
    return id ? `https://drive.google.com/file/d/${id}/preview` : url;
  }

  // ====== ADS ======
  function ensureIns(slot) {
    if (slot.dataset.inited) return;
    slot.dataset.inited = "1";
    const ins = document.createElement("ins");
    ins.className = "eas6a97888e2";
    ins.setAttribute("data-zoneid", slot.dataset.zone);
    slot.appendChild(ins);
  }

  function serveAds() {
    (window.AdProvider = window.AdProvider || []).push({ serve: {} });
  }

  let adObserver = null;

  function initLazyAds() {
    if (adObserver || !LAZY_ADS) return;

    adObserver = new IntersectionObserver((entries) => {
      let didInit = false;
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const slot = entry.target;
        ensureIns(slot);
        adObserver.unobserve(slot);
        didInit = true;
      }
      if (didInit) setTimeout(serveAds, 30);
    }, { root: null, rootMargin: "900px 0px", threshold: 0.01 });

    $$(".exo-slot[data-zone]").forEach(slot => adObserver.observe(slot));
  }

  function observeNewSlots(root) {
    if (!adObserver) return;
    $$(".exo-slot[data-zone]", root).forEach(slot => adObserver.observe(slot));
  }

  function initAllAdsNow() {
    $$(".exo-slot[data-zone]").forEach(ensureIns);
    serveAds();
  }

  function buildBetweenAd(count) {
    const wrap = document.createElement("div");
    wrap.className = "between-ad";

    const grid = document.createElement("div");
    grid.className = "between-grid";

    for (let i = 0; i < count; i++) {
      const slot = document.createElement("div");
      slot.className = "exo-slot";
      slot.dataset.zone = BETWEEN_ZONE;
      grid.appendChild(slot);
    }

    wrap.appendChild(grid);
    return wrap;
  }

  function buildEndAds() {
    const wrap = document.createElement("section");
    wrap.className = "end-ads";
    wrap.id = "endAds";

    const title = document.createElement("p");
    title.className = "end-ads-title";
    title.textContent = "More panels";

    const grid = document.createElement("div");
    grid.className = "end-ads-grid";

    for (let i = 0; i < END_ADS; i++) {
      const slot = document.createElement("div");
      slot.className = "exo-slot";
      slot.dataset.zone = END_ZONE;
      grid.appendChild(slot);
    }

    wrap.appendChild(title);
    wrap.appendChild(grid);
    return wrap;
  }

  function makeFeaturedMoneySlot() {
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

  // ====== CARDS ======
  function makeDetails(item, idx) {
    const d = document.createElement("details");
    d.className = "card";
    d.dataset.idx = String(idx);
    d.id = `item-${idx}`;

    const title = escapeHtml(item.title || `Item ${idx + 1}`);
    const workTitle = WORK_TITLE ? escapeHtml(WORK_TITLE) : "";
    const openUrl = item.url;
    const embedUrl = toDrivePreview(item.url);

    d.innerHTML = `
      <summary>
        <div class="leftstack">
          <div class="doc">${title}</div>
          ${workTitle ? `<div class="id">${workTitle}</div>` : ``}
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

  // ====== SMOOTH SCROLL ======
  function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  function smoothScrollToY(targetY, maxMs = SCROLL_MAX_MS) {
    const startY = window.scrollY || window.pageYOffset || 0;
    const distance = targetY - startY;

    if (Math.abs(distance) < 2) {
      window.scrollTo(0, targetY);
      return;
    }

    const base = 650;
    const extra = Math.min(850, Math.abs(distance) * 0.25);
    const duration = Math.min(maxMs, base + extra);
    const start = performance.now();

    function step(now) {
      const t = Math.min(1, (now - start) / duration);
      const e = easeOutCubic(t);
      window.scrollTo(0, Math.round(startY + distance * e));
      if (t < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }

  function scrollToEl(el, { offset = 10, smooth = true } = {}) {
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const y = Math.max(0, rect.top + (window.scrollY || 0) - offset);
    if (smooth) smoothScrollToY(y, SCROLL_MAX_MS);
    else window.scrollTo(0, y);
  }

  // ====== CHUNKED RENDERING ======
  let renderedUntil = 0;
  let chunkSentinelObserver = null;

  function renderChunk(container, start, end) {
    const frag = document.createDocumentFragment();

    for (let i = start; i < end; i++) {
      const item = ITEMS[i];
      frag.appendChild(makeDetails(item, i));

      const isGap = ((i + 1) % BETWEEN_EVERY === 0) && (i + 1) < ITEMS.length;
      if (isGap) frag.appendChild(buildBetweenAd(BETWEEN_SLOTS));
    }

    container.appendChild(frag);
    observeNewSlots(container);
    renderedUntil = end;
  }

  function ensureChunkObserver(container) {
    const sentinel = $("#chunkSentinel");
    if (!sentinel) return;

    if (chunkSentinelObserver) {
      chunkSentinelObserver.disconnect();
      chunkSentinelObserver = null;
    }

    chunkSentinelObserver = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        if (renderedUntil >= ITEMS.length) return;

        const nextEnd = Math.min(ITEMS.length, renderedUntil + CHUNK_SIZE);
        renderChunk(container, renderedUntil, nextEnd);
        container.appendChild(sentinel);

        if (renderedUntil >= ITEMS.length && !$("#endAds")) {
          container.appendChild(buildEndAds());
          observeNewSlots(container);
        }

        if (LAZY_ADS) setTimeout(serveAds, 60);
      }
    }, { root: null, rootMargin: CHUNK_ROOT_MARGIN, threshold: 0.01 });

    chunkSentinelObserver.observe(sentinel);
  }

  // ====== OPEN / EMBED ======
  function openDetails(d) {
    if (!d) return;
    d.open = true;
  }

  function openFirstChapter({ scroll = false } = {}) {
    const first = $("#item-0");
    if (first) {
      openDetails(first);
      if (scroll) scrollToEl(first, { offset: 12, smooth: true });
    }
  }

  function openLatestChapter({ scroll = true } = {}) {
    const lastIdx = ITEMS.length - 1;
    ensureRenderedToIndex(lastIdx, () => {
      const last = $(`#item-${lastIdx}`);
      if (last) {
        openDetails(last);
        if (scroll) scrollToEl(last, { offset: 12, smooth: true });
      }
    });
  }

  function ensureRenderedToIndex(idx, cb) {
    if (idx < renderedUntil) {
      cb?.();
      return;
    }

    const container = $("#container");
    if (!container) {
      cb?.();
      return;
    }

    while (renderedUntil < ITEMS.length && idx >= renderedUntil) {
      const nextEnd = Math.min(ITEMS.length, renderedUntil + CHUNK_SIZE);
      renderChunk(container, renderedUntil, nextEnd);
    }

    if (renderedUntil >= ITEMS.length && !$("#endAds")) {
      container.appendChild(buildEndAds());
      observeNewSlots(container);
    }

    const sentinel = $("#chunkSentinel");
    if (sentinel) container.appendChild(sentinel);

    cb?.();
    if (LAZY_ADS) setTimeout(serveAds, 60);
  }

  // ====== TOGGLE HANDLER ======
  document.addEventListener("toggle", (e) => {
    const d = e.target;
    if (!(d instanceof HTMLDetailsElement)) return;
    if (!d.classList.contains("card")) return;

    const content = d.querySelector(".content[data-src]");
    if (!content) return;

    const expBtn = d.querySelector(".expbtn");
    const hint = d.querySelector(".expand-hint");

    if (d.open) {
      if (expBtn) expBtn.innerHTML = '▲ HIDE <span class="chev"></span>';
      if (hint) hint.textContent = "Click to collapse";

      const isMobile = window.matchMedia("(max-width: 900px)").matches;
      if (!isMobile && CLOSE_OTHERS_ON_OPEN) {
        $$("details.card[open]").forEach(x => {
          if (x !== d) x.open = false;
        });
      }

      if (!content.querySelector("iframe")) {
        content.replaceChildren();
        const iframe = document.createElement("iframe");
        iframe.loading = "lazy";
        iframe.referrerPolicy = "no-referrer";
        iframe.src = content.dataset.src;
        iframe.allow = "fullscreen";
        content.appendChild(iframe);
      }
    } else {
      if (expBtn) expBtn.innerHTML = '▶ READ <span class="chev"></span>';
      if (hint) hint.textContent = "Opens below";
      content.replaceChildren();
    }
  }, true);

  // ====== CLICK HANDLING ======
  document.addEventListener("click", (e) => {
    const workBtn = e.target.closest("[data-work-slug]");
    if (workBtn) {
      e.preventDefault();
      e.stopPropagation();

      const slug = workBtn.dataset.workSlug;
      if (!slug || slug === CURRENT_SLUG) return;

      setPathSlug(slug);

      switchWork(slug).catch(err => {
        console.error(err);
        const meta = $("#meta");
        if (meta) meta.textContent = "Failed to load selected work.";
      });
      return;
    }

    const btn = e.target.closest(".expbtn");
    if (btn) {
      const d = btn.closest("details");
      if (d) {
        d.open = !d.open;
        e.preventDefault();
        e.stopPropagation();
      }
      return;
    }

    const firstBtn =
      e.target.closest("#openFirstTop") ||
      e.target.closest("#openFirstBottom") ||
      e.target.closest("#openFirst");

    if (firstBtn) {
      e.preventDefault();
      e.stopPropagation();
      openFirstChapter({ scroll: true });
      return;
    }

    const latestBtn =
      e.target.closest("#openLatestTop") ||
      e.target.closest("#openLatestBottom") ||
      e.target.closest("#openLatest");

    if (latestBtn) {
      e.preventDefault();
      e.stopPropagation();
      openLatestChapter({ scroll: true });
    }
  });

  // ====== SEARCH ======
  function norm(s) {
    return String(s || "")
      .toLowerCase()
      .normalize("NFKD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, " ")
      .trim();
  }

  function grams3(s) {
    s = `  ${s}  `;
    const out = [];
    for (let i = 0; i < s.length - 2; i++) out.push(s.slice(i, i + 3));
    return out;
  }

  function levenshtein(a, b) {
    if (a === b) return 0;
    a = String(a);
    b = String(b);

    const al = a.length;
    const bl = b.length;
    if (al === 0) return bl;
    if (bl === 0) return al;

    if (bl > al) {
      const t = a;
      a = b;
      b = t;
    }

    const n = a.length;
    const m = b.length;
    let prev = new Array(m + 1);
    let cur = new Array(m + 1);

    for (let j = 0; j <= m; j++) prev[j] = j;

    for (let i = 1; i <= n; i++) {
      cur[0] = i;
      const ca = a.charCodeAt(i - 1);

      for (let j = 1; j <= m; j++) {
        const cost = ca === b.charCodeAt(j - 1) ? 0 : 1;
        cur[j] = Math.min(
          prev[j] + 1,
          cur[j - 1] + 1,
          prev[j - 1] + cost
        );
      }

      const tmp = prev;
      prev = cur;
      cur = tmp;
    }

    return prev[m];
  }

  let SEARCH_INDEX = null;
  let searchWired = false;

  function buildSearchIndex() {
    if (SEARCH_INDEX) return SEARCH_INDEX;

    SEARCH_INDEX = ITEMS.map((it, i) => {
      const titleN = norm(it.title);
      const workN = norm(WORK_TITLE);
      const combo = (titleN + " " + workN).trim();
      const g = grams3(combo);
      const gset = new Set(g);
      const toks = combo.split(/\s+/).filter(Boolean);

      return {
        i,
        title: it.title || `Item ${i + 1}`,
        work_title: WORK_TITLE,
        titleN,
        workN,
        combo,
        toks,
        gset
      };
    });

    return SEARCH_INDEX;
  }

  function scoreItem(qN, qToks, qGrams, it) {
    let score = 0;

    if (it.combo.includes(qN)) score += 70;
    if (it.titleN.includes(qN)) score += 35;
    if (it.workN.includes(qN)) score += 20;

    let tokenHits = 0;
    for (const qt of qToks) {
      if (!qt) continue;

      if (it.combo.includes(qt)) {
        tokenHits += 1;
      } else if (qt.length >= 3) {
        let best = 99;
        for (const t of it.toks) {
          if (Math.abs(t.length - qt.length) > 2) continue;
          const d = levenshtein(qt, t);
          if (d < best) best = d;
          if (best <= 1) break;
        }
        if (best <= 1) tokenHits += 0.6;
      }
    }

    score += tokenHits * 10;

    if (qGrams.length) {
      let hit = 0;
      for (const g of qGrams) {
        if (it.gset.has(g)) hit++;
      }
      const overlap = hit / Math.max(1, qGrams.length);
      score += overlap * 40;
    }

    if (qN.length <= 2) score *= 0.55;

    return score;
  }

  function runSearch(query) {
    const qN = norm(query);
    if (!qN) return [];

    const qToks = qN.split(/\s+/).filter(Boolean);
    const qGrams = grams3(qN);

    const idx = buildSearchIndex();
    const scored = [];

    for (const it of idx) {
      const s = scoreItem(qN, qToks, qGrams, it);
      if (s >= 18) scored.push({ it, s });
    }

    scored.sort((a, b) => b.s - a.s);

    return scored.slice(0, SEARCH_MAX_RESULTS).map(x => ({
      i: x.it.i,
      title: x.it.title,
      work_title: x.it.work_title,
      score: x.s
    }));
  }

  function jumpToItem(i) {
    ensureRenderedToIndex(i, () => {
      const el = $(`#item-${i}`);
      if (el) {
        openDetails(el);
        scrollToEl(el, { offset: 12, smooth: true });
      }
    });
  }

  function updateSearchResults(query) {
    const meta = $("#meta");
    const nav = $("#nav");

    if (!query.trim()) {
      if (nav) {
        nav.innerHTML = "";
        nav.style.display = "none";
      }
      if (meta) meta.textContent = `Items: ${ITEMS.length}`;
      return;
    }

    const hits = runSearch(query);
    if (meta) meta.textContent = hits.length ? `Matches: ${hits.length}` : "No matches.";

    if (nav) {
      nav.innerHTML = hits.map(h => {
        const label = escapeHtml(h.title);
        const tag = h.work_title ? `<span class="nav-id">${escapeHtml(h.work_title)}</span>` : "";
        return `<a href="#item-${h.i}" data-i="${h.i}">${label}${tag}</a>`;
      }).join("");
      nav.style.display = hits.length ? "flex" : "none";
    }
  }

  function wireSearchUI() {
    if (searchWired) return;
    searchWired = true;

    const input = $("#q");
    const meta = $("#meta");
    const nav = $("#nav");

    const clearBtn =
      $("#clear") ||
      $("#clearTop") ||
      $("#clearBottom");

    if (meta) meta.textContent = `Items: ${ITEMS.length}`;

    if (clearBtn) {
      clearBtn.addEventListener("click", () => {
        if (input) input.value = "";
        if (nav) {
          nav.innerHTML = "";
          nav.style.display = "none";
        }
        if (meta) meta.textContent = `Items: ${ITEMS.length}`;
      });
    }

    if (!input) return;

    let tmr = null;

    input.addEventListener("input", () => {
      clearTimeout(tmr);
      tmr = setTimeout(() => {
        updateSearchResults(input.value || "");
      }, SEARCH_DEBOUNCE_MS);
    });

    input.addEventListener("keydown", (e) => {
      if (e.key !== "Enter") return;
      const hits = runSearch(input.value);
      if (hits[0]) {
        e.preventDefault();
        jumpToItem(hits[0].i);
      }
    });

    if (nav) {
      nav.addEventListener("click", (e) => {
        const a = e.target.closest("a[data-i]");
        if (!a) return;
        e.preventDefault();
        const i = parseInt(a.dataset.i, 10);
        if (Number.isFinite(i)) jumpToItem(i);
      });
    }
  }

  // ====== RENDER ======
  function render() {
    const container = $("#container");
    if (!container) return;

    container.replaceChildren();

    if (SHOW_FEATURED_AD_ABOVE_CHAPTERS) {
      container.appendChild(makeFeaturedMoneySlot());
    }

    const sentinel = document.createElement("div");
    sentinel.id = "chunkSentinel";
    sentinel.style.height = "1px";
    sentinel.style.width = "100%";
    sentinel.style.opacity = "0";
    container.appendChild(sentinel);

    renderedUntil = 0;
    SEARCH_INDEX = null;

    const firstEnd = Math.min(ITEMS.length, CHUNK_SIZE);
    renderChunk(container, 0, firstEnd);
    container.appendChild(sentinel);

    if (renderedUntil >= ITEMS.length) {
      container.appendChild(buildEndAds());
    }

    ensureChunkObserver(container);

    if (OPEN_FIRST_ON_LOAD) {
      openFirstChapter({ scroll: false });
    } else if (OPEN_SMART) {
      const cards = $$("details.card", container);
      if (cards.length) {
        const mid = Math.floor(cards.length / 2);
        cards[0].open = true;
        if (cards[mid]) cards[mid].open = true;
        cards[cards.length - 1].open = true;
      }
    }

    if (LAZY_ADS) {
      setTimeout(serveAds, 80);
    }
  }

  async function switchWork(slug) {
    await loadWorkBySlug(slug);
    renderWorksNav();
    render();

    const meta = $("#meta");
    if (meta) meta.textContent = `Items: ${ITEMS.length}`;
  }

  // ====== BOOT ======
  async function boot() {
    if (window.__ARCHIVE_BOOTED__) return;
    window.__ARCHIVE_BOOTED__ = true;

    await loadWorksManifest();

    let slug = getPathSlug();
    if (!WORKS.some(w => w.slug === slug)) {
      slug = WORKS[0]?.slug || "index";
      setPathSlug(slug);
    }

    await loadWorkBySlug(slug);
    renderWorksNav();
    render();
    wireSearchUI();

    if (LAZY_ADS) {
      initLazyAds();
      setTimeout(serveAds, 900);
    } else {
      initAllAdsNow();
    }
  }

  window.addEventListener("popstate", () => {
    const slug = getPathSlug();

    if (!WORKS.some(w => w.slug === slug)) return;

    switchWork(slug).catch(err => {
      console.error(err);
      const meta = $("#meta");
      if (meta) meta.textContent = "Failed to load archive.";
    });
  });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      boot().catch(err => {
        console.error(err);
        const meta = $("#meta");
        if (meta) meta.textContent = "Failed to load archive.";
      });
    }, { once: true });
  } else {
    boot().catch(err => {
      console.error(err);
      const meta = $("#meta");
      if (meta) meta.textContent = "Failed to load archive.";
    });
  }
})();
