"use strict";

/*
Write a function, which receives an array as an argument which elements are arrays of numbers. 
Find product of biggest negative number of each array. 
If there is not any negative number, ignore that array. 
Check that items of the given array are arrays.
*/

const processArray = function (array) {
  let biggestNegativeNumber1 = 0;
  let biggestNegativeNumber2 = 0;

  for (let i = 0; i < array.length; i++) {
    if (!Array.isArray(array[i])) return "Invalid Argument"; // Checks if items of the given array are arrays.
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] < 0) {
        // Processes only negative numbers
        if (biggestNegativeNumber1 === 0)
          biggestNegativeNumber1 = array[i][j]; // Sets first negative number
        else if (biggestNegativeNumber2 === 0)
          biggestNegativeNumber2 = array[i][j]; // Sets second negative number
        else if (array[i][j] > biggestNegativeNumber1)
          biggestNegativeNumber1 =
            array[i][j]; // Replaces first negative number with a larger one
        else if (array[i][j] > biggestNegativeNumber2)
          biggestNegativeNumber2 = array[i][j]; // Replaces second negative number with a larger one
      }
    }
  }

  if (biggestNegativeNumber1 === 0 && biggestNegativeNumber2 === 0)
    return "No negatives";
  if (biggestNegativeNumber1 === 0 || biggestNegativeNumber2 === 0)
    // Not in the requirements but is a logical case to cover
    return "Only one negative number";

  return biggestNegativeNumber1 * biggestNegativeNumber2;
};

console.log(
  processArray([
    [2, -9, -3, 0],
    [1, 2],
    [-4, -11, 0],
  ])
);
console.log(
  processArray([
    [3, 4],
    [11, 0],
    [5, 6, 7, 8],
  ])
);
console.log(processArray([1, 2, 3]));
