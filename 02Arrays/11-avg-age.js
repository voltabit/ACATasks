"use strict";

const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
    age: 56,
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
    age: 54,
  },
];

function calculateAvgAge(array) {
  let ageSum = 0;
  for (let i = 0; i < array.length; i++) {
    ageSum += array[i].age;
  }
  return ageSum / array.length;
}

console.log(calculateAvgAge(users));
