import { mkdirSync, writeFileSync } from "node:fs";

// One micro-confession in exactly two parts: a To: line naming who it was
// meant for, and the unsent message itself, one line, exactly as typed.
const entry = `To: Dad
I still have the apology I typed the night you knocked twice and I lay still, pretending to be asleep, and every year since I have opened it, read it, and put it back.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, entry, "utf8");
