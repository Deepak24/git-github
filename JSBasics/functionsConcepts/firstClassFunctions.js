/**
 * Description : First Class Functions
 *              A programming language is said to have First-class functions 
*               if functions in that language are treated like other variables. 
                Functions are treated like value and are just another type of object
 */
//Assigned funtion to variable
const getMessage = function() {
    console.log("Hello Deepak Welcome!!");
}

getMessage();

//Code 2
function wrapper() {
    return "Welcome to World";
}

function greetMessage(inner, strName){
    // let message = inner();
    console.log(inner(), strName);
}
//Passing function as argument to function which is called Higher Order function
greetMessage(wrapper, "Deepak");

//3
function displayMessage(){
    function wrapper1(){
        let strName = "Deepak";
        console.log(strName, "Welcoming you!!");
    }
    return wrapper1;
}

const output = displayMessage();
output();
displayMessage()();

//4
const Arithmetic = {
    add : (a, b) => {
        return `${a} + ${b} = ${a+b}`;
    },
    subtraction : (a,b) =>{
        return `${a} - ${b} = ${a-b}`;
    },
    multiplication : (a, b) => {
        return `${a} * ${b} = ${a * b}`;
    },
    division : (a,b) => {
        if (b != 0 ) return `${a} / ${b} = ${ a / b }`;
        return "Can not divide by zero!!";
    }
}

console.log(Arithmetic.add(100, 100));
console.log(Arithmetic.subtraction(100, 50));
console.log(Arithmetic.multiplication(20, 5));
console.log(Arithmetic.division(20, 5));