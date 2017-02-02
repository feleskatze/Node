var http = require('http');
var server = http.createServer();
server.on('request', function(req, res){
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.write('Hello World');
	res.end();
});
server.listen(3000,'192.168.11.16');
console.log("server listening ...");
