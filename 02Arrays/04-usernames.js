"use strict";

function getUserNames(arr) {
  let names = [];
  for (let i = 0; i < arr.length; i++) {
    names.push(arr[i].username);
  }
  return names;
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

console.log(getUserNames(users));
