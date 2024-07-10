/**
 * Description: JS array method - includes and sort methods
 */

//Include method
var arrNum = [1, 2, 3, 5, 8, 9];
//test whether element present in the arr
const aResult = arrNum.includes(2);
console.log(aResult);

//taking array of string
var arrString = ["abc", "cat", "mat", "Flat"];
//testing with includes method
const strCheck1 = arrString.includes("cat");
const strCheck2 = arrString.includes("flat");
const strCheck3 = arrString.includes("at");
console.log(strCheck1);
console.log(strCheck2);
console.log(strCheck3);

//Sort method - It sorts the original array
var arrNum1 = [2, 6, 3, 5, 8];
console.log(arrNum1.sort());//Output - [ 2, 3, 5, 6, 8 ]
console.log(arrNum1);

var arrNum2 = [2, 5, 8, 1, 4];
console.log(arrNum2.sort(function(a, b) {
    return a + 2 * b;
}));
console.log(arrNum2);
