/**
 * Description : Test Exercise 3
 */

//1
function printProps(p){
    for (var q of p) {
        console.log(q + ":" + p[q] + "n");
    }
}

const arr = [1, 2, 3];
printProps(arr);

/**
 * Output :
1:2n
2:3n
3:undefinedn
 */

//2
const numbers = [1, 2, 3, 4, 5];
const squareNumber = numbers.forEach((num) => num * 2);

console.log(squareNumber);//undefined

//3
var x = 5;
console.log(x);

setTimeout(() => {
    x++;
    console.log(x);
}, 5000);

setTimeout(() => {
    x=0;
}, 5000);
console.log(x);

//Outpput  - 556

//4
var a = 1;
function b() {
	a = 10;  return;
  	function a() {}
}
b();
console.log(a);//Output - 1

//5
function ab(){
    var a = 10;
    return;
}

const res = ab();
console.log("Calling ab function ", res);//undefined

//6
function g(){}

//7
const numbers1 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120];

const alteredNumbers = numbers1.filter(num => num % 2 === 0).reduce((acc, cur) => acc + cur, 0);

console.log(alteredNumbers);//780

//8
var tensquared = (function(y)
{
	return ++y*y++ +y;
}
(99));
console.log(tensquared);//10101

//9
var tensquared = (function(y)
{
	return y*y*y;
}
(99));
console.log(tensquared);//970299

// 10
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, -9, 10];

const result = numbers2.filter(num => {
  for (let i = 2; i < Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
});

console.log(result);//[ 2, 3, 4, 5, 7 ]

//11
var arr12 = [2, 4, 6, 8 ,10];

var value = Math.max.apply(null,arr12);

console.log(value);//10

// //
// var sum = 0;
// function display(){
//     console.log(sum);
//     var sum = 100;
// };
// display();