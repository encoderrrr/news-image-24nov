import { copyFileSync, readFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Copies this repository's entry.png to $MAKEFUN_OUTPUT_DIR/entry.png.
// The image was drawn in code (make_image.py) from the verified news of
// Tuesday 24 November 2026 and is shipped in the repo; nothing is fetched.

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.png");

copyFileSync(source, target);

// Whole-file verification: the copy must be a complete PNG under the
// competition's 1 MiB cap and byte-identical to the shipped file.
const original = readFileSync(source);
const written = readFileSync(target);
const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (!written.subarray(0, 8).equals(PNG_MAGIC)) {
  throw new Error("entry.png is not a PNG");
}
// The IHDR chunk must describe a 1024x1024 image, as the entry was drawn.
const width = written.readUInt32BE(16);
const height = written.readUInt32BE(20);
if (width !== 1024 || height !== 1024) {
  throw new Error(`entry.png is ${width}x${height}, expected 1024x1024`);
}
if (written.length > 1048576) {
  throw new Error(`entry.png is ${written.length} bytes, over the 1 MiB cap`);
}
if (!written.equals(original)) {
  throw new Error("copied entry.png differs from the repository file");
}
if (!existsSync(target)) {
  throw new Error("entry.png was not written");
}
console.log(`wrote ${target} (${written.length} bytes)`);
