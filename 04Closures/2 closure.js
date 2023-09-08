"use strict";
//  Implement a function that returns an object with methods to get and set a private variable.

function privateVariable(number) {
  let privateNum = number;
  return {
    get: function () {
      return privateNum;
    },
    set: function (num) {
      privateNum = num;
    },
  };
}

const secretValue = privateVariable(42);
console.log(secretValue.get()); // Output: 42
secretValue.set(100);
console.log(secretValue.get()); // Output: 100
