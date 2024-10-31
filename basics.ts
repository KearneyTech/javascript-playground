let a = 'a';

//ES6 Big arrow function
const multiply = (a, b) => a * b;

//ES6 Class
class Car {
    make: any;

    constructor(make) {
        this.make = make;
    }

    toString() {
        return `make: ${this.make}`;
    }
}

//ES6 Destructuring
const make = "Nissan";
const model = "300z";
const car = {make, model};
console.log(`make: ${make}`);

//ES6 Spread syntax
const array1: number[] = [1, 2, 3];
const array2: number[] = [4, 5, 6];
const merged: number[] = [...array1, ...array2];
console.log(merged);
// Expected output: [1, 2, 3, 4, 5, 6]

//Greater/Lesser than or equal to syntax
const high = 10;
const low = 0;

console.log(low <= high); //true
console.log(high >= low); //true
console.log(10 <= high); //true
console.log(0 >= low); //true

//DOM Manipulation
const _param = "SOME TEXT";
let elementValue = document.querySelector(`[data-continent="${_param}"]`)?.innerHTML;

//Math - Maximum value
var big = Math.max(1, 2); // 2