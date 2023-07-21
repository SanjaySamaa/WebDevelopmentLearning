import express from "express";

const app = express();
const port = 3000;
const middleware = (req,res,next)=>{
  console.log("request method : ",req.method);
  next();
};
// const print = (req,res,next)=>{
//   console.log("i am at "+req.port);
//   next();
//   return print;
// };
app.use(middleware);
// app.use(print);
app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


