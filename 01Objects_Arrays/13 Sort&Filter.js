"use strict";

/*
Output the books sorted by the percent in descending order which readStatus is true.
*/

const readProgress = [
    { book: "Catcher in the Rye", readStatus: true, percent: 40 },
    { book: "Animal Farm", readStatus: true, percent: 20 },
    { book: "Solaris", readStatus: false, percent: 90 },
    { book: "The Fall", readStatus: true, percent: 50 },
    { book: "White Nights", readStatus: false, percent: 60 },
    { book: "After Dark", readStatus: true, percent: 70 },
   ];

readProgress.sort((a, b) =>{
    return a.percent - b.percent;
});

readProgress.forEach((e) => {
    console.log(`${e.percent}% \t ${e.book}`);
});