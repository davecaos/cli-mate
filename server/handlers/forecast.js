let {forecastWeatherByCity} = require('../actions/forecast')
let {locationCityByIP} = require('../actions/locations')



async function forecastWeatherGet(req, res) {
   try {
      let city = req.params.city; 
      let forecastResponse = await forecastWeatherByCity(city);
      res.send(forecastResponse);   
   }
   catch(err){
     return res.status(503).send({
       message: 'Forecast Weather 3rd party source is unavailable'
    });
   }
 }

async function forecastWeatherLocalGet(req, res) {
   try {
      let ip = req.headers.ClimateClientIP
      let {city} = await locationCityByIP(ip);
      let forecastResponse = await forecastWeatherByCity(city);
      res.send(forecastResponse);   
   }
   catch(err){
     return res.status(503).send({
       message: 'Location Weather 3rd party source is unavailable'
    });
   }
 }

module.exports.forecastWeatherGet = forecastWeatherGet;
module.exports.forecastWeatherLocalGet = forecastWeatherLocalGet;
