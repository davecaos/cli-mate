"use strict";

const weatherParser = (weatherFromOpenWeather) => {
  const mainWeather = WeatherFromOpenWeatherMap.weather.at(0);

  let weather = { ...mainWeather };
  weather["temp"] = weatherFromOpenWeather.main.temp;
  weather["dt_txt"] = weatherFromOpenWeather.dt_tx || new Date().toISOString();
  weather["iconID"] = weatherFromOpenWeather.id;

  return { weather };
};

module.exports = {
  weatherParser,
};
