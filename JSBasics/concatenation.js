/**
 * Descriiption : JS String Concatenation 
 */

let userName = "Deepak";
let age = 35;

let message = "My name is " + userName;
console.log(message);

//Example 2 - String literal with single line
let text = `My name is ${userName} and I am ${age} years old.`;
console.log(text);

//Example 3 - String literal with multiline text
let multilineText = `My name is ${userName} and 
I am ${age} years old.`;
console.log(multilineText);

//Example 4 - With normal string concatenation
console.log("My Name is " + userName + " and I am " + age + " years old" );