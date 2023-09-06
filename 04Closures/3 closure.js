"use strict";

// Write a function that caches the duplication of result of a calculation using closure.

const cachedCalculation = createCachingFunction();
console.log(cachedCalculation(5)); // Output: 10 (calculated)
console.log(cachedCalculation(5)); // Output: 10 (cached)
