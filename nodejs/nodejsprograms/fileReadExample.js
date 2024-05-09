/**
 * Node JS - Programm to read the file. Basic of Node js
 */

import fs from "fs";
const path = "./nodejs/nodejsprograms/data/deepak/input.txt";
//Here we have used readFile which asynchrounously reads the file 
fs.readFile(path, function(ferr, filedata) {
    if(ferr) return console.log(ferr);
    console.log(filedata.toString());  
});

console.log("End of file program execution");

//Read file with readFileSync method
const strPath = "./nodejs/nodejsprograms/data/inputFile.txt";
const fileData = fs.readFileSync(strPath);//Synchronous function
console.log(fileData.toString());