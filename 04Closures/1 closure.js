"use strict";
// create a counter function using closure that increments a count every time it's called

let count = 0;

function counter() {
  return ++count;
}

console.log(counter(), counter(), counter());
