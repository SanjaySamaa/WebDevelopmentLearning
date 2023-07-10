const express = require("express");
const app = express();

app.get("/",function(req,res){
    res.send("hello! this is the home page of my website");
    // console.log(req);
});
app.get("/contact",(req,res)=>{
    res.send("<h1 style='color:red;text-align:center'>Contact : SanjaySamaa</h1>")
});
app.get("/about",(req,res)=>{
    res.send("I am a Full Stack Developer");
});
app.listen(3000,function(){
    console.log("server started at port 3000");
});
