"use strict";

let obj = {
  a: {
    b: {
      c: 5,
    },
  },
};
const {a:{b:{c}}} = obj;

console.log(c);
