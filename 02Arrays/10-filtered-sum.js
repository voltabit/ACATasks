"use strict";

const arr = [1, 22, 55, 166, 5, 36, 11, 205, 333, 95, 62, 10, 43];

function filteredSum(array) {
  let sum = 0;
  for (let num in array) {
    if (array[num] > 18) sum += array[num];
  }
  return sum;
}

console.log(filteredSum(arr));
