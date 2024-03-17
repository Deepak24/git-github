/**
 * Star Pattern: Write program to print star pattern
 */

const symbol = "* ";
console.log(symbol.repeat(1));
console.log(symbol.repeat(2));
console.log(symbol.repeat(3));
console.log(symbol.repeat(4));
console.log(symbol.repeat(5));

//Using the for loop
console.log("Usig for loop");
for (let i=0; i<= 5; i++){
    console.log(symbol.repeat(i));
}

//Reverse order
console.log("Reverse order star pattern.")
for(let revCnt = 5; revCnt >= 1; revCnt--){
    console.log(symbol.repeat(revCnt));
}

//Length of string
let userName = "Deepak B Khamkar";
let lenCount = 0;
for(let icnt = 0; icnt < userName.length; icnt++ ){
    lenCount++;
}
console.log(`The number of characters in the string are ${lenCount}`);