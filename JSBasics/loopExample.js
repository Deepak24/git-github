/**
 * Loop - JS for loop example
 * Nested for loop
 */
for(i=0; i< 10; i++){
    console.log("Hello", i);
}

//String with for loop
const userName ="Deepak Khamkar";
const stringLength = userName.length;
for(let i=0; i < stringLength; i++){
    console.log(userName[i]);
}

//Nested for loop
for(let count = 0; count < 10; count++){
    for(let j=1; j <= 2; j++) {
        console.log(`The count from first loop ${count} and j is ${j}`);
    }
}

//While loop example

let countI = 0;
while( countI <= 10){
    console.log(countI);
    countI++;
}

//Do while loop
let iDo = 0;
do{
    console.log(iDo);
    iDo++;
}while(iDo <=10);

