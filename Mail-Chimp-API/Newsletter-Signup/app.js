const express = require("express");
const request = require("request");
const app = express();
const bodyParser = require("body-parser");
const https = require("https");

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/signup.html");
});

app.post("/",function(req,res){
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    // console.log(email);
    // res.send(`hello ${firstName}`);
    const data = {
        members:[{
       email_address:email,
       status:"subscribed",
       merge_fields:{
        FNAME:firstName,
        LNAME:lastName
       }
    }
]};
const jsonDate = JSON.stringify(data);
const url = ""
const options = {
    method:"POST",
    auth:""
};
var request = https.request(url,options,function(response){
    if(response.statusCode===200){
    response.on("data",(data)=>{
        // console.log(JSON.parse(data));
        res.sendFile(__dirname+"/success.html");
    });}
    else{
        // res.send("some thing error happen "+response.statusCode);
        res.sendFile(__dirname+"/failure.html");
    }
});
// request.write(jsonDate);
request.end();

});

app.get("/failure",function(req,res){
    res.redirect("/");
});

app.listen(process.env.PORT || 3002,function(){
    console.log("server running on port 3002");
});

//list id =
//api key = 