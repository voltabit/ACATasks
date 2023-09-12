"use strict";

function power(number, pow) {
  if (pow === 0) return 1;
  return number * power(number, pow - 1);
}

console.log(power(2, 32));
