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
  let filteredUsers = [];
  for (let i = 0; i < users.length; i++) {
    if (users[i][field]) filteredUsers.push(users[i]);
  }
  return filteredUsers;
}

console.log(filterByField(users, "isAstronaut"));
