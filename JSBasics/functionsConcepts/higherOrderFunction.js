/**
 * Description : Higher Order function
 *             - Higher-Order function is a function that receives a function as an argument 
 *                  or returns function as output.
 */

function sayHello(){
    return "Hello";
}

//Function helloMessage receives funtion sayHello as a parameter
// Therefore helloMessage is Higher Order function

function helloMessage(sayHello){
    console.log(sayHello(), "World");
}

helloMessage(sayHello);

function func1(){
    return function(){
        console.log("Hello World!!");
    }
}

//Accepting the function returned from func1() and calling it  so func1 is Higher Order function
const func2 = func1();
func2();

//Power of number
const arr1 = [1,2,3,4];

function squareOfNumber(){
    let arrSquareNum = [];
    for(let number1 of arr1) {
        arrSquareNum.push(number1 ** 2);
    }
    return arrSquareNum;
}

const output = squareOfNumber(arr1);
console.log(output);//Output - [ 1, 4, 9, 16 ]