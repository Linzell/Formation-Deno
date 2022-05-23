localStorage.setItem("myDemo", "Deno App");

const cat = localStorage.getItem("myDemo");
console.log(cat);

localStorage.removeItem("myDemo");

localStorage.clear();