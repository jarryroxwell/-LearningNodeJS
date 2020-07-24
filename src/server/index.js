var http = require('http'),
    fs = require('fs');




var server = http.createServer((req, res)=>{
    console.log(req.url);
    res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
    });
    
    var mr = fs.createReadStream('./src/client/index.html', 'utf8'); 
    mr.pipe(res)



});

server.listen(3000, '127.0.0.1');
