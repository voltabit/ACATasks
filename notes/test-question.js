var t=true
var o = {}
var n = 100
var u = undefined
var s = ''

console.log(!!(( u && !n && !s) || ( n * Number(s)) || ( !s && (n+u) && !!o) || ( !t + n )))

// 1 - u is falsy so the first () is false
// && check from the left to the right
// 2 - Number(s) returns 0 : falsy
// 3 - 
// 4 - false + 100 : 0 + 100 : 100 > truthy

console.log(!t + n) 