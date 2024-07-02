/**
 * Description : JS Data type
 */
/**
 * Data type 1 - String
*/
let userName = "Deepak";
console.log(userName);
console.log("Type Of UserName", typeof userName);

/**
 * Data type 2 - Number
 */
let age = 35;
console.log(age);
console.log(typeof age);

let FractionNum = 99.5;
console.log(FractionNum);

/**
 * Data type 3 - Boolean 
 */
let ifProductInCart = false;
console.log(ifProductInCart);
console.log("Type of ifProductInCart " + typeof ifProductInCart);

/**
 * Data type 4 - undefined 
*/

let user2Name;
console.log(user2Name);
console.log(typeof user2Name);

/**
 * Data type 5- Null
 */
let noValue = null;
console.log(noValue);
console.log(typeof noValue);

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
console.log(typeof personDetails);

const arrNumber = [1, 2, 5, 20];
console.log(arrNumber);
console.log(typeof arrNumber);