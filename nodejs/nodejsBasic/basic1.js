/**
 * Description: Node JS basic programs
 *              Loosely type language example
 */

//Variable store integer data type 
let a = 35;
console.log(a, typeof a);

//Variable store string data type
a = "Hello World";
console.log(a, typeof a );

//Variable store boolean data type
a = true;
console.log(a, typeof a);

//variable stores undefined data type
a = undefined;
console.log(a, typeof a );


//Node Objects
let company = {
    empName : "Deepak",
    address : "MG Road Pune",
    contact : 9898989800,
    email: "test@test.com"
}

console.log("object details", company);
console.log("Type of object is ", typeof company);

//String operations
let x = "Welcome to Node JS ";

let y = 'Node.js Tutorials';

let z = ['Pune', 'for', 'Pune'];

console.log(x);

console.log(y);

console.log("Concat Using (+) :", (x + y));

console.log("Concat Using Function :", (x.concat(y)));

console.log("Split string: ", x.split(' '));

console.log("Join string: ", z.join(', '));

console.log("Char At Index 5: ", x.charAt(5));

///Node is having extra data type as buffer
let b = new Buffer.alloc(10000);//Creates buffer
let strt = " ";
b.write(strt);
console.log(strt.length);
console.log(b.length);