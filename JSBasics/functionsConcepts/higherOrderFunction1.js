/**
 * Description : Higher Order function
 *             - Higher-Order function is a function that receives a function as an argument 
 *                  or returns function as output.
 */

const arr1 = [1,2,3,4,5];
function square(number1){
    return number1 ** 2;
}

function cube(number2) {
    return number2 ** 3;
}

function calculatePower(wrapper, arr1) {
    let arrTotal = [];
    for (let intNum of arr1) {
        arrTotal.push(wrapper(intNum));
    }
    return arrTotal;
}

const squareOfNumbers = calculatePower(square, arr1);
console.log(squareOfNumbers);

const cubeOfNumbers = calculatePower(cube, arr1);
console.log(cubeOfNumbers);