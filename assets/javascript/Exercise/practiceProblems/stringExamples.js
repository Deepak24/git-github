/**
 * Description: Solved the string basic example
 */
//1. Length of the string
let str1 = "Deepak";
console.log(str1.length);

//2. Find the substring

function customSubString(str2, l, r) {
    let strSubString='';
    for(let iChar= l; iChar < str2.length; iChar++) {
        if( iChar <= r) 
            strSubString += str2[iChar];
        else break;
    }
    return strSubString;
}

const strSub = customSubString("Amazing", 2, 4);
console.log(strSub);

//3. Reverse String
let str3 = "DeepakK";
const strReverse = str3.split("").reduce((acc, char) => char + acc, "");
console.log(strReverse);

//4. Get input of multiple words 
function getLine(strInput){
    let str4 = '';
    let arrWords = strInput.split(" ");
    console.log(arrWords);
    let strJoin = arrWords.join(" ");
    console.log(strJoin);
}

let strString = "My Name is Deepak";
getLine(strString);

//5. Check if string is panagram
function isPanagram(str5){
    let arrAlpha = ['a', 'b','c','d', 'e','f', 'g', 'h', 'i', 'j', 
                    'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 
                    's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let intCharFound = 0;
    let inputString = str5.toLowerCase();
    for(let iCount = 0; iCount < arrAlpha.length; iCount++ ) {
        let intChar = inputString.search(arrAlpha[iCount]); 
        if( intChar >= 0 ) intCharFound++;
    }

    if( intCharFound == arrAlpha.length ) return 1;
    else return 0;
}

// const strOutPut = isPanagram("We are in Pune and working as software engineer.");
const strOutPut = isPanagram("Thequickbrownfoxjumpsoverthelazydog");
console.log(strOutPut);

// class Solution {
//     isPanagram(str){
//         str = str.toLowerCase()
//         let regex = /^[a-z]+$/;
//         return regex.test(str)      
//     }
// }

//6. Count the number of words in the string

let strInput = "We are in pune and I am working as software enggineer  ";
let arrWords = strInput.trim().split(" ");
console.log(arrWords.length);

//7. Check palindrome string
let strPalind = "madam";
let arrRev = strPalind.split('').reverse();
let strJoin = arrRev.join('');
console.log(strPalind === strJoin);

//8. Slice of string by removing first and last characters
let strSlice = "We are in pune.";
if( strSlice.length > 2 ) {
    strSlice = strSlice.slice(1, -1);//remove first and last char
} else 
    strSlice = '';
console.log(strSlice);

//9. 