// Next.js schreibt in den statischen Export (`output: "export"`, next.config.ts) pro Route
// zusätzlich mehrere .txt-Dateien (`__next.*.txt`, `index.txt`) für das eigene Client-Router-
// Segment-Prefetching. Das ist reine Navigations-Performance (schnelleres Vorladen beim Klick
// auf einen Link) – kein Seiteninhalt, im eigenen Code nirgends referenziert und beim
// statischen Hosting ohne Node-Prozess ohnehin wirkungslos, da der Prefetch-Mechanismus
// serverseitige Revalidierung voraussetzt, die es dort nicht gibt.
//
// Auf dieser Seite sind das ca. 75% aller Export-Dateien (293 → 73). Dieses Skript entfernt
// sie nach jedem Build, ohne dass Seiteninhalte verloren gehen:
// Next.js fällt beim Fehlen der Prefetch-Datei automatisch auf eine normale Vollnavigation
// zurück (Standardverhalten von next/link).
//
// `robots.txt` ist die einzige echte, gewollte .txt-Datei im Export und wird verschont.

import { readdir, rm } from "node:fs/promises";
import { join } from "node:path";

const OUT_DIR = new URL("../out/", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");
const KEEP = new Set(["robots.txt"]);

async function removeTxtFiles(dir) {
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    return;
  }

  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      await removeTxtFiles(full);
      const remaining = await readdir(full).catch(() => null);
      if (remaining && remaining.length === 0) {
        await rm(full, { recursive: true, force: true });
      }
    } else if (entry.name.endsWith(".txt") && !KEEP.has(entry.name)) {
      await rm(full, { force: true });
    }
  }
}

const before = await countFiles(OUT_DIR);
await removeTxtFiles(OUT_DIR);
const after = await countFiles(OUT_DIR);

console.log(`clean-export: ${before} → ${after} Dateien in out/ (Prefetch-.txt entfernt)`);

async function countFiles(dir) {
  let count = 0;
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    return 0;
  }
  for (const entry of entries) {
    if (entry.isDirectory()) {
      count += await countFiles(join(dir, entry.name));
    } else {
      count += 1;
    }
  }
  return count;
}
