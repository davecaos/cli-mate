let {forecastWeatherByCity} = require('../actions/forecast')
let {locationCityByIP} = require('../actions/locations')


function forecastWeatherGet(req, res) {
   let city = req.params.city; 
   forecastWeatherByCity(city)
      .then( 
         response => res.send(response)
      )
}

function forecastWeatherLocalGet(req, res) {
   let ip = req.headers.ClimateClientIP
   locationCityByIP(ip)
      .then(
         result => forecastWeatherByCity(result.city).then( response => res.send(response))
      )
   
}

module.exports.forecastWeatherGet = forecastWeatherGet;
module.exports.forecastWeatherLocalGet = forecastWeatherLocalGet;
