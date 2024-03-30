/**
 * Description : Exercise test
 */


/**
 * Exercise test
 */

//1
console.log(typeof null);

//2
console.log(typeof NaN);

//3
const str1 = "Welcome to the world of Javascript!";
const output = str1.split(" ").reverse().join("-").concat("!");
console.log(output);

//4
const a = false || {} || null;
const b = null || false || '';
const c = [] || 0 && true;
console.log(a,b,c);

//5
console.log("4" + 3*4);

//6
function foo(x){
    return function(y) {
        return x + y;
    }   
}

const bar = foo(5);
console.log(typeof bar, bar(3));

//7
const str2 = "123456789";
let i = 0;

const ls1 = [];
const ls2 = [];

for (i = 0; i < str2.length / 2; i++)
    ls1.push(str2[i]);

for (i = i - 1; i < str2.length; i++)
    ls2.push(str2[i]);

while (ls1.length) {
    ls2.push(ls1.pop());
}

while (ls2.length) {
    console.log(ls2.pop());
}