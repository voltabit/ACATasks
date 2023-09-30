"use strict";
const getWeekOfMonth = (date) => {
  const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
  const firstDayOfMonthWeekDay = firstDayOfMonth.getDay();
  const weeks = Math.ceil((date.getDate() + firstDayOfMonthWeekDay + 1) / 7);
  return weeks;
};
const result = getWeekOfMonth(new Date(2023, 7, 4));

console.log(result);
