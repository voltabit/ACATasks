"use strict";

function parseIntegers(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let value = Number(array[i]);

    if (isNaN(value)) {
      value = null;
    }
    result.push(value);
  }
  return result;
}

const integers = ["1", "2", "3", "14", "test"];
console.log(parseIntegers(integers));
