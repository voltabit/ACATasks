"use strict";
/*
Convert base-2 number to base-10
*/

const convertBin2Dec = function (binaryNumber) { // Takes a binary number as a string and converts it to base-10
  let result = 0;
  for (let i = binaryNumber.length-1; i >= 0; i--) {
    if (binaryNumber[i] === "1") result += Math.pow(2, binaryNumber.length-i-1);
  }
  return result;
};

const bin1 = "010"; // 2
const bin2 = "10010"; // 18
const bin3 = "0101011"; // 43

console.log(convertBin2Dec(bin1));
console.log(convertBin2Dec(bin2));
console.log(convertBin2Dec(bin3));
