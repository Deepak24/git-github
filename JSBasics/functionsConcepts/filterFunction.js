/**
 * Description: JS Filter function
 *              - It filters the elements of the array that return false for applied condition 
 *                  and return array which contains elements that satisfy the applied condition.
 */

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8];

function filterNumber(arr1){
    const arrTemp = [];
    for(let number1 of arr1) {
        if( number1 > 5 ) {
            arrTemp.push(number1);
        }
    }
    return arrTemp;
}

//With regular function
const output = filterNumber(arr1);
console.log(output);

//With fat arrow function for filter method
const outputFil = arr1.filter(number1 => number1 > 5);
console.log(outputFil);

//Example for filter with mod operator
const arr2 = new Array(1, 2, 3, 6, 5, 4);
var arrNew = arr2.filter(function (x){
    return x % 2 == 0;
});

console.log(arrNew);