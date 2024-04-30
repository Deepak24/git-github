/**
 * Description: JavaScript basic question answers - Content 3
 */

//1
var string2Num = parseInt("666abc");
console.log(string2Num);//Output - 666

//2
var article = {
    "main title": "Hello Peter",
    
    'sub-title': "I am Captain America",
    
    author: {
        firstname: "Steve",
        surname:"Roger",

        authorProperty : {
            firstProperty : "Has a shield",
            secondProperty : "He can fight all day"
        }
    }
    
    
}
    
article.author.authorProperty.firstProperty = "Can use a hammer now";
console.log(article.author.authorProperty.firstProperty);
//Output - Can use a hammer now

//3
function hypotenuse(n ,m) {
    function square(y){
        return y * y;
    }
    return Math.sqrt(square(n) + square(m));
}

const hypo = hypotenuse(4, 5);
console.log(hypo);//Output 6.4031

//4
var tensSquared = (function(y){
    return y * y *y ;
}(99));

// console.log(tensSquared)