"use strict";
function sumOfDigits(number, sum = 0) {
  if (number === 0) return sum;
  let digit = number % 10;
  let newNumber = Math.floor(number / 10);
  return sumOfDigits(newNumber, sum + digit);
}

console.log(sumOfDigits(12345)); // Output: 15
