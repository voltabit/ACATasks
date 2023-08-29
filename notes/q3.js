function f(){
    f1();
    f2();
    f3();
    console.log("f");
}

function f1(){
    f2();
    console.log("f1");
}

function f2(){
    console.log("f2");
}

var f3 = function(){console.log("f3");}

//you dont know js - 2 book- chapter 3-4
// read about tokenizing >> AST >> scopes

// a token represents an atomic piece of code

// phase two: compilation and interpretation
g === f

f() !== f() // these return  different objects
