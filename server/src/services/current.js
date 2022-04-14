const { fetchCurrentWeatherByCity } = require("../lib/accesors/current");
const { fetchLocationCityByIP } = require("../lib/accesors/locations");

async function getCurrentWeatherService(city) {
  return await fetchCurrentWeatherByCity(city);
}

async function getCurrentLocalWeatherByIpService(ip) {
  let city = await fetchLocationCityByIP(ip);
  return await fetchCurrentWeatherByCity(city);
}

module.exports = {
  getCurrentWeatherService,
  getCurrentLocalWeatherByIpService,
};
