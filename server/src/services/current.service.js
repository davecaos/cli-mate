const {
  fetchCurrentWeatherByCity,
} = require("../lib/accesors/current.accesor");
const { fetchLocationCityByIP } = require("../lib/accesors/locations.accesor");
const { weatherParser } = require("../lib/parsers/weather.parser");

async function getCurrentWeatherService(city) {
  const weather = await fetchCurrentWeatherByCity(city);
  return weatherParser(weather);
}

async function getCurrentLocalWeatherByIpService(ip) {
  const city = await fetchLocationCityByIP(ip);
  const weather = await fetchCurrentWeatherByCity(city);
  return weatherParser(weather);
}

module.exports = {
  getCurrentWeatherService,
  getCurrentLocalWeatherByIpService,
};
