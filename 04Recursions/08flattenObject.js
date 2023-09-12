"use strict";
function flattenObject(obj, highKey = "", newObj = {}) {
  for (let key in obj) {
    let newKey = highKey ? `${highKey}.${key}` : key;

    if (obj[key] && typeof obj[key] === "object") {
      flattenObject(obj[key], newKey, newObj);
    } else {
      newObj[newKey] = obj[key];
    }
  }
  return newObj;
}

const nestedObject = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
      f: 4,
    },
  },
  g: 5,
};
const flattenedObject = flattenObject(nestedObject);
console.log(flattenedObject); /* {
    "a": 1,
    "b.c": 2,
    "b.d.e": 3,
    "b.d.f": 4,
    "g": 5
   } */
