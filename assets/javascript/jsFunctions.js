/**
 * JavaScript Functions:
 */

//Function to calculate the addition
function addNumber(number1, number2){
    console.log(`Addition of ${number1} and ${number2} is ${number1 + number2}`);
}

addNumber(5,6);

function subNumber(Num1, Num2){
    console.log(`Subtraction of ${Num1} and ${Num2} is ${Num1 - Num2}`);
}

subNumber(10, 5);

/**
 * Anonymous function
 */
var greet = function(){
    console.log("Welcome to Greet!");
};

greet();

//Anonymous function with parameter
var greetWithParam = function(string1) {
    console.log("Welcome "+string1);
};

greetWithParam("Deepak");

//function with settimeout method
setTimeout( function(){
    console.log("Welcome with setTimeout function ");
}, 2000);

//Arrow function
var arrowFunc = () => {
    console.log("Welcome to Arrow Function!!");
}

//call the arrow function
arrowFunc();

function greet(name) {
    console.log('${name}, Welcome to HERE!');
}

greet(Geek);

function greet1(name1){
    return "Hello, " + (name1 || "Stranger") + "!";
}

console.log(greet1("Geeker"));
console.log(greet1());