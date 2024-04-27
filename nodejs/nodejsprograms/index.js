/**
 * Description : Node JS Program
 *              Performing the file operation with Node js
 */

import http from 'http';
import fs from 'fs';

const PORT = 8899;
const server = http.createServer((req,res) => {
    const path = "data/details.txt";
    const file = fs.existsSync(path);

    if(req.url === "/") {
        if(fs.existsSync("data/deepak")) {//Check if file already exists
            res.end("Already exist");
        } else {
            fs.mkdirSync("data/deepak");
            res.end("Folder Created.");
        }
    } else if(req.url === "/createfile") {//create file
        if(file) {
            res.end("File already exists.");
        }else {
            fs.writeFile(path, "Hello creating file", (err) => {
                if(err) throw err;
                res.end("File Created Successfully");
            });
        }
    } else if(req.url === "/readfile") {//Read file 
        if(file) {
            fs.readFile(path, (err,data) => {
                if(err) throw err;
                res.end("File Data is : " + data);
            });
        }else {
            res.end("No File Found");
        }
    } else if(req.url === "/appendfile") {//append file
        if(file) {
            fs.appendFile(path, "This is appended data", (err) => {
                if(err) throw err;
                res.end("Data appended successfully.");
            });
        } else {
            res.end("No File Found");
        }
    } else if(req.url === "/deletefile") {//Delete file operation
        if(file) {
            let ref = fs.unlinkSync(path);
            if(ref) {
                res.end("File Deleted");
            } else {
                res.end("File not deleted");
            }
        } else {
            res.end("No File Found");
        }
    } else {
        res.end("Invalid URL");
    }

});

//Listen server on 8899 port
server.listen(PORT, (err) => {
    if(err) throw err;
    console.log(`The server work on ${PORT} number.`);
});