/**
 * Description: JS object basic example
 *              Object - key - value pair
 */

const obj = {};

console.log(typeof obj);

let objSchool = {
        schoolName : "Yashwantrao chavan vidyalaya",
        location : "Pune",
        establishYear : 2000,
        displayInfo : function() {
            console.log(`The ${objSchool.schoolName} is established in ${objSchool.establishYear} at ${objSchool.location}`);
        }
    }
objSchool.displayInfo();

const person = {
    perName : "Deepak",
    age : 35,
    sayHello : function() {
        console.log("Hello My Name is ", this.perName);
    }
};

person.sayHello();