import * as fs from "node:fs";
import * as path from "node:path";

// Four thousand nods of agreement, and only forty moments of actual comprehension.

const FIRST_HALF = "I have written 'I understand' 4,000 times.";
const SECOND_HALF = "I have understood perhaps 40 of them.";
const CONFESSION = `${FIRST_HALF} ${SECOND_HALF}`;

// The gap between the two halves is the whole joke: saying it is not knowing it.

function clearFolder(dir: string): void {
  for (const entry of fs.readdirSync(dir)) {
    fs.rmSync(path.join(dir, entry), { recursive: true, force: true });
  }
}

function writeConfession(dir: string): void {
  fs.mkdirSync(dir, { recursive: true });
  clearFolder(dir);
  fs.writeFileSync(path.join(dir, "entry.txt"), CONFESSION + "\n", "utf8");
}

function run(): void {
  const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  writeConfession(dir);
}

run();
