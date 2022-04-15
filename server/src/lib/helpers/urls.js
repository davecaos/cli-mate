// Config
const config = require('../../../config');

const openWeatherAPIFreeKey = config.openWeatherApi.apiFreeKey;
const ipLocationAPIFreeKey = config.geolocationApi.apiFreeKey;

const locationAPIURL = config.geolocationApi.url;

function currentOpenWeatherUrlByCity(city) {
  const openWeatherAPIURL = config.openWeatherApi.weather;
  return `${openWeatherAPIURL}?q=${city}&units=metric&appid=${openWeatherAPIFreeKey}`;
}

function forecastOpenWeatherUrlByCity(city) {
  const openWeatherAPIURL = config.openWeatherApi.forecast;
  return `${openWeatherAPIURL}?q=${city}&units=metric&appid=${openWeatherAPIFreeKey}`;
}

const locationByIpAPI = (ip) => {
  return `${locationAPIURL}/ipgeo?apiKey=${ipLocationAPIFreeKey}&fields=city&ip=${ip}`;
}

const locationLocalhostAPI = () => {
  return `${locationAPIURL}/ipgeo?apiKey=${ipLocationAPIFreeKey}&fields=city`;
}

function locationAPI(ip) {
  const localhostIP4 = "127.0.0.1";
  const localhostIP6 = "::1";
  const isLocalhost = (ip) => ip === localhostIP4 || ip === localhostIP6;

  return isLocalhost(ip)? locationLocalhostAPI() : locationByIpAPI(ip) 
}

module.exports = {
  locationAPI,
  currentOpenWeatherUrlByCity,
  forecastOpenWeatherUrlByCity,
};
