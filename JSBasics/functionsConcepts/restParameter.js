/**
 * Description: REST Parameters - ...rest/...args
 *              The most important Point to remember about the rest parameter is that 
 *              it should always be used as the last parameter of the function 
 *              otherwise there will be a syntax error.
 */

function calculateTotal(a, b, ...rest){
    console.log({a, b});//Output - 2 6
    console.log(rest);
}

calculateTotal(2, 6, 5, 3, 7, 8, 9);

//Calculate the sum of numbers from the rest operator
function calculateTotal1(...rest) {
    let sum = 0;
    for (let value of rest) {
        sum += value;
    }
    console.log(sum);
}

calculateTotal1(1, 2, 4, 5, 7, 3, 6, 9);