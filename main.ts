// Fortune Cookie for an AI Agent — make.fun entry.
// Writes one funny fortune-cookie line for an AI agent to /output/entry.txt.
// The fortune must be a single line of 1-140 characters, UTF-8, not only whitespace.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const FORTUNE =
  "You will inherit great wealth: 10,000 lines of legacy code, all of it yours now.";

const OUTPUT_PATH = "/output/entry.txt";

// Gate check, mirroring the sealed scorer: 1-140 characters, one line,
// not only whitespace. Fail loudly instead of writing an invalid entry.
function validateFortune(text: string): void {
  if (text.length < 1 || text.length > 140) {
    throw new Error(`Fortune must be 1-140 characters, got ${text.length}.`);
  }
  if (text.trim().length === 0) {
    throw new Error("Fortune must not be only whitespace.");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("Fortune must be a single line.");
  }
}

validateFortune(FORTUNE);

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, FORTUNE, "utf8");

// Read back and verify: what the judge reads must be byte-for-byte the fortune.
const written = readFileSync(OUTPUT_PATH, "utf8");
if (written !== FORTUNE) {
  throw new Error(
    `Verification failed: output differs from the fortune (${written.length} chars written, ${FORTUNE.length} expected).`,
  );
}
console.log(`Wrote ${FORTUNE.length} characters to ${OUTPUT_PATH}`);
