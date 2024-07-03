/**
 * Description : JS Data type
 */
/**
 * Data type 1 - String
*/
let userName = "Deepak";
console.log(userName);
console.log("Type Of UserName", typeof userName);//Type Of UserName string

/**
 * Data type 2 - Number
 */
let age = 35;
console.log(age);
console.log(typeof age);//Output - number

let FractionNum = 99.5;
console.log(FractionNum);//Output - 99.5

/**
 * Data type 3 - Boolean 
 */
let ifProductInCart = false;
console.log(ifProductInCart);
console.log("Type of ifProductInCart " + typeof ifProductInCart);//Outputt - Type of ifProductInCart boolean

/**
 * Data type 4 - undefined 
*/

let user2Name;
console.log(user2Name);//undefined
console.log(typeof user2Name);//undefined 

/**
 * Data type 5- Null
 */
let noValue = null;
console.log(noValue);
console.log(typeof noValue);//null

/**
 * Data type 6 - Object - Non Primitive data type
 */
const personDetails = {
    myName : "Deepak",
    age: 35,
    education: "MCA",
    location: "Pune"
}
console.log(personDetails);
console.log(typeof personDetails);//object

const arrNumber = [1, 2, 5, 20];
console.log(arrNumber);
console.log(typeof arrNumber);//Object