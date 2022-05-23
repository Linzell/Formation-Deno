const worker = new Worker(new URL("./worker.js", import.meta.url).href, {
  type: "module",
  deno: {
    namespace: true,
  },
});
worker.postMessage({ filename: "./log.txt" });