const fs = require("fs");
const path = require("path");

const ROOT = process.cwd();
const WORKS_DIR = path.join(ROOT, "works");
const OUTPUT_FILE = path.join(ROOT, "works.json");

function slugToLabel(slug) {
  return slug
    .replace(/[_-]+/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function readWorkTitle(jsonPath, fallbackSlug) {
  try {
    const raw = fs.readFileSync(jsonPath, "utf8");
    const data = JSON.parse(raw);

    if (typeof data.work_title === "string" && data.work_title.trim()) {
      return data.work_title.trim();
    }

    return slugToLabel(fallbackSlug);
  } catch (err) {
    console.error(`Failed reading ${jsonPath}:`, err.message);
    return slugToLabel(fallbackSlug);
  }
}

function main() {
  if (!fs.existsSync(WORKS_DIR)) {
    throw new Error(`Missing works directory: ${WORKS_DIR}`);
  }

  const files = fs.readdirSync(WORKS_DIR)
    .filter((name) => name.toLowerCase().endsWith(".json"))
    .sort((a, b) => a.localeCompare(b));

  const works = files.map((file) => {
    const slug = file.replace(/\.json$/i, "");
    const fullPath = path.join(WORKS_DIR, file);
    const label = readWorkTitle(fullPath, slug);

    return {
      slug,
      label
    };
  });

  const output = {
    works
  };

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(output, null, 2) + "\n", "utf8");
  console.log(`Wrote ${OUTPUT_FILE} with ${works.length} works.`);
}

main();
