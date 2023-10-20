"use strict";
function getDay(date) {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = new Date(date);
  return daysOfWeek[day.getDay()];
}

console.log(getDay("12/07/2016")); // "Wednesday"
console.log(getDay("09/04/2016")); // "Sunday"
console.log(getDay("12/08/2011")); // "Thursday"
