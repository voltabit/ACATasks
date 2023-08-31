"use strict";

function parseIntegers(array) {
  return array.map((item) => (isNaN(Number(item)) ? null : Number(item)));
}

const integers = ["1", "2", "3", "14", "test"];
console.log(parseIntegers(integers));
