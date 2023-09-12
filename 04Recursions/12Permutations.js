"use strict";
function permutations(string) {
  const results = [];
  if (string.length === 1) {
    results.push(string);
    return results;
  }

  for (let i = 0; i < string.length; i++) {
    let firstChar = string[i];
    let rest = string.substring(0, i) + string.substring(i + 1);
    let subPermutations = permutations(rest);
    for (let j = 0; j < subPermutations.length; j++) {
      const permutation = firstChar + subPermutations[j];
      if (results.includes(permutation)) continue;
      results.push(permutation);
    }
  }
  return results;
}

console.log(permutations("test"));
