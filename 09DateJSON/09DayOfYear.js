"use strict";
function dayOfYear(str) {
  const day = new Date(str);
  const year = new Date(str).getFullYear();
  const firstDayOfYear = new Date(year, 0, 1);
  const daysInYear = (day - firstDayOfYear) / (1000 * 60 * 60 * 24) + 1;

  return daysInYear;
}

const dateToParse = "12/13/2020";

console.log(dayOfYear(dateToParse));
