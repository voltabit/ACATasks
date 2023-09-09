"use strict";
// create a counter function using closure that increments a count every time it's called
function createCounter() {
  let count = 0;
  return function () {
    count += 1;
    return count;
  };
}

const counter = createCounter();
console.log(counter(), counter(), counter());
