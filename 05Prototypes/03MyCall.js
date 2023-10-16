function myCall(context, ...args) {
  const token = Date.now();
  context[token] = this;
  context[token](...args);
  delete context[token];
}

Function.prototype.myCall = myCall;

var a = "Window name";

function foo() {
  console.log(a);
}
foo();
foo.myCall({ a: "Context Name" });

// foo.myCall({ a: "Context name" });

// function myCall(context, ...args) {
//   const func = this;

//   const prop = Symbol();

//   context[prop] = func;
//   const result = context.prop;
//   delete context[prop];

//   return result;
// }

// Function.prototype.myCall = myCall;
// const x = 2;
// const y = 3;
// const shape = { x: 5, y: 6 };
// function area(x, y) {
//   console.log(x * y);
// }
// // area(x, y);
// area.myCall(shape);
