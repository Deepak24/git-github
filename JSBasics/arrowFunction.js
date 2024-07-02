/**
 * Function Use: Example of Arrow Function
 */

//Example - 1
const addFunction = () => {
    let a = 5, b=6;
    return a+b;
}

console.log(addFunction());//Output - 11

///Example 2 - Number multiplication
const MultiNumber = num => num * num;
console.log(MultiNumber(5));//25

//Example 3 - Multiplication and modulus
let utility = (a,b) => (a*b)*(a%b);

console.log(utility(12, 11));//Output - 132

//Example 4 - Fat Arrow function
const calculateSum = (x,y) => {
    return x + y;
}

console.log(calculateSum(12, 18));// Output - 30

//Example 5 - Fat Arrow difference - Short function
const calculateDiffrence = (num1, num2) => num1 - num2;
console.log(calculateDiffrence(30, 15));//Output - 15

//Example 6 - Fat Arrow with single line code with ternary operaor
const sumDiff = (numr1, numr2) => numr1 < numr2 ? numr1 + numr2 : numr1 - numr2;

const sumDiffRes = sumDiff(20, 52);
console.log(sumDiffRes);//Output - 72