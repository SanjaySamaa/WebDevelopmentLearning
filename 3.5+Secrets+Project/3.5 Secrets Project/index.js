//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import { fileURLToPath } from "url";
const middleWare = require(__dirname+"/middleWare.js")
const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));
let isVerified = false;
const savedPassword = "ILoveProogramming";

app.use(bodyParser.urlencoded({extended:true}));
 
app.use(middleware);

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/public/index.html");
});
app.post("/check",(req,res)=>{
    if(password === savedPassword){
        res.sendFile(__dirname+"/public/secret.html");
    }else{
        res.redirect("/");
    }
});