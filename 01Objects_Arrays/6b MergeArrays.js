"use strict";

/*
Takes two arrays and insert the second array in the middle of the first array.
The first array always has two elements.
*/

// Using the push() method

const mergeArrays = function (array1, array2) {
    let result = [];

    result.push(array1[0]);
    for (let i = 0; i < array2.length; i++){
        result.push(array2[i]);
    }
    result.push(array1[1]);
    return result;
}

const arrayA1 = [1, 10];
const arrayA2 = [2, 3, 4, 5, 6, 7, 8, 9];
const arrayB1 = [15, 150];
const arrayB2 = [45, 75, 35];
const arrayC1 = [[1, 2], [5, 6]];
const arrayC2 = [[3, 4]];

console.log(mergeArrays(arrayA1, arrayA2));
console.log(mergeArrays(arrayB1, arrayB2));
console.log(mergeArrays(arrayC1, arrayC2));