/**
 * Description: JS method for uppercase and lowercase
 * uppercase() & lowercase()
 */
const strMessage = "I am Deepak Khamkar";

console.log(strMessage.toLowerCase());
console.log(strMessage);
console.log(strMessage.toUpperCase());

//Checking if entire string is having the vowles with string method 
const strMessage1 = "It's having the vowels";
const Vowel1 = "aeiou";
let flag = false;

for(let chara of strMessage1 ) {
    if( Vowel1.includes(chara.toLowerCase()) ) {
        flag = true;
        break;
    } 
}

if (flag) {
    console.log("String is having the vowels.");
} else {
    console.log("String doesn't have vowels!!");
}

function func() {
    var str = 'mynameisdeepak#@';
    var string = str.toUpperCase();
    console.log(string);
}
func();