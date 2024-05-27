/**
 * Description: Reverse words of a string without changing there order
 * Input - react is a library
 * Output - tcaer si a yrarbil
 */

const string1 = "react is a library";
function reverseWordsOfString(str) {
    let arrOfWords = str.split(" ");
    let arrReverseWords = arrOfWords.map((word) => word.split("").reverse().join(""));
    return arrReverseWords.join(" ");
}

const result = reverseWordsOfString(string1);
console.log(result);//tcaer si a yrarbil
