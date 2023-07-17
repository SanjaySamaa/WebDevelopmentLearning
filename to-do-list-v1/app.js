// const express = require("express");
// const bodyParser = require("body-parser");
// const app = express();

// app.get("/",function(req,res){
//     res.send("up and running");
// });




// app.listen(3000,function(){
//     console.log("server started at port 3000");
// });
// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();
// app.use(bodyParser.urlencoded({extended:true}));
// app.set('view engine','ejs');
// app.use(express.static("public"))
// var toDoLists = [];

// app.get('/',function(req,res){
//     res.sendFile(__dirname+"/index.html");
// });
// app.post("/",function(req,res){
//     var item = req.body.item;
//     toDoLists.push(item);
//     toDoLists.forEach(element => {
//         res.render("lists",{list:element});
//         // res.send();
//     });
    
// })

// app.listen(3000,function(){
//     console.log('server started at port 3000');
// });
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");
app.use(express.static("public"));

const date = new Date();
var day = date.getDay();
var options = {
        weekday:'long',
        year:'numeric',
        month:'long',
        day:'numeric'
};
var item = [];

app.get("/",(req,res)=>{
        
//     switch(day){
//         case 0: day ="sunday";
//                 break;
//         case 1: day ="monday";
//                 break;
//         case 2: day ="tuesday";
//                 break;
//         case 3: day ="wednesday";
//                 break;         
//         case 4: day ="thursday";
//                 break;
//         case 5: day ="friday";
//                 break;
//         case 6: day ="saturday";
//                 break;
//         default:
//                 day = "some thing wrong with the code";  
//     }
    // sendFile(__dirname+"/index.html");
//     if(day === 'sunday' || day === 'saturday'){
//         // res.write("today is weekend day \n");
//         res.render("lists",{dayOfWeek:day+" and it's a weekend day you can rest for while"});
//         // res.send();
//     }else{
//         // res.write("today is not a weekend day \n");
//         res.render("lists",{dayOfWeek:day});
//         // res.send();
//     }
        // res.sendFile(__dirname+"/index.html")
        // console.log(day);
        
        day = date.toLocaleDateString("en-US",options);
        res.render("lists",{dayOfWeek:day,items:item});
});
app.post("/",(req,res)=>{
        var i = req.body.item
        item.push(i);
        // res.render("lists",{items:item});
        // res.send();
        // console.log(item);
        res.redirect("/");
       
});
app.listen(process.env.PORT||3000,()=>console.log("server started on port 3000"));