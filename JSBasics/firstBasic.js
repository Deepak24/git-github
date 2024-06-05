/*
Topic: We are writing basic javascript 
*/
console.log("Hello World!!");

console.log("My name is Deepak");
console.log(7+43);


//
// console.log(a);
// var a =10;

// function abc(){
//     a =100;
//     console.log(a);
// }

// console.log(a);

// abc();

// console.log(a);

//Exercise
var a =10;
function first(){
    function second(){
        console.log(a);
        var a = 99;
            function third(){
                console.log(a);
            }
            third();
    }
    var a = 100;
    second();
    console.log(a);
}

first();
console.log(a);