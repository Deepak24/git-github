/**
 * Node JS - Programm to read the file. Basic of Node js
 */

import fs from "fs";
const path = "./nodejs/nodejsprograms/data/deepak/input.txt";
//Here we have used readFile method which asynchrounously reads the file 
fs.readFile(path, function(ferr, filedata) {//This will execute asychronously after other code executes
    if(ferr) return console.log(ferr);
    console.log(filedata.toString());  
});

console.log("End of file program execution");

//Read file with readFileSync method
const strPath = "./nodejs/nodejsprograms/data/inputFile.txt";
const fileData = fs.readFileSync(strPath);//Synchronous function
console.log(fileData.toString());

//Output will be 
/*
End of file program execution
Hello This is text file.
We are reading this file with readFileSync method which works synchronously.
Hello Programmer!!!
Learn NodeJS with Examples
*/
