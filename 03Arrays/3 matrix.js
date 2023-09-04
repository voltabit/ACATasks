// Տրված է տողերի մատրիցա (nxm) և բառ:
// Հայտնաբերել արդյոք բառը գոյթյն նի մատրիցայմ թե ոչ:

const nxm = [
  "Lorem ipsum dolor sit amet consectetur adipiscing elit",
  "deserunt mollit anim id est laborum",
];

function wordFound(lines, word) {
  const words = lines.map((line) => line.split(" "));
  return words.some((element) => {
    for (let i = 0; i < element.length; i++) {
      if (element[i] === word) {
        return true;
      }
    }
    return false;
  });
}

console.log(wordFound(nxm, "laborum"));
