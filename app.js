const express = require("express");
//Native node moduel for makeing http requests
const https = require("https");

const app = express();

const url = "https://api.openweathermap.org/data/2.5/weather?q=atlanta,georgia&units=imperial&appid=dd6b9b5a114cf69768a7981af4bb973d";

app.get('/', (req, res) => {

  https.get(url, (response) => {
    console.log(response.statusCode);

    response.on('data', (data) => {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const desc = weatherData.weather[0].description;
      console.log(temp, desc);
      res.write("The weather is currently " +  desc);
      res.write("<p>"+ "The temprature in Atlanta is " + temp + " degrees Farenheight</p>" +  "</p>")
      res.send();
    })
  })
});








app.listen(8000, () => {
  console.log("Server is running on port 8000.")
});