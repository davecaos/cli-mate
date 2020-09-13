"use strict";
const { Weather } = require("./weather");

const Forecast = (forecastFieldsFromOWM) => {
  let forecast = forecastFieldsFromOWM.map((weatherRaw) => {
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
