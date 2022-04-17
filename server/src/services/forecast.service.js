const { fetchForecastWeatherByCity } = require("../lib/accesors/forecast.accesor");
const { fetchLocationCityByIP } = require("../lib/accesors/locations.accesor");
const { forecastParser } = require("../lib/parsers/forecast.parser");

async function getForecastWeatherService(city) {
  const forecast = await fetchForecastWeatherByCity(city);
  return forecastParser(forecast);
}

async function getForecastLocalWeatherByIpService(ip) {
  let city = await fetchLocationCityByIP(ip);
  const forecast = await fetchForecastWeatherByCity(city);
  return forecastParser(forecast);
}

module.exports = {
  getForecastWeatherService,
  getForecastLocalWeatherByIpService,
};
