/* ========= SETTINGS ========= */

// Local text file name (put next to index.html)
const DATA_FILE = "drive_files.txt";

// Insert a mid-feed ad after every N entries.
// 1 = after every entry, 2 = every 2 entries, 0 = disable.
const AD_EVERY = 1;

// ExoClick zone ids you gave me
const ZONES = {
  topBanner: 5865232,
  between: 5865236,
  left: 5865238,
  right: 5865240,
  // Popunder is a separate big script; see note at bottom
  // popunder: 5865234
};

// The <ins class="..."> class ExoClick gave you
const EXO_INS_CLASS = "eas6a97888e2";

// ExoClick loader (load ONCE)
const EXO_LOADER_SRC = "https://a.magsrv.com/ad-provider.js";

/* ============================ */

function escapeHtml(s){
  return String(s)
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;")
    .replaceAll("'","&#39;");
}

// Ensure we load the ExoClick loader only once
function ensureExoLoader(){
  if (document.querySelector(`script[src="${EXO_LOADER_SRC}"]`)) return;
  const s = document.createElement("script");
  s.async = true;
  s.type = "application/javascript";
  s.src = EXO_LOADER_SRC;
  document.head.appendChild(s);
}

// Create a real ExoClick banner slot element for a zone
function makeExoSlot(zoneId){
  ensureExoLoader();

  const wrap = document.createElement("div");
  wrap.className = "between-ad"; // works for mid ads; harmless elsewhere

  // Important: We add the <ins> and then push serve
  wrap.innerHTML = `
    <ins class="${EXO_INS_CLASS}" data-zoneid="${zoneId}"></ins>
  `;

  // push serve after insertion into DOM (safer)
  queueMicrotask(() => {
    try{
      (window.AdProvider = window.AdProvider || []).push({ serve: {} });
    }catch(_){}
  });

  return wrap;
}

// Replace placeholder boxes with real zones
function mountFixedAds(){
  // TOP AD SLOT placeholder lives here:
  const top = document.querySelector(".top-ad .ad-slot");
  if(top){
    top.classList.remove("ad-slot");
    top.innerHTML = "";
    top.appendChild(makeExoSlot(ZONES.topBanner));
  }

  // LEFT AD placeholder: first rail
  const rails = Array.from(document.querySelectorAll(".layout .rail"));
  const leftRail = rails[0]?.querySelector(".ad-slot");
  if(leftRail){
    leftRail.classList.remove("ad-slot");
    leftRail.innerHTML = "";
    leftRail.appendChild(makeExoSlot(ZONES.left));
  }

  // RIGHT AD placeholder: second rail
  const rightRail = rails[1]?.querySelector(".ad-slot");
  if(rightRail){
    rightRail.classList.remove("ad-slot");
    rightRail.innerHTML = "";
    rightRail.appendChild(makeExoSlot(ZONES.right));
  }
}

// Between-ad factory (mid feed)
function makeBetweenAd(){
  const div = document.createElement("div");
  div.className = "between-ad";
  div.appendChild(makeExoSlot(ZONES.between));
  return div;
}

// Extract a chapter number from common title patterns.
// Returns a number; if nothing found returns Infinity so it sinks.
function extractChapterNumber(title){
  const t = (title || "").toLowerCase();

  let m = t.match(/\bchapter\D{0,8}(\d{1,5})\b/);
  if(m) return parseInt(m[1], 10);

  m = t.match(/\bch\D{0,8}(\d{1,5})\b/);
  if(m) return parseInt(m[1], 10);

  m = t.match(/\bvol(?:ume)?\D{0,8}(\d{1,4})\b/);
  if(m) return parseInt(m[1], 10);

  m = t.match(/\b(\d{1,5})\b/);
  if(m) return parseInt(m[1], 10);

  return Infinity;
}

// Parse drive_files.txt lines.
// Supported:
//   FILE_ID | Title
//   FILE_ID
function parseDriveFileText(txt){
  const lines = txt.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
  const items = [];

  for(const line of lines){
    const parts = line.split("|");
    const id = (parts[0] || "").trim();
    const title = parts.slice(1).join("|").trim();

    if(!id) continue;

    items.push({ id, title: title || "" });
  }

  return items;
}

function normalizeTitle(item, index){
  if(item.title && item.title.trim()) return item.title.trim();
  return `Chapter ${index + 1}`;
}

function sortNumerically(items){
  return [...items].sort((a,b) => {
    const an = extractChapterNumber(a.title);
    const bn = extractChapterNumber(b.title);
    if(an !== bn) return an - bn;

    const at = (a.title || "").toLowerCase();
    const bt = (b.title || "").toLowerCase();
    if(at < bt) return -1;
    if(at > bt) return 1;

    return String(a.id||"").localeCompare(String(b.id||""));
  });
}

function filterItems(items, q){
  if(!q) return items;
  const needle = q.toLowerCase();
  return items.filter(it => {
    const hay = `${it.id} ${it.title || ""}`.toLowerCase();
    return hay.includes(needle);
  });
}

function makeCard(item, displayIndex){
  const id = item.id;
  const title = normalizeTitle(item, displayIndex);
  const src = `https://drive.google.com/file/d/${id}/preview`;

  const d = document.createElement("details");

  d.innerHTML = `
    <summary>
      <div class="leftstack">
        <div class="doc">${escapeHtml(title)}</div>
        <div class="id">${escapeHtml(id)}</div>
      </div>

      <div class="actions">
        <span class="pill primary expandPill">EXPAND <span class="chev"></span></span>
        <a class="pill" target="_blank" rel="noopener" href="${src}">OPEN</a>
      </div>
    </summary>

    <div class="content">
      <iframe loading="lazy" src="${src}"></iframe>
    </div>
  `;

  const pill = d.querySelector(".expandPill");
  pill.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    d.open = !d.open;
  });

  return d;
}

function setMeta(text){
  const el = document.getElementById("meta");
  if(el) el.textContent = text || "";
}

async function loadAllItems(){
  const res = await fetch(DATA_FILE, { cache: "no-store" });
  if(!res.ok) throw new Error(`Could not load ${DATA_FILE} (${res.status})`);
  const txt = await res.text();
  return parseDriveFileText(txt);
}

function openFirstVisible(){
  const first = document.querySelector("#container details");
  if(first){
    first.open = true;
    first.scrollIntoView({ behavior:"smooth", block:"start" });
  }
}

async function render(){
  const container = document.getElementById("container");
  if(!container) return;
  container.innerHTML = "";

  const q = (document.getElementById("q")?.value || "").trim();

  try{
    const all = await loadAllItems();
    const filtered = filterItems(all, q);
    const sorted = sortNumerically(filtered);

    setMeta(`${sorted.length.toLocaleString()} result(s) • sorted by extracted chapter number`);

    if(!sorted.length){
      const empty = document.createElement("div");
      empty.className = "ad-slot";
      empty.textContent = "No matches. Try fewer words or just a number (e.g. 12, 203).";
      container.appendChild(empty);
      return;
    }

    sorted.forEach((item, i) => {
      container.appendChild(makeCard(item, i));

      if(AD_EVERY && i < sorted.length - 1 && (i + 1) % AD_EVERY === 0){
        container.appendChild(makeBetweenAd());
      }
    });

    openFirstVisible();

  }catch(err){
    setMeta("");
    const box = document.createElement("div");
    box.className = "ad-slot";
    box.textContent = "Failed to load: " + (err?.message || String(err));
    container.appendChild(box);

    const hint = document.createElement("div");
    hint.className = "ad-slot";
    hint.style.marginTop = "12px";
    hint.textContent = `Make sure ${DATA_FILE} is next to index.html and has lines like: FILE_ID | Title`;
    container.appendChild(hint);
  }
}

function wireUI(){
  const input = document.getElementById("q");
  const clear = document.getElementById("clear");
  const openFirst = document.getElementById("openFirst");

  if(input){
    input.addEventListener("keydown", (e) => {
      if(e.key === "Enter") render();
    });

    input.addEventListener("input", () => {
      clearTimeout(window.__t);
      window.__t = setTimeout(render, 120);
    });
  }

  if(clear){
    clear.addEventListener("click", () => {
      if(input) input.value = "";
      render();
    });
  }

  if(openFirst){
    openFirst.addEventListener("click", () => openFirstVisible());
  }
}

function init(){
  mountFixedAds();   // mounts top/left/right ad zones
  wireUI();          // wires search UI
  render();          // renders list + between ads
}

document.addEventListener("DOMContentLoaded", init);

/*
POPUNDER NOTE:
Popunder isn’t an <ins> slot; it’s that huge script ExoClick gave you.
Keep it as a normal <script> paste near the end of <body> in index.html
(or I can show you how to inject it from JS if you want).
*/
