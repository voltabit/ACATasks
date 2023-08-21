"use strict";
const wordToCheck = "Rammstein";

function calcScrabbleScore(word) {
  const charScores = ["", "aeioulnrst", "dg", "bcmp", "fhvwy", "k", "jx", "qz"];
  let score = 0;

  word = word.toLowerCase();

  for (let i = 0; i < word.length; i++) {
    for (let j = 0; j < charScores.length; j++) {
      for (let k = 0; k < charScores[j].length; k++) {
        if (word.charAt(i) === charScores[j][k]) {
          score += j;
          break;
        }
      }
    }
  }
  return score;
}

console.log(calcScrabbleScore(wordToCheck));
