import { serveTls } from "https://deno.land/std@0.140.0/http/server.ts";

function handler(req: Request): Response {
  const upgrade = req.headers.get("upgrade") || "";
  let response, socket: WebSocket;
  try {
    ({ response, socket } = Deno.upgradeWebSocket(req));
  } catch {
    return new Response("request isn't trying to upgrade to websocket.");
  }
  socket.onopen = () => console.log("socket opened");
  socket.onmessage = (e) => {
    console.log("socket message:", e.data);
    socket.send(new Date().toString());
  };
  socket.onerror = (e) => console.log("socket errored:", e);
  socket.onclose = () => console.log("socket closed");
  return response;
}

// To listen on port 443.
serveTls(handler, {
  port: 443,
  certFile: "./cert.pem",
  keyFile: "./key.pem",
});