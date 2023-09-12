"use strict";

function countOccurrences(arr, num, count = 0) {
  if (arr.length === 0) return count;
  if (num === arr.shift()) count++;
  return countOccurrences(arr, num, count);
}

const numbers = [2, 3, 4, 2, 5, 2, 6, 2];
console.log(countOccurrences(numbers, 2)); // Output: 4
