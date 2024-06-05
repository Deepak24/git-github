/**
 * Description: JS Computed object properties example
 */
//
const readlineSync = require("readline-sync");


let LASTNAME = "lastname";
let fullname = {
    firstname : "Deepak",
    [LASTNAME] : "Khamkar"
};

console.log(`My fullname is ${fullname.firstname} ${fullname.lastname}`);

//Add property dynamically
let USERCITY = "city";
let personData = {
    firstName : "Deepak",
    lastName : "Khamkar"
};
personData[USERCITY] = "Pune";

console.log(`My Name is ${personData.firstName} ${personData.lastName} and living in ${personData.city}`);

//Computed property with readline sync
const key = readlineSync.question("What information do you need firstName, lastName, city?");
console.log(personData[key]);
