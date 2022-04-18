"use strict";
const { Weather } = require("./weather.parsers");

const Forecast = (forecastFromOWM) => {
  let forecast = forecastFromOWM.list.map((weatherRaw) => {
    let innerWeather = weatherRaw.weather[0];
    return Weather(
      innerWeather,
      weatherRaw.main.temp,
      weatherRaw.dt_txt,
      innerWeather.id
    );
  });
  return { forecast };
};

module.exports = {
  Forecast,
};
