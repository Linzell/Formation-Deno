/**
 * subprocess_simple.ts
 */

// define command used to create the subprocess
const cmd = ["echo", "hello"];

// create subprocess
const p2 = Deno.run({ cmd });

// await its completion
await p2.status();