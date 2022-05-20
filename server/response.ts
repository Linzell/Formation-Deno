import { serve } from "https://deno.land/std@0.140.0/http/server.ts";

function handler(req: Request): Response {
  let timer: number;
  const body = new ReadableStream({
    async start(controller) {
      timer = setInterval(() => {
        controller.enqueue("Hello, World!\n");
      }, 1000);
    },
    cancel() {
      clearInterval(timer);
    },
  });
  return new Response(body.pipeThrough(new TextEncoderStream()), {
    headers: {
      "content-type": "text/plain; charset=utf-8",
    },
  });
}

// To listen on port 4242.
serve(handler, { port: 4242 });