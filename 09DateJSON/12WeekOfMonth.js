"use strict";
const getWeekOfMonth = (date) => {
  const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
  return console.log(
    Math.ceil((date.getDate() - (firstDayOfMonth.getDay() + 1)) / 7) + 1 // remove leading days to full week and add one week instead
  );
};
const result = getWeekOfMonth(new Date(2023, 9, 31));
