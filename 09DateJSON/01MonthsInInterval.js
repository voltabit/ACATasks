"use strict";
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function monthsInterval(firstMonth, lastMonth) {
  const myMonths = [...months];
  const bigDate = new Date(Math.max(firstMonth, lastMonth));
  const smallDate = new Date(Math.min(firstMonth, lastMonth));
  const monthDistance = bigDate.getMonth() - smallDate.getMonth();
  const yearDistance = bigDate.getFullYear() - smallDate.getFullYear();
  // console.log(monthDistance, yearDistance);

  for (let i = 0; i < yearDistance; i++) {
    myMonths.concat(months);
  }
  months.length = monthDistance + 1;
  myMonths.concat(months);

  return months;
}

let january = new Date(2017, 0, 1);
let march = new Date(2017, 2, 1);
monthsInterval(january, march);
// let january2017 = new Date(2017, 0, 1);
// let january2018 = new Date(2018, 0, 1);
// console.log(monthsInterval(january2017, january2018));

// let december = new Date(2017, 11, 1);
// let january = new Date(2018, 0, 1);
// monthsInterval(december, january);
