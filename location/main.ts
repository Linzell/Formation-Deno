// deno run --location https://example.com/path main.ts

console.log(location.href);
// "https://example.com/path"

// deno run main.ts

console.log(location.href);
// error: Uncaught ReferenceError: Access to "location", run again with --location <href>.

// deno run --location https://example.com/path main.ts

location.pathname = "./foo";
// error: Uncaught NotSupportedError: Cannot set "location.pathname".

// deno run --location https://api.github.com/ --allow-net main.ts

const response = await fetch("./orgs/denoland");
// Fetches "https://api.github.com/orgs/denoland".

// deno run --location https://example.com/index.html --allow-net main.ts

const worker = new Worker("./workers/hello.ts", { type: "module" });
// Fetches worker module at "https://example.com/workers/hello.ts".