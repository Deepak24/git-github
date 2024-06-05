/**
 * Exercise : Palindrome - Checking the palindrome string 
 */

//With inbuild methods
const str1 = "Prakash";
const arrOfChar = str1.split("");
const charReversed = arrOfChar.reverse();
const reversedStr = charReversed.join("");
console.log(arrOfChar);
console.log(charReversed);
console.log(reversedStr);

const strSingle = str1.split("").reverse().join("");
console.log(strSingle);

if(str1 === reversedStr){
    console.log("String is palindrome.");
} else{
    console.log("this is not palindrome string");
}

const str2 = "madam";
//With for loop
function getReverseFun(str2){
    let reverseStr1 = "";
    for(let i = str2.length - 1; i >= 0; i--) {
        reverseStr1 += str2[i];
    }
    return reverseStr1;
}

const result = getReverseFun(str2);
console.log(result);

if( result === str2 ){
    console.log("This is palindrome string");
} else {
    console.log("This is not palindrome string");
}