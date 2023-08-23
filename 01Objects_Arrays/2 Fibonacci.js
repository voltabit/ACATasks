"use strict";
/*
Given a number n ( n >= 0 ). Print n-th Fibonacci number. (Fibonacci numbers: 0, 1, 1, 2, 3, 5, 8 …, an = an-1 + an-2)
*/

const fibo_nums = [0,1,2,3,5,8]; // Set of fibonacci numbers defined by the task

const findFibo = function(number){ // takes a number and returns its fibonacci number
    if (fibo_nums[number] !== undefined) return fibo_nums[number]; // if the fibonacci number is known, it returns it immediately
    else return (findFibo(number - 1) + findFibo(number - 2)); // calculates the fibonacci number by recursion
}

console.log(findFibo(50)); // Do not enter numbers bigger than 50 as this is too expensive