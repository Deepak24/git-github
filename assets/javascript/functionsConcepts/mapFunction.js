/**
 * Description : Map function
 */

const arr = [1,2,3,4,5,6];
function getSquares(number1) {
    return number1 ** 2;
}

const output = arr.map(getSquares);
console.log(output);

const cubeNumbers = arr.map((number1) => {
    return number1 ** 3;
});

console.log(cubeNumbers);

console.log("We are checking index and square of number");
const intSquareNum = arr.map(( number1, index) => {
    console.log(index);
    return number1 ** 2;
});
console.log(intSquareNum);