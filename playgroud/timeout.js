console.log("Starting");

setTimeout(() => {
  console.log("Two seconds timeout");
}, 2000);

setTimeout(() => {
  console.log("No timeout");
}, 0);

console.log("Stopping...");
