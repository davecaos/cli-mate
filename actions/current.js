const axios = require('axios');

function buildIpApiUrl(city) {
    const OpenWeatherAPIKey = 'be099e83205a778778834643d8310f58';
    return 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + OpenWeatherAPIKey;
}

async function currentWeatherByCity(city) {
    return axios.get(buildIpApiUrl(city))
            .then(function(response) {
                return response.data ;
            })
            .catch(function(err) {
                console.error(err);
            });
}

function currentLocalWeather(req, res) {
    let ip = req.headers.ClimateClientIP;
    locationCityByIP(ip).then( city => currentWeatherByCity(city).then( response => res.send(response)))
 }
 

module.exports.currentWeatherByCity =  currentWeatherByCity;
module.exports.currentLocalWeather = currentLocalWeather;
