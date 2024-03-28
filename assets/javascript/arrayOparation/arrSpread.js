/**
 * Description : array spread - We are checking the example of spread operator on array
 *              spread operator can be used anywhere not specific to end 
 */

//Array Spread operator
const arr1 = [1,2,3,4,5];
const arr2 = [8,9];

const arr3 = [...arr1, 6, 7, ...arr2, 10];

console.log(arr3);
const arr4 = [...arr1, ...arr2];
console.log(arr4); // [ 1, 2, 3, 4, 5, 8, 9 ]

// with spread 
let arr = [1,2,3,-1];
//call Math.min for getting -1 as a output
console.log(Math.min(...arr)); //-1

//Spread operator on object
const user = {
    name : "Deepak",
    age : 35,
    city : "Pune"
}
const clonedUser = {...user};
console.log(user);

const user1 = {
    name : "Deepak1",
    age : 35,
    city : "pune"
}

const user2 = {
    name: "Deepak2",
    age : 36,
    city : "Pune"
}
const newUser = {...user1, ...user2};
console.log("the concatenate result is ");
console.log(newUser);