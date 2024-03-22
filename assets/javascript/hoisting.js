/**
 * Hoisting : The hoisting is the process whereby you can access the value of variable or function 
 *            even before it is initialized
 */
console.log(age);
var age = 100;

// showName();
console.log(showName);

function showName(){
    console.log("My name is Deepak K.");
}

// console.log(a);
console.log(y);
let a = 10;
var y = 20;

// let a1 = 10;
// {
//     console.log(a1);
//     let a1= 20;
// }

function foo(){
    console.log(x);
    let x = 20;
}

foo();