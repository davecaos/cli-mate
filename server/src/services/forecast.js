const { fetchForecastWeatherByCity } = require("../lib/accesors/forecast");
const { fetchLocationCityByIP } = require("../lib/accesors/locations");

async function getForecastWeatherService(city) {
  return await fetchForecastWeatherByCity(city);
}

async function getForecastLocalWeatherByIpService(ip) {
  let city = await locationCityByIP(ip);
  return await fetchLocationCityByIP(city);
}

module.exports = {
  getForecastWeatherService,
  getForecastLocalWeatherByIpService,
};
