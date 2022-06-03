const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));



  app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
  });

  app.post("/", function(req, res){
    console.log(req.body.cname);
    const query = req.body.cname;

    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query+ "&appid=992b72c5635605135fa5367b78d3adb5&units=metric";


    https.get(url, function(response){
      console.log(response.statusCode);

        response.on("data", function(data){
          const weatherData = JSON.parse(data);
          const temp = weatherData.main.temp
          const weatherDiscription = weatherData.weather[0].description

          res.write("<p> The weather is currently "+ weatherDiscription + "</p>")

          res.write("<h1> The temperature in " + query+ " is currently " + temp + " degree celcius.</h1>")
          res.send()

        })




    });

  });


app.listen(3000, function(){
  console.log("server is running on port 3000.");
});
