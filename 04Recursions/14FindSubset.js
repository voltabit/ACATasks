// INCOMPLETE

"use strict";
function subsetSum(arr, sum) {
  const subset = [...arr];
  const firstNumber = subset.shift();

  if (subset.length > 0) subsetSum(subset, sum - firstNumber);

  const subSum = firstNumber + su;
  if (subSum === sum) return true;

  return false;
}
const inputArray = [2, 4, 6, 8];
console.log(subsetSum(inputArray, 10));
