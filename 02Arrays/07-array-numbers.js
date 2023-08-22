"use strict";
const arr = [1, 2, "a", true, {}, undefined, 55, false, "hi", null, 166, NaN];

function findNumbersInArray(array) {
  let arrayOfNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    if (isNaN(array[i])) continue;
    if (typeof array[i] === "number") arrayOfNumbers.push(array[i]);
  }
  return arrayOfNumbers;
}

console.log(findNumbersInArray(arr));
