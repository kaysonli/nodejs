var http = require("http");
var url = require("url");

function start(route, handle) {
  function onRequest(request, response) {
    //.log("Request received.");
	var pathname = url.parse(request.url).pathname;
	route(handle, pathname);
	console.log("request for "+ pathname +" received");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start;