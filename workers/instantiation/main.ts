new Worker(new URL("./worker.ts", import.meta.url).href, { type: "module" });

new Worker("https://example.com/worker.ts", { type: "module" });