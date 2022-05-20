const response = await fetch(new URL("./config.json", import.meta.url));
const config = await response.json();