"use strict";
/*
Given an object. Invert it (keys become values and values become keys). 
If there are more than one keys for that given value, create an array.
*/

function invertObjectProperties(obj) {
  let result = {};

  for (let key in obj) {
    let value = obj[key];
    if (result.hasOwnProperty(value)) {
      if (Array.isArray(result[value])) {
        result[value].push(key);
      } else {
        result[value] = [result[value], key];
      }
    } else {
      result[value] = key;
    }
  }
  return result;
}

const obj1 = { a: "1", b: "2" };
const obj2 = { a: "1", b: "2", c: "2" };
const obj3 = { a: "1", b: "2", c: "2", d: "2" };

console.log(invertObjectProperties(obj1));
console.log(invertObjectProperties(obj2));
console.log(invertObjectProperties(obj3));
