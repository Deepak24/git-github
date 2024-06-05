/**
 * Description: We are covering the string methods here
 * charAt() and charCodeAt()
 */

const strName1 = "hello";
console.log(strName1.charAt(2));
console.log(strName1.charCodeAt(0));

const strDisplayMessage = "I am mentor at School."
const index = 10;

const asciiCode = strDisplayMessage.charCodeAt(index);

console.log(`The ascii code of ${strDisplayMessage.charAt(index)} is ${asciiCode}`);


//Exercise - encode the string with ascii 

const strName = "School";
let arrNewName = [];
for( let charCnt = 0; charCnt < strName.length; charCnt++ ) {
    const intAsciiCode = strName.charCodeAt(charCnt);
    const intNewAsciiCode = intAsciiCode - 2;//Get ascii code with char at -2 value
    //Push ascii code to array
    arrNewName.push(intNewAsciiCode);
} 
// console.log(arrNewName);
const strNewName = (arrNewName) => {
    return String.fromCharCode(...arrNewName);
}
console.log(`The original string "${strName}" converted to '${strNewName(arrNewName)}'`);