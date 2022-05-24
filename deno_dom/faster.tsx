import {
  DOMParser,
  initParser,
} from "https://deno.land/x/deno_dom@v0.1.30-alpha/deno-dom-wasm-noinit.ts";

(async () => {
  // initialize when you need it, but not at the top level
  await initParser();

  const doc = new DOMParser().parseFromString(
    `<h1>Lorem ipsum dolor...</h1>`,
    "text/html",
  );
})();