"use strict";

generateCombinations(array, size){
    result = [];

    function combi(arr, start, depth, currentCombination){
        if (depth === 0){
            result.push(...currentCombination);
        }

        for(let i=start; i<=depth-1; i++){}
}
}

const inputArray = [1, 2, 3, 4];
console.log(generateCombinations(inputArray, 2));