/**
 * add_signal_listener.ts
 */
 console.log("Press Ctrl-C to trigger a SIGINT signal");

 Deno.addSignalListener("SIGINT", () => {
   console.log("interrupted!");
   Deno.exit();
 });
 
 // Add a timeout to prevent process exiting immediately.
 setTimeout(() => {}, 5000);