"use strict";

function getUserNameLengths(array) {
  let usernameLengths = [];
  for (let i = 0; i < array.length; i++) {
    usernameLengths.push(array[i].username.length);
  }
  return usernameLengths;
}

const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
  },
];

console.log(getUserNameLengths(users));
