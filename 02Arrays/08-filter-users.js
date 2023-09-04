"use strict";
function filterRussianUsers(arrayOfUsers) {
  return arrayOfUsers.filter((item) => item.lang !== "ru");
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
