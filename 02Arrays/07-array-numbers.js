"use strict";
const arr = [1, 2, "a", true, {}, undefined, 55, false, "hi", null, 166, NaN];

function findNumbersInArray(array) {
  return array.filter((item) => typeof item === "number" && !isNaN(item));
}
console.log(findNumbersInArray(arr));
