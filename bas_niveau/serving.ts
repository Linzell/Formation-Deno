const server1 = Deno.listen({ port: 8080 });

while (true) {
  try {
    const conn = await server1.accept();
    (async () => {
      const httpConn = Deno.serveHttp(conn);
      while (true) {
        try {
          const requestEvent = await httpConn.nextRequest();
          // ... handle requestEvent ...
        } catch (err) {
          // the connection has finished
          break;
        }
      }
    })();
  } catch (err) {
    // The listener has closed
    break;
  }
}