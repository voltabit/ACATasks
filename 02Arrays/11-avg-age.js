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
  return (
    array
      .map((item) => item.age)
      .reduce((accumulator, age) => accumulator + age, 0) / array.length
  );
}

console.log(calculateAvgAge(users));
