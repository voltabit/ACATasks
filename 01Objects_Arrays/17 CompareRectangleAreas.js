"use strict";
/*
Given two objects representing rectangles with properties width and height, write a function to
compare if they have the same area.
*/

const compareRectAreas = function (rect1, rect2) {
    return((rect1.width * rect1.height) === (rect2.width * rect2.height) )
};

const rectangle1 = {
  width: 5,
  height: 10,
};
const rectangle2 = {
  width: 10,
  height: 5,
};
const rectangle3 = {
  width: 6,
  height: 8,
};

console.log(compareRectAreas(rectangle1, rectangle2));
console.log(compareRectAreas(rectangle1, rectangle3));
console.log(compareRectAreas(rectangle2, rectangle3));