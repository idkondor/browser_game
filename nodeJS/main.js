var http = require("http");
const fs = require('fs');

http.createServer(function(req, res){
    fs.readFile('ComputerGeek.html',function (err, data){
        res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
        res.write(data);
        res.end();
    });
}).listen(3500);
