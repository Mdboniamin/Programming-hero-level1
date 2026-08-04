function greet(name) {
  console.log("Hello, " + name);
}

function processUser(callback) {
  const name = "Alice";
  callback(name); // processUser calls it, not you
}

processUser(greet); // "Hello, Alice"