"use strict";
// Write a function that caches the duplication of result of a calculation using closure.

const cache = {};
function createCachingFunction() {
  return (n) => {
    if (cache[n]) {
      return `Output: ${cache[n]} (cached)`;
    } else {
      let result = n * 2;
      cache[n] = result;
      return `Output: ${result} (calculated)`;
    }
  };
}

const cachedCalculation = createCachingFunction();
console.log(cachedCalculation(5));
console.log(cachedCalculation(5));

console.log(cachedCalculation(7));
console.log(cachedCalculation(6));
console.log(cachedCalculation(7));
console.log(cache);
