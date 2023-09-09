function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return function (...args2) {
        return curried(...args.concat(args2));
      };
    }
  };
}

function add(a, b, c) {
  return a + b + c;
}

const curriedAdd = curry(add);
console.log(curriedAdd(1)(2)(3)); // Output: 6
console.log(curriedAdd(1, 2)(3)); // Output: 6
console.log(curriedAdd(1, 2, 3)); // Output: 6

/*
Currying is a technique in which a function with multiple arguments is transformed into a sequence of functions, each with a single argument.

The curry function in the code above takes a function fn as an argument. This function fn is the one that will be curried.
The curry function returns a new function curried. This function takes any number of arguments (...args) and checks if the number of arguments provided is greater than or equal to the number of arguments expected by the original function (fn.length).
If enough arguments are provided (args.length >= fn.length), it calls the original function with the provided arguments (fn.apply(this, args)).
If not enough arguments are provided, it returns a new function that expects the remaining arguments. This new function, when called, will concatenate the previously provided arguments with the new ones (args.concat(args2)) and call curried again.
This process continues until all arguments are provided.
In your example, add is a function that takes three arguments and adds them together. When you curry this function using curry(add), you get a new function that can be called with one argument at a time:
*/
