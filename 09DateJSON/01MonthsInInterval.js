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

function monthsInterval(start, end) {
  let pointer = new Date(Math.min(start, end));
  const finish = new Date(Math.max(start, end));
  const includedMonths = new Set();

  do {
    includedMonths.add(pointer.getMonth());
    pointer.setMonth(pointer.getMonth() + 1);
  } while (pointer <= finish);

  const result = Array.from(includedMonths.values());
  const output = [];
  for (let i = 0; i < 12; i++) {
    if (!isNaN(result[i])) {
      output.push(months[result[i]]);
    }
  }
  return console.log(output);
}

let january = new Date(2018, 0, 1);
let march = new Date(2018, 2, 1);
monthsInterval(january, march);
