// using recursion calculate the sum of numerical values in the object

function calcSum(obj) {
  let sum = 0;

  for (const key in obj) {
    if (typeof obj[key] === "number") {
      sum += obj[key];
    }
    if (typeof obj[key] === "object") {
      sum += calcSum(obj[key]);
    }
  }
  return sum;
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
console.log(calcSum(nestedObject));
