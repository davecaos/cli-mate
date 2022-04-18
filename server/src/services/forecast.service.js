const { fetchForecastWeatherByCity } = require("../lib/accesors/forecast.accesor");
const { fetchLocationCityByIP } = require("../lib/accesors/locations.accesor");
const {Forecast} = require("../lib/parsers/forecast.parsers");

async function getForecastWeatherService(city) {
  const mainForecastsFromOWM = await fetchForecastWeatherByCity(city)
  return Forecast(mainForecastsFromOWM);
}

async function getForecastLocalWeatherByIpService(ip) {
  let city = await fetchLocationCityByIP(ip);
  const mainForecastsFromOWM = await fetchForecastWeatherByCity(city)
  return Forecast(mainForecastsFromOWM);
}

module.exports = {
  getForecastWeatherService,
  getForecastLocalWeatherByIpService,
};
