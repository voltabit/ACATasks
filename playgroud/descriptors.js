const a = Math.abs;
console.log(defineProperty(a));

// console.dir(arrowFunction);

Object.preventExtensions(); // prevents adding properties or change of __proto__ of the object
Object.isExtensible; // boolean
Object.setPrototypeOf(object, anotherObject); // changes __proto__

Object.seal(object); // all properties become non-configurable, values cannot be changed
Object.isSealed; // boolean

Object.freeze(object); // object is unchangeable, except for including objects and their prototype

// Senior interview theory questions usually are limited to:
// hoisting closure scoping OOP

// We freeze objects, and to introduce changes, like adding a new property, we copy an object to another
newObject = { ...oldObject };
// this changes the reference to the object and rings the bells to the rest of the code to address the changes accordingly

// getter and setter methods help us find which part of the code changes a property
