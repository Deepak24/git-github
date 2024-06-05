/**
 * Description: JS string iteration
 */

let displayString = "I am Deepak Khamkar From Pune."

let count = 0;
for(let char of displayString) {
    if(char === "a") {
        count++;
    }else {
        console.log(char);
    }
}
console.log(count);

//iterating on string using for loop
let myString = "My Name is Deepak.";

for( let i=0; i < myString.length; i++){
    console.log(myString[i]);
}

//Iteration and exit the loop with break keyword
for( let iCnt=0; iCnt < myString.length; iCnt++){
    if(myString[iCnt] === "p") {
        break;
    } else{
        console.log(myString[iCnt]);
    }
}