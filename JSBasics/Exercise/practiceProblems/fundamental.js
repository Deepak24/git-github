/**
 * Description: JS Fundamental programming
 */

//1 - Print text Number or Big Number
let number1 = 101;
if (number1 < 100)
    console.log("Number");
else
    console.log(`Big \nNumber`);

//2. Pring Big or Number text
if(number1 > 100) {
    console.log("Big");
} else {
    console.log("Number");
}

//3. Conditional statement
let number2=99;
if(number2 > 100) {
    console.log("Big");
} else if( number2 < 10 ) {
    console.log("Small");
} else {
    console.log("Number");
}

//4. Positive negative zero
let number3 = 1;
if( number3 > 0 ) {
    console.log("Positive");
} else if( number3 < 0 ) {
    console.log("Negative");
}else if( number3 == 0 ) {
    console.log("Zero");
}

//5. switch
let number4 = 1;
switch(number4) {
    case 1 : 
        console.log("One");
        break;
    default:
        console.log("Not One");
}

//6. FizzBuzz - Divide by 3 or 5
let number5= 15;
if( (number5 % 3 === 0) && (number5 % 5 === 0) ) {
    console.log("FizzBuzz");
}else if( number5 % 3 === 0 ){
    console.log("Fizz");
} else if(number5 % 5 === 0){
    console.log("Buzz");
} else {
    console.log(number5);
}

//7. Odd Even
let number6 = 9;
let arrYou = [];
let arrFriend = [];

for(let iCount=0; iCount < number6; iCount++) {
    if( iCount % 2 === 0) {
        arrYou.push(iCount);
    }
    if(iCount % 2 === 1){
        arrFriend.push(iCount);
    }
}

if( arrYou.length > arrFriend.length ) {
    console.log("You");
}else if ( arrYou.length <= arrFriend.length ) {
    console.log("Friend");
}

//8 - Find first digit of number

function firstDigit(num) {
    const numberAsString = num.toString();
    // Extract the first character (first digit)
    const firstChar = numberAsString.charAt(0);
    // Convert the first character back to an integer and return it
    return parseInt(firstChar);
}

console.log(firstDigit(125));

//9 - Print square of star
function printStarSquare(numStar){
    for (let i = 0; i < numStar; i++) {
        let row = '';
        for (let j = 0; j < numStar; j++) {
            row += '* ';
        }
        console.log(row);
    }
}

printStarSquare(5);

//10. Find pattern
let strOriginal = "Hello World!!";
let strFind = "a";
console.log(strOriginal.indexOf(strFind));
