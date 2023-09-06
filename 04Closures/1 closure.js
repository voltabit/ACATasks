"use strict";
// closure is the ability of the function to get access to variables of the scope to which its parent belongs
// create a counter function using closure that increments a count every time it's called

let count = 0;

function counter() {
  return ++count;
}

console.log(counter(), counter(), counter());
