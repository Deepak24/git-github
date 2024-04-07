/**
 * Test Exercise
 * 
 */

var string2Num = parseInt("666abc");
console.log(string2Num);

function hypotenuse(n ,m) {
    function square(y){
        return y * y;
    }
    return Math.sqrt(square(n) + square(m));
}

const hypo = hypotenuse(4, 5);
console.log(hypo)


var tensSquared = (function(y){
    return y * y *y ;
}(99));

// console.log(tensSquared)