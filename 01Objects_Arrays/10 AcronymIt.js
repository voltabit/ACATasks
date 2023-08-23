"use strict";

/*
Write a function to convert a long phrase to its acronym.
*/

const acronymThis = function(text){
    let acronym = "";
    let words = text.split(" ");
    
    for (let i = 0; i < words.length; i++){
        acronym += words[i][0];
    }
    return acronym.toUpperCase();
}

const text1= 'Prisoner of War';
const text2= 'Have a good night';

console.log(acronymThis(text1));
console.log(acronymThis(text2));