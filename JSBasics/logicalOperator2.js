/**
 * Logical operator
 * 
 */
const firstName = "";
const lastName = "Khamkar";

console.log(firstName || lastName);
console.log(firstName || lastName || null);


//Logical operator values
console.log("Boolean value - ", Boolean("")); // Output - false
console.log("Boolean space - ", Boolean(" ")); // Output - true
console.log("Boolean zero - ", Boolean(0)); // Output - false
console.log("Boolean true - ", Boolean(true)); // Output - true
console.log("Boolean null - ", Boolean(null)); // Output - false
console.log("Boolean undefined - ", Boolean(undefined)); // Output - false

let a = 12;
let b;

console.log(a+b);//Output - NaN
console.log(b);//Output - undefined
console.log(a + (b || 0));//Output - 12

const fName = "Deepak";
const lName = "Khamkar";
const Uname = fName && lName;
console.log(`Name is ${Uname}`);//

//Exercises
console.log(3 || 2 || 1);//Output - 3
console.log("" || 0 || 2);//Output - 2
console.log("" || 0 || undefined);//Output - undefined
console.log("" || "null" || 2);//Output - null

console.log(3 && 2 && 4);//Output is - 4
console.log(0 && "" && 2);//Output is - 0
console.log("undefined" && "null" && "");//Output is - blank

//Random Example
let sum = 0;
let n = 100;

for(let i =0; i<= 100; i++){
    sum +=i;
}

console.log('sum', sum); //Output - 5050