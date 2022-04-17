"use strict";
const { weatherParser } = require("./weather.parser");

const forecastParser = (forecastFromOpenWeather) => {
  let forecast = forecastFromOpenWeather.map((weatherRaw) => {
    let innerWeather = weatherRaw.weather.at(0);
    return weatherParser(innerWeather);
  });
  return { forecast };
};

module.exports = {
  forecastParser,
};
