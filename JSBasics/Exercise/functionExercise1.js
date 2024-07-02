/**
 * Function execise
 */

function calculateArea(length, width){
    if(length > 0 && width > 0){
        return length * width;
    } else {
        return "Invalid Dimensions!";
    }
}

console.log(calculateArea(5, 7));
console.log(calculateArea(0, 10));
console.log(calculateArea(-3, 4));
console.log(calculateArea("2", 6));

// let userName = "Ram";

// function sayHello(){
//     console.log("Hello, " + userName + "!");
//     let userName = "Shyam";
// }

// sayHello();

let str = "Hello World";

console.log(str.slice(-5));
console.log(str.substring(-5));
console.log(str.substr(-5));

//This is from exercise program
function createCounter(){
    let count = 0;
    return function() {
        count++;
        console.log(count);
    };
}

const counter1 = createCounter();
const counter2 = createCounter();

counter1();//1
counter1();//2
counter2();//1
counter2();//2