var http = require('http');
http.createServer(function (req, res) {
  res.write("<h1>This is node js app</h1>");
  res.end();
}).listen(5600);
