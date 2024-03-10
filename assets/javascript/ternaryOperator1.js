const totalMarked = 60;

const strMessage = (totalMarked < 40 ) ? "You need more marks!" : "You are score is goood";

console.log(strMessage);

//Second example
const totalScoredMark = 70;

// if(totalScoredMark < 40 ) {
//     console.log("You need to work hard!");
// } else if(totalScoredMark < 60 ){
//     console.log("B grade");
// } else if(totalScoredMark < 75) {
//     console.log("A Grade");
// } else if(totalScoredMark < 85) {
//     console.log("A+ Grade");
// } else {
//     console.log("Genius");
// }

//Use of ternary operator 
const result = totalScoredMark < 40 ? "You need to work hard" : totalScoredMark < 60 ? "B Grade" : totalScoredMark < 75 ? "A Grade" : totalScoredMark < 85 ? "A+ Grade" : "Genius";
console.log(result);