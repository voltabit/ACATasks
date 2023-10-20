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
function formatDate(date) {
  const formatted = `${
    months[date.getMonth()]
  } ${date.getDate()}, ${date.getFullYear()}`;
  return formatted;
}

const dateToFormat = new Date(1980, 8, 23);
console.log(formatDate(dateToFormat));
