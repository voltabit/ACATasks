// Write a JavaScript function that takes a start year and an end year as input and calculates the
// total number of days in the range of years (inclusive). This should account for leap years.

function calculatesTotalDays(startYear, endYear) {
  return Math.floor((endYear - startYear) / (1000 * 60 * 60 * 24));
}

const firstYear = new Date();
const secondYear = new Date();
firstYear.setFullYear(1699);
secondYear.setFullYear(1700); // not a leap year
console.log(calculatesTotalDays(firstYear, secondYear));

firstYear.setFullYear(1999);
secondYear.setFullYear(2000);
console.log(calculatesTotalDays(firstYear, secondYear));
