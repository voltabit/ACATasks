"use strict";
function dayOfWeek(date) {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return daysOfWeek[date.getDay()];
}
const dateToCheck = new Date("12 / 07 / 2016");
console.log(dayOfWeek(dateToCheck));
