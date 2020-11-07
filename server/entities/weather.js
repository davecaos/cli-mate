"use strict";

const Weather = (mainWeatherFromOWM, temp, dt, id) => {
  let weather = { ...mainWeatherFromOWM };
  weather['temp'] = temp;
  weather['dt_txt'] =  dt || new Date().toISOString();
  weather['iconID'] = id;

  return {weather};
};

module.exports = {
  Weather
};
