const { fetchCurrentWeatherByCity } = require("../lib/accesors/current.accesor");
const { fetchLocationCityByIP } = require("../lib/accesors/locations.accesor");

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
