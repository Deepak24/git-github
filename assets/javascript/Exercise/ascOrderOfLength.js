/**
 * Description: Arranging the words in the sentence with ascending order of length
 * Input - w3School is a great learning platform
 * Output - a is great w3School learning platform
 */

const stroriginal = "w3School is a great learning platform";

function sortTextByWordLength(str) {
    let arrOfWord = str.split(" ");
    arrOfWord.sort((a, b) => a.length - b.length );
    return arrOfWord.join(" ");
}

const result = sortTextByWordLength(stroriginal);
console.log(result);

