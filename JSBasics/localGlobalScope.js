/**
 * Description: Global and local variables
 *              Global, local and block Scope
 * 
 *              Global Scope - visibility all over the javascript Code 
 *              Block Scope  - visibility only inside a piece of code generally wrapped by curly braces 
 */

var x = 3;//Global variable

function showNumber(){
    var y = 10;//Local variable
    console.log( { y } );
    console.log( { x });
}

function f1(){
    console.log({ x });
    // console.log( { y } );
}

showNumber();
f1();

//let variable scope
{
    let a = 3;
    let b = 5;
    console.log(a);
    console.log(b);
}
// console.log(a);//Will get ReferencedError - a is not defined

//var variable scope
{
    var a1 = 4;
    var b1 = 6;
}
console.log("With var variable");
console.log(a1);
console.log(b1);

//Variable declared with let and const always have block Scope. 
{
    const ab = 10;
    console.log("Const variable in block scope ", ab);
}
// console.log("Const variable in outside block ", ab);
