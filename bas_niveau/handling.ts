const server = Deno.listen({ port: 8080 });

while (true) {
  try {
    const conn = await server.accept();
    // ... handle the connection ...
  } catch (err) {
    // The listener has closed
    break;
  }
}