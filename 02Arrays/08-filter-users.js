"use strict";
function filterRussianUsers(arrayOfUsers) {
  let filteredUsers = [];
  for (let user of arrayOfUsers) {
    if (user.lang === "ru") continue;
    else filteredUsers.push(user);
  }
  return filteredUsers;
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

console.log(filterRussianUsers(users));
