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
  result.sort((a, b) => a - b);

  const output = [];
  for (let i = 0; i < 12; i++) {
    if (!isNaN(result[i])) {
      output.push(months[result[i]]);
    }
  }
  return output;
}

let january = new Date(2018, 0, 1);
let march = new Date(2018, 2, 1);
let april = new Date(2017, 3, 1);
let november = new Date(2017, 10, 1);
let december = new Date(2017, 11, 1);
let january2017 = new Date(2017, 0, 1);
let january2018 = new Date(2018, 0, 1);

console.log(monthsInterval(january, march));
console.log(monthsInterval(november, january)); // gap in resulting months
console.log(monthsInterval(april, january)); // call in reverse order
console.log(monthsInterval(january2017, january2018)); // full year
