/**
 * Description: Destructuring
 */
//Array destructuring
var x, y;
[x, y] = [10, 20];
console.log(x);// Ouput 10
console.log(y);// output 20

var a, b;
[a, b, ...restof] = [10, 20, 30, 40, 50];
console.log(a);//Output - 10
console.log(b);//Output - 20
console.log(restof);//Output - [30, 40, 50]

//Nested array displaying with example and rest operator
const arrExample = [1,2,3, ["JS", "HTML", "CSS"], 5, 6, 7];
const [, , , courses, ...arrRest] = arrExample;
console.log("Checking nested array example <br/>");
console.log(courses);
console.log(arrRest);

//Object destructuring
var x1, y1;
({x1, y1 } = {x1 : 10, y1: 20});
console.log(x1);
console.log(y1);

var m,n;
({x, y, ...restof} = {x: 10, y: 20, m: 30, n: 40});
console.log(x); // 10
console.log(y); // 20
console.log(restof); // {m: 30, n: 40}



var [firstName,,thirdName] = ["alpha", "beta", "gamma", "delta"];
         
console.log(firstName);//"alpha"
console.log(thirdName);//"gamma"

var [firstName,,...lastName] = ["alpha", "beta", "gamma", "delta"];
         
console.log(firstName);//"alpha"
console.log(lastName);//"gamma, delta"


var arrNames = ["alpha", "beta", "gamma", "delta"];
var [firstName, secondName] = arrNames;
console.log(firstName);//"alpha"
console.log(secondName);//"beta"
 
//After swapping
[firstName, secondName] = [secondName, firstName]
     
console.log(firstName);//"beta"
console.log(secondName);//"alpha"

//object destructuring
var objMarks = {x2: 21, y2: -34, z2: 47 };
 
const { x2, y2, z2 } = objMarks; // x = 21, y = -34, z = 47

console.log(x2);
console.log(y2);
console.log(z2);