/**
 * Description: JS Object propery shorthand
 * From ES6 this property is used as shorthand 
 */

const userName = "Deepak";
const age = 35;
const city = "Pune";

//Without using ES6 shorthand 
const user1 = {
    userName : userName,
    age : age,
    city : city
}
console.log(user1);

//With ES6 shorthand property 
const User2 = {
    userName,
    age,
    city
}

console.log(User2);