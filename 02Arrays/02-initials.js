"use strict";
const input1 = "Prisoner of War"; // POW
const input2 = "Have a good night"; // HAGN

function initialsOnly(input) {
  let words = input.split(" ");
  let initials = "";
  for (const word of words) {
    initials += word.charAt(0).toUpperCase();
  }
  return initials;
}

console.log(initialsOnly(input2));
