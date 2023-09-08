"use strict";
// Implement a simple person object with private properties using closures.
function createPerson(name, age) {
  let _name = name;
  let _age = age;
  return {
    getName: function () {
      return _name;
    },
    setName: function (name) {
      _name = name;
    },
    getAge: function () {
      return _age;
    },
    setAge: function (age) {
      _age = age;
    },
  };
}
const person = createPerson("Alice", 30);
console.log(person.getName()); // Output: "Alice"
console.log(person.getAge()); // Output: 30
person.setName("Bob");
person.setAge(25);
console.log(person.getName()); // Output: "Bob"
console.log(person.getAge()); // Output: 25
