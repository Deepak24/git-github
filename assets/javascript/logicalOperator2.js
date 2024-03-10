/**
 * Logical operator
 * 
 */
const firstName = "";
const lastName = "Khamkar";

console.log(firstName || lastName);
console.log(firstName || lastName || null);


//Logical operator values
console.log("Boolean value", Boolean(""));
console.log("Boolean space", Boolean(" "));
console.log("Boolean zero", Boolean(0));
console.log("Boolean true", Boolean(true));
console.log("Boolean null", Boolean(null));
console.log("Boolean undefined", Boolean(undefined));

let a = 12;
let b;

console.log(a+b);
console.log(a + (b || 0));


const fName = "Deepak";
const lName = "Khamkar";
const Uname = fName && lName;
console.log(`Name is ${Uname}`);

//Exercises
console.log(3 || 2 || 1);
console.log("" || 0 || 2);
console.log("" || 0 || undefined);
console.log("" || "null" || 2);

console.log(3 && 2 && 1);
console.log(0 && "" && 2);
console.log("undefined" && "null" && "");