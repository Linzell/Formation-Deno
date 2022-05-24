const module2 = await WebAssembly.compileStreaming(
  fetch("https://wpt.live/wasm/incrementer.wasm"),
);

/* do some more stuff */

const instance2 = await WebAssembly.instantiate(module2);
instance2.exports.increment as (input: number) => number;