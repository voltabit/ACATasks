"use strict";

/* 
Enter a positive number. 
Calculate and print its factorial. 
( n! = n _ (n-1) _ (n-2) _ … _ 3 _ 2 _ 1 , 0! = 1)
*/

const factorial = function(number){
    let result = 1;
    for (let i = 1; i <= number; i++){
        result *= i;
    }
    return result;
}

console.log(factorial(5));
console.log(factorial(1));
console.log(factorial(7));