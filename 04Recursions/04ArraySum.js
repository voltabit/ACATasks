"use strict";

function arraySum(arr) {
  if (arr.length === 0) return 0;
  return arr.pop() + arraySum(arr);
}
console.log(arraySum([1, 2, 3, 4, 5]));
