const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.listen(3000,()=>{
    console.log("server started at port 3000");
});
app.get("/",(req,res)=>{
    // res.send("helloworld");
    res.sendFile(__dirname+"/index.html");
    // app.post("/",(req,res)=>{
    //     res.send(res.body);
    // })
}); 
app.post("/",(req,res)=>{
    // res.send(<p></p>res.body);
    // console.log(req.body);
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;
    res.send("thanks for submitting and your answer is "+result);
});