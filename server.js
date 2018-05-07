var fs = require('fs');
var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
//create a file named mynewfile3.txt:
fs.writeFile('mynewfile3.txt', req.url, function (err) {
  if (err) throw err;
  console.log('Saved!');
});
}).listen(5000); 
