/**
 * Description: JS Filter function
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

//With filter method
const outputFil = arr1.filter(number1 => number1 > 5);
console.log(outputFil);
