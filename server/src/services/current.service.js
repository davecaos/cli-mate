const { fetchCurrentWeatherByCity } = require("../lib/accesors/current.accesor");
const { fetchLocationCityByIP } = require("../lib/accesors/locations.accesor");
const {Weather} = require("../lib/parsers/weather.parsers");

async function getCurrentWeatherService(city) {
  const mainWeatherFromOWM = await fetchCurrentWeatherByCity(city);
  const temp = mainWeatherFromOWM.main.temp;
  const dt = mainWeatherFromOWM.dt_tx;
  const id = mainWeatherFromOWM.id;
  return Weather(mainWeatherFromOWM.weather[0], temp, dt, id);
}

async function getCurrentLocalWeatherByIpService(ip) {
  let city = await fetchLocationCityByIP(ip);

  const mainWeatherFromOWM = await fetchCurrentWeatherByCity(city);
  const temp = mainWeatherFromOWM.main.temp;
  const dt = mainWeatherFromOWM.dt_tx;
  const id = mainWeatherFromOWM.id;
  return Weather(mainWeatherFromOWM.weather[0], temp, dt, id);
}

module.exports = {
  getCurrentWeatherService,
  getCurrentLocalWeatherByIpService,
};
