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
  return console.log(daysOfWeek[day.getDay()]);
}

getDay("12/07/2016"); // "Wednesday"
getDay("09/04/2016"); // "Sunday"
getDay("12/08/2011"); // "Thursday"
