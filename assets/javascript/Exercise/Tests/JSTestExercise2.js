/**
 * Description : JS Exercise test - 2
 */

/**
 * Exercise test
 */

//1
console.log(typeof null); // Output - object

//2
console.log(2 + "2" - 1); // 21

//3
var x = 10;
function foo() {
  console.log(x);
  var x = 20;
}
foo();
console.log(x);

/* /Output
undefined
10
*/

//4
console.log(typeof NaN);//number

//5
const str1 = "Welcome to the world of JavaScript!";
let output1 = "";

for (let i = 0; i < str1.length; i++) {
    if (i % 2 === 0) {
        output1 += str1.charAt(i).toUpperCase();
    } else {
        output1 += str1.charAt(i).toLowerCase();
    }
}
output1 = output1.split(" ").reverse().join("-").concat("!");
console.log(output1);//JaVaScRiPt!-oF-wOrLd-tHe-To-WeLcOmE!

//6
var x = 10;
var y = 5;

console.log(x + y++);//15

//6

const createMember = ({ email, address = {}}) => {
  const validEmail = /.+@.+..+/.test(email)
  if (!validEmail) throw new Error("Valid email pls")
  return {
          email,
          address: address || null
  }
}
const member = createMember({ email: "my@email.com" })
console.log(member);//{ email: 'my@email.com', address: {} }

//7
const a = false || {} || null;
const b = null || false || '';
const c = [] || 0 && true; 
console.log(a, b, c);//{}  []
console.log(` a is ${a}, b is ${b}, c is ${c}`);//{}  []

//8
const text = "The quick brown fox jumps over the lazy dog";
let newText = "";

const words = text.split(" ");
for (let i = words.length - 1; i >= 0; i--) {
  newText += words[i] + " ";
}

console.log(newText.trim());

//9
function printNames(array) {
  for (var i = 0; i < array.length; i++) {
    setTimeout(() => console.log(array[i]), 1000);
  }
}

var names = ["Suresh", "Sumit", "Sujit", "Sachin", "Saransh"];
printNames(names);

/**
 * Output
undefined
undefined
undefined
undefined
undefined
 */

//10
function foo(x) {
  return function(y) {
    return x + y;
  }
}

const bar = foo(5);
console.log(typeof bar, bar(3));//function 8

//11
const arr = [1, 1, 2, 3, 5, 8, 13];

const output = arr.map((num) => {
    return Math.pow(num, 2);
}).filter((num) => {
    return num % 2 === 0;
}).reduce((a, b) => {
    return a + b;
}, 0);//0 is passed to reduce method as initial value

console.log(output);//68

//12
const str = "123456789";
let i = 0;

const ls1 = [];
const ls2 = [];

for (i = 0; i < str.length / 2; i++)
    ls1.push(str[i]);

for (i = i - 1; i < str.length; i++)
    ls2.push(str[i]);

while (ls1.length) {
    ls2.push(ls1.pop());
}

while (ls2.length) {
    console.log(ls2.pop());
}
//Output
// 1
// 2
// 3
// 4
// 5
// 9
// 8
// 7
// 6
// 5