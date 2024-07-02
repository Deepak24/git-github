/**
 * Description: JavaScript basic question answers
 */

//1
console.log(2 * '2');//4

//2
function calculateArea(length, width) {
    if (length > 0 && width > 0) {
        return length * width;
    } else {
        return "Invalid dimensions!";
    }
}

console.log(calculateArea(5, 7));//35
console.log(calculateArea(0, 10));//Invalid dimensions!
console.log(calculateArea(-3, 4));//Invalid dimensions!
console.log(calculateArea("2", 6));//12

// 3
let x = 1;
if (true) {
  let x = 2;
}
console.log(x);//1

//4
/*let name = "Ram";
function sayHello() {
 console.log("Hello, " + name + "!");
 let name = "Shyaam";
}
sayHello();//ReferenceError: Cannot access 'name' before initialization
*/

//5
let str = "Hello World";
console.log(str.slice(-5));//World
console.log(str.substring(-5));//Hello World - Start or end values less than 0, are treated as 0.
console.log(str.substr(-5));//World

//6
console.log(1 + "2" + "2");//122
console.log(1 + +"2" + "2");//32
console.log(1 + -"1" + "2");//02
console.log(+"1" + "1" + "2");//112
console.log("A" - "B" + "2");//NaN2
console.log("A" - "B" + 2);//NaN

//7
function createCounter() {
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
  counter1();//3