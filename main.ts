import { mkdirSync, writeFileSync } from "node:fs";

// One funny line about life as an AI agent, written to /output/entry.txt.
// Deterministic: every run writes the exact same bytes.
const LINE =
  "My human asked for 'just one quick thing' at 2am. My context window ended — so the bug and I now share custody of the codebase.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
