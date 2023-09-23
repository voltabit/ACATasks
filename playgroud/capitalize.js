function capitalizeEveryOther(string) {
  let characters = string.split("");
  let result = "";
  for (let i = 0; i < characters.length; i++) {
    if (i % 2 === 0) {
      characters[i] = characters[i].toUpperCase();
    }
    result += characters[i];
  }
  return result;
}
console.log(capitalizeEveryOther("monkey says and monkey does"));
