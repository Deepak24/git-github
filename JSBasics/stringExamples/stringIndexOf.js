/**
 * Description: JS string indexOf method example
 */

const strDisplayMessage = "My Name is Deepak."
console.log(strDisplayMessage.indexOf("m", 4));


//With normal function
function findCharacter(text, char) {
    const index = text.indexOf(char);
    if(index === -1) {
        return "Char is not found";
    }else{
        return "Char is found ";
    }

    return index;
}

const result = findCharacter("I am Mentor at School.", 'a');
console.log(result);

//With fat arrow function
const findChar = (strText, strChar) => strText.indexOf(strChar) === -1 ? "Char not found." : "Character found!";

const strResult = findChar("I am from Pune!", "P");
console.log(strResult);


// JavaScript to illustrate indexOf() function
function func() {
    // Original string
    var str = 'Departed Train';

    // Finding index of occurrence of 'Train'
    var index = str.indexOf('ed Tr');
    console.log(index);  
}
func();

//Exercise 
const str1 = "hello world";
console.log(str1.indexOf("o", 5));