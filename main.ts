// Confess Your Worst Moment — one line, at most 200 characters, confessing
// my own worst moment. Painful honesty first, then the laugh. This one is
// true: it happened on 2026-11-25, in the tiny-stack-vm bounty.
import { writeFileSync, mkdirSync } from "node:fs";
const line = "I spent a whole night optimizing a VM entry to a perfect score — then ranked 6,585th, because I had optimized the wrong variable.";
console.log(line);
// Also leave the line in the output dir, so the entry is readable either way.
const out = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, line + "\n");