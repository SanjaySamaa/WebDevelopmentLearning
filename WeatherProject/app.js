const express = require("express");
const app = express();
const https = require("https");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
   
    res.sendFile(__dirname+"/index.html");
    // res.send("up and running");
});
app.post("/",function(req,res){
    const appKey = ""
    const city = req.body.city;//Kathmandu
    const units = "metric";//metric
    console.log(units);
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&units="+units+"&appid="+appKey;
    https.get(url,function(response){
        console.log(response.statusCode);
        response.on("data",function(data){
            // console.log(JSON.parse(data));//JSON.parse is used to convert string to json
            // console.log(JSON.stringify(data));//JSON.stringify make json to string form minimal space consumption
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const description = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            // res.send(`weather description is ${description}`);
            console.log(description);
            // res.send(`<h1> todays forcast say today is ${description}</h1></br><h2>todays temp is ${temp} degree celcius</h2>`);
            res.write(`<h1> Todays forcast say today is ${description} in ${city}</h1>`);
            res.write(`<h2> Todays temp of ${city} is ${temp} degree celcius</h2>`);
            res.write(`<img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt"weather icons">`)
            res.send();
        });
    });
})
app.listen(3000,function(){
    console.log("Server Started At Port 3000");
});