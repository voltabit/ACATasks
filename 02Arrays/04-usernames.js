"use strict";

function getUserNames(arr) {
  return arr.map((user) => user.username);
}

const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
  },
  {
    username: "Neil Armstrong",
    lang: "ENG",
  },
];

console.log(getUserNames(users));
