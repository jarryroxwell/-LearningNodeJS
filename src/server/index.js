var fs = require("fs");

fs.unlink('hello_my_world-2.txt', ()=>{
    console.log("file deleted");
});

/* fs.mkdir("newone", ()=>{}); */
fs.rmdir("newone", ()=>{});