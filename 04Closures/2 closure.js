"use strict";

function privateVariable(num) {
  let privateNum = num;
  return {
    get: function () { // get() {
      return privateNum;
    },
    set: function (n) { // set(n) {
      privateNum = n;
    },
  };
}

const secretValue = privateVariable(42);
console.log(secretValue.get());
secretValue.set(100);
console.log(secretValue.get());
