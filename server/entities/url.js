"use strict";
const OpenWeatherAPIKey = "be099e83205a778778834643d8310f58";

function baseOpenWeatherAPI_URL(type, city) {
    return ("http://api.openweathermap.org/data/2.5/" + type + "?q=" + city + "&units=metric" + "&appid=" +  OpenWeatherAPIKey);
  }

function currentOpenWeatherAPI_URL(city) {
    return baseOpenWeatherAPI_URL('weather', city);
}

function forecastOpenWeatherAPI_URL(city) {
    return baseOpenWeatherAPI_URL('forecast', city);
}

module.exports.currentOpenWeatherAPI_URL = currentOpenWeatherAPI_URL;
module.exports.forecastOpenWeatherAPI_URL = forecastOpenWeatherAPI_URL;
