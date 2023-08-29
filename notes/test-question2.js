let a ={ key:1, key2:'abc'};
let b  = {...a} ;// 
let c ={};
c.key1=1;
c.key2='abc';
let d = a;
d.key=10;


a===b // false
a===c // false
a===d // true

// {} creates a new object
// objects are saved by their address reference