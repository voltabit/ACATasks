const arr = [1,2,3];

const cb = (item) => item *2;

function myMap(cb){
    let arr = [];
    for (let i = 0; i < this.length; i++){
        arr = [ ...arr, cb(this[i])];
    }
    return arr;
}

arr.__proto__.myMap  = myMap;

const arr1 = [7,0,9];

console.log(arr.myMap(cb));