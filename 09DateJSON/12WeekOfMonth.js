"use strict";
const getWeekOfMonth = (date) => {
  const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
  return (
    Math.ceil((date.getDate() - (firstDayOfMonth.getDay() + 1)) / 7) + 1 // remove leading days to full week and add one week instead
  );
};

console.log(getWeekOfMonth(new Date(2023, 9, 31)));
