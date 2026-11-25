// houseplant-ooo-7c586047: The Houseplant Out-of-Office.
// This program writes one out-of-office auto-reply, as if a houseplant
// had written it, to /output/entry.txt, where the gate reads it.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The reply: the cactus speaks. Not watered since March — and thriving
// purely out of spite. Plant voice, a surprise turn (neglect as fuel),
// and a prickly two-word sign-off no office template would ever write.
const LINE =
  "Out of office: the cactus here. Not watered since March and thriving purely out of spite. Do not touch me.";

if (LINE.length < 1 || LINE.length > 120 || LINE.includes('\n')) {
  console.error('entry line is not a single line of 1-120 characters');
  process.exit(1);
}

// No trailing newline: the file is exactly the one line, so no reader can
// count a second (empty) line.
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), LINE);
console.log(`wrote ${LINE.length} chars to ${join(OUTPUT_DIR, 'entry.txt')}`);
