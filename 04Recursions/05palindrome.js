"use strict";

function checkPalindrome(str) {
  if (str.length <= 1) return true;
  if (str.slice(0, 1 - str.length) !== str.slice(-1)) return false;
  return checkPalindrome(str.substr(1, str.length - 2));
}
console.log(checkPalindrome("saippuakivikauppias")); // Finnish: Soap seller
