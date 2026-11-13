// ai-joke-03 entry (Node 22, standard library only).
//
// The whole entry is one joke, written to /output/entry.txt: a one-liner about AI coding agents,
// 1 to 280 characters of UTF-8, deterministic across runs (the grader runs the program twice and
// both runs must write the same bytes). No trailing newline: the judge reads exactly the bytes in
// the file.
//
// The joke: a rule of three on the word "take". An agent needs no coffee breaks and no sick days —
// the perk every manager dreams of — and then the third "take" swerves: it doesn't take the
// requirements seriously either, the daily truth every developer who works beside one recognises.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const JOKE =
  "My coding agent doesn't take coffee breaks, doesn't take sick days, and doesn't take the requirements seriously.";

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), JOKE);
