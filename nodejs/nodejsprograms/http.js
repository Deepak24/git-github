/**
 * Description : Create new server to listen client requests using http module 
 *                  and bind server to 7788 port
 */

import http from "http"; //import http package
const PORT = 7788; //define port
const server = http.createServer((req, res) => {
    // console.log(req.headers);
    // res.end("Hello, Deepak welcome to Node server!");
    if(req.url === "/") {
        res.writeHead(200, {'content-type' : 'text/html'});
        res.write('<html> <body><h2>Home Page</h2> </body></html>');
        res.end("Home page");
    } else if( req.url === "/about" ) {
        res.end("About Page");
    } else if(req.url === "/gallery") {
        res.end("Gallery Page.");
    } else if(req.url === "/data") {
        const proData = [
            {id: 1, proName: "A", price: 125},
            {id: 2, proName: "AA", price: 125},
            {id: 3, proName: "B", price: 225},
            {id: 4, proName: "CA", price: 325},
            {id: 5, proName: "CD", price: 176},
            {id: 6, proName: "D", price: 345},
        ];
        res.writeHead(200, {'content-type' : 'application/json'});
        res.write(JSON.stringify({"proData": proData}));
        res.end();
    } else {
        res.end("Invalid URL");
    }

})

server.listen(PORT, (err) => {
    if(err) throw err;
    console.log(`Server running on port ${PORT}`);
})

