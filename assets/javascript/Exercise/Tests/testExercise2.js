/**
 * Test Exercise
 * 
 */

//1
var string2Num = parseInt("666abc");
console.log(string2Num);//Output - 666

//2
function hypotenuse(n ,m) {
    function square(y){
        return y * y;
    }
    return Math.sqrt(square(n) + square(m));
}

const hypo = hypotenuse(4, 5);
console.log(hypo);//Output 6.4031

//3s
var tensSquared = (function(y){
    return y * y *y ;
}(99));

// console.log(tensSquared)