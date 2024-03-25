/**
 * Description : array spread - We are checking the example of spread operator on array
 */

//Array Spread operator
const arr1 = [1,2,3,4,5];
const arr2 = [8,9];

const arr3 = [...arr1, 6, 7, ...arr2, 10];

console.log(arr3);
const arr4 = [...arr1, ...arr2];
console.log(arr4);