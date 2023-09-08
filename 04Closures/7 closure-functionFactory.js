// Create a function factory that generates functions for different operations.
function createCalculator(operation) {
  switch (operation) {
    case "add":
      return function add(x, y) {
        return x + y;
      };
    case "subtract":
      return function subtract(x, y) {
        return x - y;
      };
    case "multiply":
      return function multiply(x, y) {
        return x * y;
      };
    case "divide":
      return function divide(x, y) {
        if (y === 0) throw new Error("Division by zero!");
        return x / y;
      };
    default:
      return () => "Specify an operation";
  }
}

const add = createCalculator("add");
console.log(add(3, 5)); // Output: 8
const multiply = createCalculator("multiply");
console.log(multiply(2, 4)); // Output: 8
const divide = createCalculator("divide");
console.log(divide(4, 0));
