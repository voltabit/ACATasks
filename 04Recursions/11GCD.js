"use strict";
function gcd(a, b) {
  if (a === 0) return b;
  if (b === 0) return a;
  return gcd(Math.min(a, b), Math.max(a, b) % Math.min(a, b));
}

console.log(gcd(48, 18));
