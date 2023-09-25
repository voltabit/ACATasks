"use strict";
const getWeekOfMonth = (date) => {
  const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);

  const firstDayOfMonthWeekDay = firstDayOfMonth.getDay();

  const weeks = Math.ceil((date.getDate() + firstDayOfMonthWeekDay + 1) / 7);
  return weeks;
};
const result = getWeekOfMonth(new Date(2017, 5, 5));

console.log(result);
