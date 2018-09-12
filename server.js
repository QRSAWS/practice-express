// this will be a practice using http module
var http = require("http");

// need to define (assign) port to 8080 or 3000
var PORT = 8080;

// defining function handlerequest to serve text string to a page
function handleRequest (request, response){
	response.end("how are you doing?" + request.url);
};

// create a server and run handlerequest function at instance of 
// server creation
var server = http.createServer(handleRequest);
// run server and get confirmation of server running
server.listen(PORT, function(){
	console.log("server listening on http://localhost:%s", PORT);
});