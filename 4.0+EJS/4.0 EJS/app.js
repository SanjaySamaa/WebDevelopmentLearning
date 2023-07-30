import express from "express";
import bodyParser from "body-parser";
import ejs from "ejs";

const app = express();
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.set(express.static("public"));
const port = 3000;

app.get("/",(req,res)=>{
    res.render("index",{day:"weekend",advice:"go sleep nigga"});
});

app.listen(port,()=>{
    console.log("server is up in "+port);
});