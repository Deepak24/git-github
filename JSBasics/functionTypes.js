/**
 * Description: Different Function types
*/

//Passing function as a parameter to another function

function calculate(operation, num1, num2) {
    return operation(num1, num2);
}

const sum = function(a, b) {
    return a + b;
}

const difference = function(a, b){
    return a - b;
}

console.log(calculate(sum, 5, 3)); // Output 8
console.log(calculate(difference, 5, 3)); //Output 2

//Returning the function from another function

function multiplyBy(factor){
    return function(number){
        return number * factor;
    }
}

const double = multiplyBy(2);
const triple = multiplyBy(3);

console.log(double(5));//Output - 10
console.log(triple(5)); // Output - 15


//Closure functions
function outer(){
    let count = 0;

    function inner(){
        count++;
        console.log(count);
    }
    return inner;
}

let counter = outer();

counter();
counter();
counter();