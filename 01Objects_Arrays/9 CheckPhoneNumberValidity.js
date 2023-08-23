"use strict";
/*
Given a phone number. Write a function to clean it up, so it is valid. The rules are as follows:
   A) If the phone number is less than 10 and longer than 10 digits assume that it is a bad number
   B) If the phone number consists of 11 symbols and the first one is + and others are numbers, then trim + and return remaining 10 digits.
   C) If the phone number contains + symbol more than one, consider it as a bad number.
   D) If the phone number contains + symbol not as the first character, consider it as a bad number.
Ignore spaces between digits.
*/

const checkPhoneNumber = function (phoneNumber) {
  let cleanedNumber = "";
  for (let i = 0; i < phoneNumber.length; i++) {
    if (phoneNumber[i] === " ") continue;
    if (i > 0 && phoneNumber[i] === "+") return "Bad number"; // C & D
    cleanedNumber += phoneNumber[i];
  }
  if (cleanedNumber[0] === "+") cleanedNumber = cleanedNumber.slice(1); // B
  if (cleanedNumber.length !== 10) return "Bad number"; // A
  return cleanedNumber;
};

console.log(checkPhoneNumber("455678"));
console.log(checkPhoneNumber("339 5656888"));
console.log(checkPhoneNumber("+0008989562"));
console.log(checkPhoneNumber("45231489562"));
console.log(checkPhoneNumber("123+2356897452"));
