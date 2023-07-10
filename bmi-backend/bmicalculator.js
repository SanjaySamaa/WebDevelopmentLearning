const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/bmi.html");
});
app.post("/",function(req,res){
    // console.log(req.body);
        var weight = parseFloat(req.body.weight);
        var height = parseFloat(req.body.height);
        var result = Math.round(weight/Math.pow(height,2));
        res.send(`<h1 style="text-align:center ; color:red;">Your BMI is ${result}</h1>`);
   
});
app.listen(3000,function(){
    console.log("server started at port 3000");
});