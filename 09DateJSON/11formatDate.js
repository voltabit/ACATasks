"use strict";

function formatDate(date) {
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
  const [year, month, day] = date.split("-");
  return console.log(`${day} ${months[month - 1]} ${year}`);
}

formatDate("2020-05-14");
