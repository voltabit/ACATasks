"use strict";

const arr = [1, 22, 55, 166, 5, 366, 11, 205, 333, 95, 62, 10, 43];

function filteredSum(array) {
  return array
    .filter((number) => number >= 18)
    .reduce((accumulator, number) => accumulator + number, 0);
}

console.log(filteredSum(arr));
