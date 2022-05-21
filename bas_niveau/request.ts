const server2 = Deno.listen({ port: 8080 });

async function handle(conn: Deno.Conn) {
  const httpConn = Deno.serveHttp(conn);
  for await (const requestEvent of httpConn) {
    await requestEvent.respondWith(
      new Response("hello world", {
        status: 200,
      }),
    );
  }
}