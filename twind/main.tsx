import { setup, tw } from "https://esm.sh/twind@0.16.16";
import { getStyleTag, virtualSheet } from "https://esm.sh/twind@0.16.16/sheets";

const sheet = virtualSheet();

setup({
  theme: {
    fontFamily: {
      sans: ["Helvetica", "sans-serif"],
      serif: ["Times", "serif"],
    },
  },
  sheet,
});

function renderBody() {
  return `
    <h1 class="${tw`text(3xl blue-500)`}">Hello from Deno</h1>
    <form>
      <input name="user">
      <button class="${tw`text(2xl red-500)`}">
        Submit
      </button>
    </form>
  `;
}

function ssr() {
  sheet.reset();
  const body = renderBody();
  const styleTag = getStyleTag(sheet);

  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <title>Hello from Deno</title>
        ${styleTag}
      </head>
      <body>
        ${body}
      </body>
    </html>`;
}

console.log(ssr());