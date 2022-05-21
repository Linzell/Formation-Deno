import { serve } from "https://deno.land/std@0.140.0/http/server.ts";

const server = Deno.listenTls({
  port: 8443,
  certFile: "localhost.crt",
  keyFile: "localhost.key",
  /* alpnProtocols: ["h2", "http/1.1"], */
});