/**
 * Description: Sum of numbers less than 40 
 */
const arrNum = [12, 16, 15, 54, 25, 74, 18, 21, 23, 26, 45];

const result = arrNum.reduce((acc, cur) => cur < 40 ? acc + cur : acc, 0);

console.log(result);

//We can do multiple things with exercise
