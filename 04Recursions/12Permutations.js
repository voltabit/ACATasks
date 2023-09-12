"use strict";
function permutations(str) {
  const results = [];
  if (str.length === 1) {
    results.push(str);
    return results;
  }

  for (let i = 0; i < str.length; i++) {
    let firstChar = str[i];
    let rest = str.substr(0, i) + str.substr(i + 1);
    let subPermutations = permutations(rest);
    for (let j = 0; j < subPermutations.length; j++) {
      const permutation = firstChar + subPermutations[j];
      if (results.includes(permutation)) continue; // too expensive for a little longer strings
      results.push(permutation);
    }
  }
  return results;
}

console.log(permutations("hello"));
