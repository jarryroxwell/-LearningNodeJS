var fs = require("fs");

var fread = fs.readFileSync(__dirname+"/text.txt", "utf8");
console.log(fread);

var mes = "hello world";
var fwrite = fs.writeFileSync("hello_my_world.txt", mes);

fs.readFile(__dirname+"/text.txt", "utf8", (err, data)=>{
    console.log(data);
});

fs.writeFile("hello_my_world-2.txt", mes, (err, data)=>{
    console.log('check');
});

console.log("test");