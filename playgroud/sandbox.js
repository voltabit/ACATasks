function myCall(obj, a) {
  return this(obj);
}

function f(n) {
  return n.c;
}

f.prototype.myCall = myCall;

const obj = { c: 6 };

f.myCall(obj, 5);
