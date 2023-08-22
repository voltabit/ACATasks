"use strict";

const numbers = [12, 1, 65, 12, 3];

function sortNumbers(array, order) {
  let result = [];
  switch (order) {
    case "Asc":
      {
        result = array.sort(function (a, b) {
          return a - b;
        });
      }
      break;
    case "Desc": {
      result = array.sort(function (a, b) {
        return b - a;
      });
    }
  }
  return result;
}

console.log(sortNumbers(numbers, "Asc"));
console.log(sortNumbers(numbers, "Desc"));
