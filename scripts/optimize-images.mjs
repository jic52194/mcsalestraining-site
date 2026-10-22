// One-time image optimizer: node scripts/optimize-images.mjs <dir with the originals downloaded from the live site>
// Writes responsive WebP files (and the favicon / touch icon) into static/img and static/. Originals are not committed.
import sharp from "sharp";
import { join } from "node:path";
const SRC = process.argv[2];
if (!SRC) { console.error("usage: node scripts/optimize-images.mjs <source dir>"); process.exit(1); }
const OUT = new URL("../static/img/", import.meta.url).pathname;
const STATIC = new URL("../static/", import.meta.url).pathname;
const JOBS = [
  ["logo.png", "logo", [96, 192, 500]],
  ["mark.png", "mark-casper", [480, 800]],
  ["jared.png", "jared-casper", [480, 800]],
  ["dnn.png", "daily-non-negotiables-preview", [768, 1200]],
  ["minibook.png", "mini-book-preview", [768, 1200]],
  ["wordtracks.png", "word-tracks-preview", [480, 800]],
  ["hero-bg.jpeg", "hero-bg", [960, 1600]],
];
for (const [file, name, widths] of JOBS) {
  for (const w of widths) {
    const info = await sharp(join(SRC, file)).resize({ width: w, withoutEnlargement: true }).webp({ quality: name === "hero-bg" ? 55 : 78 }).toFile(join(OUT, `${name}-${w}.webp`));
    console.log(`${name}-${w}.webp ${info.width}x${info.height} ${(info.size / 1024).toFixed(0)}KB`);
  }
}
await sharp(join(SRC, "logo.png")).resize(180, 180).png({ compressionLevel: 9 }).toFile(join(STATIC, "apple-touch-icon.png"));
await sharp(join(SRC, "logo.png")).resize(48, 48).png({ compressionLevel: 9 }).toFile(join(STATIC, "favicon.png"));
await sharp(join(SRC, "logo.png")).resize(500, 500).png({ compressionLevel: 9, palette: true }).toFile(join(OUT, "logo-500.png"));
