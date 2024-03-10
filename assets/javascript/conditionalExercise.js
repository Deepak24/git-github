
const firstString = "apple";
const secondString = "banana";
const thirdString = "watermelon";

const str1Length = firstString.length;
const str2Length = secondString.length;
const str3Length = thirdString.length;

if( str1Length < str2Length && str1Length < str3Length){
    console.log(`${firstString} is the smallest string.`);
} else if( secondString <  firstString && secondString < thirdString ) {
    console.log(`${secondString} is the smallest string.`);
} else if( thirdString < firstString && thirdString < secondString ) {
    console.log(`${thirdString} is the smallest string.`);
}else {
    console.log("Found 2 or more strings of same length.");
}
