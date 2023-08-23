"use strict";
/*
Write a program to check the validity of password input by users. Validation :
    At least 1 letter between [a-z] and 1 letter between [A-Z].
    At least 1 number between [0-9].
    At least 1 character from [$#@].
    Minimum length 6 characters.
    Maximum length 16 characters.
*/

const checkPasswordValidity = function (password) {
  if (password.length < 6 || password.length > 16) return "Invalid"; // check password length

  let hasUppercase = false;
  let hasLowercase = false;
  let hasNumeral = false;
  let hasSymbol = false;

  for (let i = 0; i < password.length; i++) {
    if (password[i] === "$" || password[i] === "#" || password[i] === "@")
      hasSymbol = true;
    if (password.charCodeAt(i) > 47 || password.charCodeAt(i) < 58) hasNumeral = true;
    if (password.charCodeAt(i) > 64 || password.charCodeAt(i) < 91)
      hasUppercase = true;
    if (password.charCodeAt(i) > 96 || password.charCodeAt(i) < 123)
      hasLowercase = true;
  }

  if (hasUppercase && hasLowercase && hasNumeral && hasSymbol) return "Valid";
  else return "Invalid";
};

const password1 = "12asdf";
const password2 = "Aaza1234566#";

console.log(`${password1} is ` + checkPasswordValidity(password1));
console.log(`${password2} is ` + checkPasswordValidity(password2));
