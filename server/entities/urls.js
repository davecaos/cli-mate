"use strict";
const OpenWeatherAPIKey = "be099e83205a778778834643d8310f58";

function baseOpenWeatherAPI_URL(type, city) {
  return (
    "http://api.openweathermap.org/data/2.5/" +
    type +
    "?q=" +
    city +
    "&units=metric" +
    "&appid=" +
    OpenWeatherAPIKey
  );
}

function currentOpenWeatherAPI_URL(city) {
  return baseOpenWeatherAPI_URL("weather", city);
}

function forecastOpenWeatherAPI_URL(city) {
  return baseOpenWeatherAPI_URL("forecast", city);
}

function locationAPI_URL(ip) {
  const localhostIP4 = "127.0.0.1";
  const localhostIP6 = "::1";
  const isLocalhost = (ip) => ip == localhostIP4 || ip == localhostIP6;

  if (isLocalhost(ip)) {
    return "https://ipapi.co/json";
  }
  return "https://ipapi.co/" + ip + "/json";
}

module.exports.locationAPI_URL = locationAPI_URL;
module.exports.currentOpenWeatherAPI_URL = currentOpenWeatherAPI_URL;
module.exports.forecastOpenWeatherAPI_URL = forecastOpenWeatherAPI_URL;
