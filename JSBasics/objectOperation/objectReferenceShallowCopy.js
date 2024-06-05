/**
 * Description: JS object reference and shallow copy
 *              - Object are copied by reference and not by value
 *              - Shallow copy - When we create 2 objects and both are pointing to same memory location 
 *                      When we update one object properties then it's also changing the other object properties
 * 
*               - Deep Copy - When object is copied then it's not changing the original object 
                                then it's called as deep copy
 */

const person1 = {
    personName : "Deepak",
    age : 40
};
console.log(person1);
const person2 = person1;
person2.personName = "Ashish";
person1.age = 111;
//Person1 object properties are also changing
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

//It's also a shallow copy when we have nested level of object
const person4 = Object.assign({}, person3);

person4.userName = "Ashish";
person4.address.city = "Bhopal";
person4.address.state = "MP";

console.log(person4);
console.log(person3);

//Both spread and assign methods perform shallow copy while jSON method carry a deep copy

//Copying using json.stringify
let person5 = JSON.parse(JSON.stringify(person3));
person5.address.city = "Surat";
console.log(person5);
console.log(person3);

//Deep copy example
let person = {
    firstName: 'Raj',
    lastName: 'Sharma',
    address: {
        street: 'Connaught Place',
        city: 'Pune',
        country: 'India'
    }
};


let copiedPerson = JSON.parse(JSON.stringify(person));

copiedPerson.firstName = 'Ganesh'; // disconnected

copiedPerson.address.street = 'Niwaru';
copiedPerson.address.city = 'Jaipur';

console.log(copiedPerson);
console.log(person);