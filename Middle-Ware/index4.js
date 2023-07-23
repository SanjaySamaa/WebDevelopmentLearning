import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
const __dirname = dirname(fileURLToPath(import.meta.url));
const port = 3000;
// app.set(express.static("public"));
// let streetName;
let name;
const middleware = (req,res,next)=>{
   name = req.body["street"]+req.body["pet"];
  next();
};
app.use(middleware);
app.get("/",(req,res)=>{
  res.sendFile(__dirname +"/public/index.html");
});

app.post("/submit",(req,res)=>{
  // let name = streetName.concat(petName);
  res.write("<h1>Your combined name is a</h1>");
  res.write(`<h2>${name}</h2>`);
  res.send();
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
