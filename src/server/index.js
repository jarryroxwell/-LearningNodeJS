var http = require('http'),
    fs = require('fs');


var mr = fs.createReadStream('./.tempfile/text.txt', 'utf8'); 
var mw = fs.createWriteStream('./.tempfile/text_new.txt'); 

mr.on('data', (chunk)=>{
    console.log("/n###EW DATA###/n");
    mw.write(chunk);
});

