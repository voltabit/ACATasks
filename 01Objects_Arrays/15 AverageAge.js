"use strict";

/*
Write a function which calculator average age of user.
Use the reduce method.
*/

const getAverageAge = function (usersArray) {
  let ageSum = 0;
  usersArray.forEach((user) => {
    ageSum += user.age;
  });
  return ageSum / usersArray.length;
};

const users = [
  {
    name: "John Doe",
    age: 30,
    isAdmin: false,
  },
  {
    name: "Jane Smith",
    age: 25,
    isAdmin: true,
  },
  {
    name: "Bob Johnson",
    age: 40,
    isAdmin: false,
  },
];

console.log(getAverageAge(users));
