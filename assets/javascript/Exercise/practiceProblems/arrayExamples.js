/**
 * Description : Solving the array examples
 */

//1. Search the element position in the given array
let arrNum = [1, 2, 3, 4, 5, 6];
// let intPos = arrNum.indexOf(7);
let intPos;
for(let iCnt = 0; iCnt < arrNum.length; iCnt++) {
    if(arrNum[iCnt] == 7) {
        intPos = iCnt;
        break;
    } else {
        intPos = -1;
    }
}
console.log(intPos);

//2. Size of the array
let a = [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0];
let size = a.length; 

//3. Return number of 0 in the array
let arr1 = [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0];
let intCnt = 0;
for(let iCnt =0; iCnt < arr1.length; iCnt++) {
    if( arr1[iCnt] === 0 ) {
        intCnt++;
    }
}
console.log(intCnt);

//Alternate number
console.log(arr1.filter(el => el == 0).length);

//4. Average of non negative number
// let arrNumbers  = [1, 2, 3, 5, -7, -6];
// let arrNumbers = [-12, 8, -7, 6, 12, -9, 14];
let arrNumbers = [5, 0, 0, 0];
const arrFil = arrNumbers.filter( num1 => num1 >= 0 );

let intArrTotal = 0, intAverage = 0;
for(let iArrCnt = 0; iArrCnt < arrFil.length; iArrCnt++) {
    intArrTotal += arrFil[iArrCnt];
    if( iArrCnt == (arrFil.length - 1) ) intAverage = intArrTotal/(iArrCnt+1);
}
console.log(intAverage);