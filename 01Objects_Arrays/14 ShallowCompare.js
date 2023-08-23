"use strict";

/*
Given two objects. Write a function that performs shallow compare.
*/

const shallowCompare = function (a, b) {
  if (Object.keys(a).length !== Object.keys(b).length) return false;
  else {
    for (let i = 0; i < Object.keys(a).length; i++) {
      if (a[i] !== b[i]) return false; // Does shallow compare mean that value types can be different, thus we should compare using != ?
    }
    return true;
  }
};

console.log(shallowCompare({ a: "1" }, { a: "1" }));
console.log(shallowCompare({ a: "1" }, { a: "1", b: "2" }));
console.log(shallowCompare({}, {}));
