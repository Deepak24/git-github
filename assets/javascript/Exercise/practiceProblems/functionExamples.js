/**
 * Description: Solved the function basic example
 */
//1. Factorial of a number
function factorial(n){
    //code here
    let res = 1;
    if(n === 0) 
        return 1;
        
    for(let iCount = 2; iCount <= n; iCount++) {
        res = res * iCount;
    }
    return res;
}

const numFactorial = factorial(25);
console.log(numFactorial);

//2. Finx One extra character
function findExtraCharacter(s1, s2) {
    let l1 = s1.length;
    let l2 = s2.length;
    let iFirst = 0;
    let iSecond = 0;
    //Loop over first string to match it with char from second string
    for( iFirst =0; iFirst < l1; iFirst++ ) {
        for (iSecond = 0; iSecond < l2; iSecond++) {
            if(s1[iFirst] == s2[iSecond]) break;
        }

        if(iSecond == l2) return s1[iFirst];
    }

    return s2[l2 - 1];
}

let str1 = "abcdef";
let str2 = "gabcdef";
console.log(findExtraCharacter(str1, str2));

//
let char1 = "a";
let char2 = "g";
let intChar1Code = char1.charCodeAt(0);
let intChar2Code = char2.charCodeAt(0);

console.log(intChar1Code);
console.log(intChar2Code);

let alphabet = String.fromCharCode(...Array(intChar2Code+1).keys()).slice(intChar1Code);
console.log(alphabet.split("").join(' '));

let strChar = '';
for(let i = intChar1Code; i <= intChar2Code; i++) {
    strChar += String.fromCharCode(i) + ' ';
}
console.log(strChar);