var http = require('http'),
    fs = require('fs');


/* 
./src/client/index.html
./src/client/index-red.html
*/

var server = http.createServer((req, res)=>{

    switch (req.url) {
        case '/favicon.ico':
            res.end();
            break
        case '/':
            res.writeHead(200, {
                'Content-Type': 'text/html; charset=utf-8'
            });
            fs.createReadStream('./src/client/index.html').pipe(res);
            break;
    
        case '/red':
            res.writeHead(200, {
                'Content-Type': 'text/html; charset=utf-8'
            });
            fs.createReadStream('./src/client/index-red.html').pipe(res);
            break;
    
        default:
            res.writeHead(404, {
                'Content-Type': 'text/plain; charset=utf-8'
            });
            res.end("404");
            break;
    }
//    res.end("Hello World! ||| Привет Мир!");
//    console.log(req.url);
});

server.listen(3000, '127.0.0.1');
