var http = require('http');

var server = http.createServer((req, res)=>{
    res.writeHead(200, {
        'Content-Type': 'text/plain; charset=utf-8'
    });
    res.end("Hello World! ||| Привет Мир!");
    console.log(req.url);
});

server.listen(3000, '127.0.0.1');