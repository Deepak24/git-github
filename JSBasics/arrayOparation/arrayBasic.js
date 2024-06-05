/**
 * Description: Defining the array 
 *
 */
//Initialize when declaring
var House = ["1BHK", "2BHK", "3BHK", "4BHK"];
console.log(House);

//Initializing while declaration - Create array with 5 elements
var House1 = new Array(10, 20, 30, 40, 50);
console.log(House1);

var Home = new Array("1BHK");

//Array can store different data type
var House2 = ["1BHK", 250000, "2BHK", 300000, "Rent", true];
console.log(House2);
console.log("cost is " + House2[3]);

//Array iteration with for loop
var arrHouse = ["1BHK", 250000, "2BHK", 350000];
for (let iCnt = 0; iCnt < arrHouse.length; iCnt++){
    console.log(arrHouse[iCnt]);
}

//Iterating with every function

var arrNum = [1, 2, 3, 4, 5];
const arrBelowFive = xEle => xEle < 5;

if(arrNum.every(arrBelowFive)) {
    console.log("All are less than 5");
}else {
    console.log("We have at least one number less than 5");
}

//Map applies function over each element on array and then returns
var arrMap = [6, 5, 1, 2, 3, 4];

const square = x => Math.pow(x, 2);
const squares = arrMap.map(square);
console.log(arrMap);
console.log(squares);

//With array filter we can filter the result
const even = x1 => x1 % 2 === 0;
const evens = arrMap.filter(even);
console.log(arrMap);
console.log(evens);

//With array reduce we can return in to single value with some logic
var arrRed = [1, 2, 3, 4, 5];
const arrSum = (acc, curr) => acc + curr;
const sum = arrRed.reduce(arrSum, 0);

console.log(arrRed);
console.log(sum);


//With some we can check if it can pass some test
var arrSome = [ 1, 2, 3, 4, 5, 6 ];
 
const lessthanFourCheck = (element) => element < 4 ;
const lessthanFour = arrSome.some(lessthanFourCheck);
 
console.log(arrSome);
if(lessthanFour){
    console.log("At least one element is less than 4" )
}else{
    console.log("All elements are greater than 4 ")
}