"use strict";
// Write a function that received callback and set of arguments and calculate the result via callback using closure.

function partial(cb, ...args) {
  return (...newArgs) => cb(...args, ...newArgs);
}

function add(a, b, c) {
  return a + b + c;
}
const add5 = partial(add, 5);
console.log(add5(10, 20));
