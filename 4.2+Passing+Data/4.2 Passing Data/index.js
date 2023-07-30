import express from "express";
import bodyParser from "body-parser";
// import ejs from "ejs";
const app = express();
const port = 3000;

app.set("view engine",'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

let namesArray = [];


app.get("/", (req, res) => {
  res.render("index",{namesArray});
  console.log(namesArray);
});

app.post("/submit", (req, res) => {
  // name.fname=req.body.fName;
  // name.lname = req.body.lName;
  // namesArray.push(name);
  let name = {
    fname: req.body.fName,
    lname:req.body.lName,
    length:req.body.fName.length+req.body.lName.length
  };
  namesArray.push(name);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
