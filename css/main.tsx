import * as css from "https://esm.sh/css@3.0.0";
import { assert } from "https://deno.land/std@0.132.0/testing/asserts.ts";

declare global {
  interface AbortSignal {
    reason: unknown;
  }
}

const ast = css.parse(`
body {
  background: #eee;
  color: #888;
}
`);

assert(ast.stylesheet);
const body = ast.stylesheet.rules[0] as css.Rule;
assert(body.declarations);
const background = body.declarations[0] as css.Declaration;
background.value = "white";

console.log(css.stringify(ast));