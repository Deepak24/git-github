/**
 * Description : Pure Function :)
 * 1. It takes an argument
 * 2. It should retunr something
 * 3. For same input you should get same output
 * 4 The result should not be influenced by Outer parameter
 * 5. It should not mutate the argument
 */

function getDoubleVal(number1) {
    return number1 * 2;
}

const result = getDoubleVal(5);
console.log(result);

//Pure function example with array parameter
function appendNumbers(arr) {
    let arrNew = [];
    arrNew.push(...arr, 5, 6);
    return arrNew;
}

const result1 = appendNumbers([1,2,3,4]);
console.log(result1);