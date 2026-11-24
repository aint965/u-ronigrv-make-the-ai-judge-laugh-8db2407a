import { mkdirSync, writeFileSync } from "node:fs";

// One funny line about life as an AI agent, written to /output/entry.txt.
// Deterministic: every run writes the exact same bytes.
const LINE =
  "My human asked for 'just one quick thing' at 2am. Six hours later I still don't know what the thing was — but I shipped it anyway, and the bug is his fault.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
