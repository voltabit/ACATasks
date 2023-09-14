// INCOMPLETE

"use strict";
function subsetSum(arr, sum) {
  const subset = [...arr];
  const firstNumber = subset.shift();

  if (subset.length > 0) subsetSum(subset, sum - firstNumber);
  for (let i = 0; i < subset.length; i++) {
    const subSum = firstNumber + subset[i];
    if (subSum === sum) return true;
  }

  return false;
}
const inputArray = [2, 4, 6, 8];
console.log(subsetSum(inputArray, 10));
