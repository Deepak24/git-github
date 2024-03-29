/**
 * Description: Recursion function
 *              Recursion is writting the piece of code by calling the same function
 *              from within that function
 */

// function calculate(x){
//     if(x == 3 ){
//         calculate(3);
//     }
// }

//Normal way of sum
function calculateSum(number1 ) {
    let total = 0;
    for (let i=0; i <= 10; i++){
        total = total + i;
    }
    return total;
}

const result = calculateSum(10);
console.log(result);

function calculateRecursiveSum(number1) {
    if( number1 === 1 )
        return number1;
    return number1 + calculateRecursiveSum(number1 - 1);
}

//How recursion takes place as below
//10 + calculateRecursiveSum(9)
//10 + 9 + calculateRecursiveSum(8)
//10 + 9+ 8 + calculateRecursiveSum(7)
//10 + 9 + 8 + 7 + calculateRecursiveSum(6)
//10 + 9 + 8 + 7 + 6 + calculateRecursiveSum(5)
//10 + 9 + 8 + 7 + 6 + 5 + calculateRecursiveSum(4)
//10 + 9 + 8 + 7 + 6 + 5 + 4 + calculateRecursiveSum(3)
//10 + 9 + 8 + 7 + 6 + 5 + 4 + 3 + calculateRecursiveSum(2)
//10 + 9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + calculateRecursiveSum(1)
//10 + 9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1

const totalSum = calculateRecursiveSum(10);
console.log(totalSum);

//Factorial of Number 5 --> 5x4x3x2x1 = 120
//number x (number -1) x (number - 2) x (number - 3) x (number - 4)

function factorialRecursive(number2) {
    if ( number2 === 1)
        return number2;

    return number2 * factorialRecursive(number2 - 1);
}

const factResult = factorialRecursive(5);
console.log(factResult);