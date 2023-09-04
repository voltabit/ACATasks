"use strict";

const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
    isAstronaut: true,
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
    isAstronaut: true,
  },
  {
    username: "Elon Musk",
    isAstronaut: false,
  },
];

function filterByField(users, field) {
  return users.filter((user) => user.isAstronaut);
}

console.log(filterByField(users, "isAstronaut"));
