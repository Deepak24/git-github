/**
 * For loop : 
 * 1. Find even number between 1 to 101
 * 2. Check vowels
 */

let remainder;

for(let i=0; i< 101; i++){
    remainder = i % 2;
    if( remainder === 0 ){
        console.log(`${i} is a even number.`);
    }else {
        console.log(`${i} is a odd number.`);
    }
}

//Check if string contains vowels
const inputString = "Hello, I love js";
const strVowels = "aeiou";

for (let i=0; i < inputString.length; i++){
    if(strVowels.includes(inputString[i])) {
        console.log(`${inputString[i]} is a vowel.`)
    }else {
        console.log(`${inputString[i]} is not a vowel.`);
    }
}