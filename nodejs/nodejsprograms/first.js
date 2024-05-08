/**
 * 
 */
//1
function firstDigit(num) {
    // write your code here
    if(num > 9) {
        
        while (num > 9 ) {
            num = (num / 10);
        }
    }
    console.log(Math.floor(num));
}

firstDigit(265);


//2- Print the square stars
function printSquare(num1) {
    let intPrintSquare = num1;
    for(let iCount = 0; iCount < intPrintSquare; iCount++) {
        let strStar = '';
        for(let innerStar = 0; innerStar < intPrintSquare; innerStar++) {
            strStar += "* ";
        }
        strStar = strStar.trim();
        strStar += "\n";
        console.log(strStar);
    }
}

printSquare(5);

//3 - Check index of string or position of the char in string
let s = "Hello World!!";
let p = "a";
// code here
console.log(s.indexOf(p));

//4 - Factorial of a number
const n = 5;
let res = 1;
if(n === 0) {
    res = 1;
} else {
    for(let iCount = 2; iCount <= n; iCount++) {
        res = res * iCount;
    }
}

console.log(res);

//5 - Volume of Cube
let cubeSize = 0;
const cubeVol = (cubeSize * cubeSize * cubeSize);
console.log(cubeVol);   

//6 - Volume of Rectangle
let len = 3;
let wid = 5;
let het = 4;

const rectVol = (len * wid * het);
console.log(rectVol);