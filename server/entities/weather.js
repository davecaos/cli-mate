"use strict";

module.exports = class Weather {
  constructor(weatherFieldFromOWM) {
    this.weather = weatherFieldFromOWM.weather[0];
    this.weather.temp = weatherFieldFromOWM.main.temp;
    this.weather.dt_txt = weatherFieldFromOWM.dt_txt;
    this.weather.iconID = this.weather.id;
  }
};
