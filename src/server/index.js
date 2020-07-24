var http = require('http'),
    fs = require('fs');


var mr = fs.createReadStream('./.tempfile/text.txt', 'utf8'); 
var mw = fs.createWriteStream('./.tempfile/text_new.txt'); 

mr.on('data', (chunk)=>{
    console.log("/n###EW DATA###/n");
    mw.write(chunk);
});

/*
var server = http.createServer((req, res)=>{
    res.writeHead(200, {
        'Content-Type': 'text/plain; charset=utf-8'
    });
    res.end("Hello World! ||| Привет Мир!");
    console.log(req.url);
});

server.listen(3000, '127.0.0.1');
 */
