"use strict";
/*
Given an array of a size smaller than 100. It consists of numbers from 0 to 99 in any order. Create a
new array where each element from that array is placed under the index of its value. Start from the
smallest value and end with the biggest one. If there are missing values, put in its places undefined.
Input           Output
[4, 3, 0, 9] [0, undefined, undefined, 3, 4, undefined, undefined, undefined, undefined, 9]
[26, 30, 19, 5] [5, undefined x 13, 19, undefined x 4, 26, undefined x 3 ]
undefined x 13 - means undefined 13 times.
*/

const formatArray = function (array) { // Takes an array of nummbers and returns them sorted according to their values
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result[array[i]]=array[i];
    }
    return result;
}

const displayArrayValues = function (array) { // Creates a string and formats it according to the requirements specified
    let result = "[";
    for (let i=0; i<array.length; i++) { // Iterates over the initial undefined values
        if (array[i] === undefined) continue; // Drops the initial undefined values
        else for (let j = i; j < array.length; j++) {
            if (array[j] === undefined) result += `undefined, `;
            else result += `${array[j]}, `;
            if (j === array.length-1) {
                result = result.slice(0, -2);
                result += `]`;
                break;
            }
        }
        break;
    }
    return result;
}

const inputArray1 = [4, 3, 0, 9];
const inputArray2 = [26, 30, 19, 5];

console.log(displayArrayValues(formatArray(inputArray1)));