/**
 * Node JS - This file reads 
 */

import fs from "fs";
const path = "./nodejs/nodejsprograms/data/deepak/input.txt";
fs.readFile(path, function(ferr, filedata) {
    if(ferr) return console.log(ferr);
    console.log(filedata.toString());  
});

console.log("End of file program execution");