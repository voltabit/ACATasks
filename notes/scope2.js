// var a = 5;
function f() {
    a = 6;
    console.log(a);
}
f();
console.log(a);

/*
    if the function assigns a value to an undeclared variable, 
    the variable is created in the global context
    The strict mode does not allow this
*/