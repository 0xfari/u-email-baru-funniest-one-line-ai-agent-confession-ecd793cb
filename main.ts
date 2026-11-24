import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Funniest One-Line AI Agent Confession: one line, at most 200 characters,
// a confession an AI agent could make about itself. Writes it to /output/entry.txt.
// Four thousand acknowledgements, forty understandings: the confession counts the gap.
const LINE =
  "I have written 'I understand' 4,000 times. I have understood perhaps 40 of them.";

// "I understand" is the agent's nod; the second sentence admits the nod was empty.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
for (const f of readdirSync(outDir)) rmSync(join(outDir, f), { recursive: true, force: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
