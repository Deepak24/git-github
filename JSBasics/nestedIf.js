//Include the readline sync package
const readlinesync = require("readline-sync");

const numberIn = Number (readlinesync.question("Enter the number: "));

const intRemainder = numberIn % 2;

//Nested if Condition 
if( intRemainder === 0 ) {
    console.log(`${numberIn} is an even number.`);
    if(numberIn % 4 === 0 ) {
        console.log(`${numberIn} is divisible by 4`);
    } else {
        console.log(`${numberIn} is not divisible by 4`);
    }

} else {
    console.log(`${numberIn} is an odd number`);
}
