/**
 * Description: JS object basic example
 *              - Object - key - value pair
 *              - Functions inside the object
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
    },
    bye(){
        console.log("Bye Bye!");
    }
};

person.sayHello();
person.function1 = () => {
    console.log("We are inside arrow function of a person object");
}

//If we would like to access the object with square bracket then we need to give quotation to key
console.log("The Person object's Name propery is ", person["perName"]);
console.log(person);
person.bye();//call the function using object
person.function1();//call the object's function 