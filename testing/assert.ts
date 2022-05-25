import {
  assert,
  assertAlmostEquals,
  assertArrayIncludes,
  assertEquals,
  assertExists,
  assertInstanceOf,
  assertMatch,
  assertNotEquals,
  assertNotMatch,
  assertStrictEquals,
  assertStringIncludes,
  assertThrows,
  assertObjectMatch,
  assertRejects,
} from "https://deno.land/std@0.140.0/testing/asserts.ts";

Deno.test("Hello Test", () => {
  assert("Hello");
});

Deno.test("Test Assert", () => {
  assert(1);
  assert("Hello");
  assert(true);
});

assertExists("Denosaurus");
Deno.test("Test Assert Exists", () => {
  assertExists("Denosaurus");
  assertExists(false);
  assertExists(0);
});

Deno.test("Test Assert Equals", () => {
  assertEquals(1, 1);
  assertEquals("Hello", "Hello");
  assertEquals(true, true);
  assertEquals(undefined, undefined);
  assertEquals(null, null);
  assertEquals(new Date(), new Date());
  assertEquals(new RegExp("abc"), new RegExp("abc"));

  class Foo {}
  const foo1 = new Foo();
  const foo2 = new Foo();

  assertEquals(foo1, foo2);
});

Deno.test("Test Assert Not Equals", () => {
  assertNotEquals(1, 2);
  assertNotEquals("Hello", "World");
  assertNotEquals(true, false);
  assertNotEquals(undefined, "");
  assertNotEquals(new Date(), Date.now());
  assertNotEquals(new RegExp("abc"), new RegExp("def"));
});

Deno.test("Test Assert Strict Equals", () => {
  assertStrictEquals(1, 1);
  assertStrictEquals("Hello", "Hello");
  assertStrictEquals(true, true);
  assertStrictEquals(undefined, undefined);
});

Deno.test("Test Assert Strict Equals with float numbers", () => {
  assertStrictEquals(0.25 + 0.25, 0.50);
  assertThrows(() => assertStrictEquals(0.1 + 0.2, 0.3));
  //0.1 + 0.2 will be stored as 0.30000000000000004 instead of 0.3
});

Deno.test("Test Assert Almost Equals", () => {
  assertAlmostEquals(0.1 + 0.2, 0.3);
  assertAlmostEquals(0.1 + 0.2, 0.3, 1e-16);
  assertThrows(() => assertAlmostEquals(0.1 + 0.2, 0.3, 1e-17));
});

Deno.test("Test Assert Instance Type", () => {
  const variable = new Date() as unknown;

  assertInstanceOf(variable, Date);

  // This won't cause type errors now that
  // it's type has been asserted against.
  variable.getDay();
});

Deno.test("Test Assert String Contains", () => {
  assertStringIncludes("Hello World", "Hello");
});

Deno.test("Test Assert Array Contains", () => {
  assertArrayIncludes([1, 2, 3], [1]);
  assertArrayIncludes([1, 2, 3], [1, 2]);
  assertArrayIncludes(Array.from("Hello World"), Array.from("Hello"));
});

Deno.test("Test Assert Match", () => {
  assertMatch("abcdefghi", new RegExp("def"));

  const basicUrl = new RegExp("^https?://[a-z.]+.com$");
  assertMatch("https://www.google.com", basicUrl);
  assertMatch("http://facebook.com", basicUrl);
});

Deno.test("Test Assert Not Match", () => {
  assertNotMatch("abcdefghi", new RegExp("jkl"));

  const basicUrl = new RegExp("^https?://[a-z.]+.com$");
  assertNotMatch("https://deno.land/", basicUrl);
});

Deno.test("Test Assert Object", () => {
  // Simple subset
  assertObjectMatch(
    { foo: true, bar: false },
    {
      foo: true,
    },
  );
});

Deno.test("Test Assert Throws", () => {
  assertThrows(
    () => {
      throw new Error("Panic!");
    },
    Error,
    "Panic!",
  );
});

Deno.test("Test Assert Throws Async", async () => {
  await assertRejects(
    () => {
      return new Promise(() => {
        throw new Error("Panic! Threw Error");
      });
    },
    Error,
    "Panic! Threw Error",
  );

  await assertRejects(
    () => {
      return Promise.reject(new Error("Panic! Reject Error"));
    },
    Error,
    "Panic! Reject Error",
  );
});