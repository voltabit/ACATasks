"use strict";
// Implement a memoization function using closure to cache expensive function calls.

const fiboNums = { 0: 0, 1: 1 };

function fibonacci(n) {
  if (n in fiboNums) return fiboNums[n];
  else {
    let fibo = fibonacci(n - 1) + fibonacci(n - 2);
    fiboNums[n] = fibo;
    return fibo;
  }
}

const memorizedFibonacci = fibonacci;

console.log(memorizedFibonacci(10)); // Output: 55 (calculated)
console.log(memorizedFibonacci(10)); // Output: 55 (cached)

console.log(fiboNums); // print cached fibonacci numbers
