let {currentWeatherByCity} = require('../actions/current')
let {locationCityByIP} = require('../actions/locations')


function currentWeatherGet (req, res) {
   let city = req.params.city; 
   currentWeatherByCity(city).then( response => res.send(response))
      
}

function currentWeatherLocalGet (req, res) {
   let ip = req.headers.ClimateClientIP
   let city = locationCityByIP(ip)
   currentWeatherByCity(city).then( response => res.send(response))
}



module.exports.currentWeatherGet = currentWeatherGet;

