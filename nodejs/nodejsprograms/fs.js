import fs from "fs";
//Check if file is present or not
const path = "data/first.txt";
const file = fs.existsSync(path);
if(!file) {
    //Create and read file
    fs.writeFile(path, "Hello this is fs module", (err) => {
        if(err) throw err;
        console.log("File is created.");
    });
} else {
    //read file data
    fs.readFile(path, (err,data) => {
        if(err) throw err;
        console.log("File Data is " + data);
        fs.unlinkSync(path);//delete file
    });
    console.log("File is there");
}