"use strict";
function dayOfYear(str) {
  const day = new Date(str);
  const year = new Date(str).getFullYear();
  const firstDayOfYear = new Date(year, 0, 1);
  const daysInYear = (day - firstDayOfYear) / (1000 * 60 * 60 * 24) + 1;

  return daysInYear;
}

console.log(dayOfYear("12/13/2020")); // 348
console.log(dayOfYear("12/17/2020")); // 352
console.log(dayOfYear("11/16/2020")); // 321
console.log(dayOfYear("1/9/2019")); // 9
console.log(dayOfYear("3/1/2004")); // 61
console.log(dayOfYear("12/31/2000")); // 366
