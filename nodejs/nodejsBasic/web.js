/**
 * Description: Node http web based application
 *              Creating the server on port 5000
 */

let http = require("http");

//create server
http.createServer( function(req, res){
    res.writeHead(200, {'content-type': 'text/plain'});

    res.end("This is example of node js web based application");

}).listen(5000, () => {
    console.log("Server running at http://127.0.0.1:5000")
});