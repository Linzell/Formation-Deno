/**
 * async_iterator_signal.ts
 */
 import { signal } from "https://deno.land/std@0.140.0/signal/mod.ts";

 const sig = signal("SIGUSR1", "SIGINT");
 
 // Add a timeout to prevent process exiting immediately.
 setTimeout(() => {}, 5000);
 
 for await (const _ of sig) {
   console.log("interrupt or usr1 signal received");
 }