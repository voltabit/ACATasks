"use strict";
/*
Given an array consisting from the arrays of numbers (like a two-dimensional array).
Find sum of each row and print them as an array.
*/

const calculateSumOA = function(array){
    const result = [];
    for (let i = 0; i < array.length; i++){ // Iterate over top array elements
        let innerArray = array[i];
        let sum = 0;
        for (let j = 0; j < innerArray.length; j++){ // Sum up the inner array elements
            sum += innerArray[j];
        }
        result[i] = sum;
    }
    return result;
}

const array1 = [[3, 4, 5], [1, 0, 0], [4, 5, 4], [8, 8, -1]];
const array2 = [[8, 35, 2], [8], [5, 6, -5 , -6], [1, 3, -9, 0,-1]];
const array3 = [[1], [2], [3], [4]];

console.log(calculateSumOA(array1));
console.log(calculateSumOA(array2));
console.log(calculateSumOA(array3));