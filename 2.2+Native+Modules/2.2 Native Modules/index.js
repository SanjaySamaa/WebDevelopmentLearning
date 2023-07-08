const fs = require("fs");
// fs.writeFile("hello.txt","Hello From The Other Side2",(err)=>{
//     if(err)throw err;
//     console.log("file has been saved");
     
// });
fs.appendFile("hello.txt","\nhello 2",(err)=>{
    if(err)throw err;
    console.log("file has been appended and saved");});
fs.readFile('hello.txt', "UTF-8",(err, data) => {
    if (err) throw err;
    console.log(data);
  });