"use strict";
const Weather = require("./weather");

module.exports = class Forecast {
  constructor(forecastFieldsFromOWM) {
    this.forecast = forecastFieldsFromOWM.map(
      (weatherRaw) => new Weather(weatherRaw)
    );
  }
};
