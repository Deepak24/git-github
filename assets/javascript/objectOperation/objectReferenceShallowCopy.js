/**
 * Description: JS object reference and shallow copy
 *              - Object are copied by reference and not by value
 *              - Shallow copy - When we create 2 objects and both are pointing to same memory location 
 *                      When we update one object properties then it's changing the other object properties
 */

const person1 = {
    personName : "Deepak",
    age : 40
};
console.log(person1);
const person2 = person1;
person2.personName = "Ashish";
person1.age = 111;
console.log(person1);
console.log(person2);

//Not a deep copy
const person3 = {
    userName : "Rohan",
    age : 25,
    address : {
        city : "Pune",
        state : "MH"
    }
}

const person4 = Object.assign({}, person3);

person4.userName = "Ashish";
person4.address.city = "Bhopal";
person4.address.state = "MP";

console.log(person4);
console.log(person3);