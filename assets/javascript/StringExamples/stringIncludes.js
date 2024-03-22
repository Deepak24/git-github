/**
 * Description: JS method includes which returns true or false
 */

const strDisplayText = "I am from Pune, MH India.";
const strCond = strDisplayText.includes("Pune");

if( strCond ) {
    console.log("It's having the string.");
}else {
    console.log("Don't found that string!!");
}

//Checking whether char is present 
const strMessage = "I am from Pune."
const vowels = "aeiouAEIOU";
for( let char of strMessage ){
    if( vowels.includes(char) ) {
        console.log(`${char} is vowel.`);
    }
}

//Checking if entire string is having the vowles
const strMessage1 = "It's having the vowels";
const Vowel1 = "aeiouAEIOU";
let flag = false;

for(let chara of strMessage1 ) {
    if( Vowel1.includes(chara) ) {
        flag = true;
        break;
    } else {
        flag = false;
    }
}

if (flag) {
    console.log("String is having the vowels.");
} else {
    console.log("String doesn't have vowels!!");
}