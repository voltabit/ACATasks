function calculateAge(birthday) {
  const today = new Date();
  const age = new Date(today - birthday).getFullYear() - 1970;
  return age;
}

const bd = new Date(1973, 9, 24);
console.log(calculateAge(bd));
