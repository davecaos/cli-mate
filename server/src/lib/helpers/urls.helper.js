// Config
const config = require('../../../config');

const openWeatherAPIFreeKey = config.openWeatherApi.apiFreeKey;
const ipLocationAPIFreeKey = config.geolocationApi.apiFreeKey;

const locationURL = config.geolocationApi.url;

function currentOpenWeatherUrlBuilder(city) {
  const openWeatherURL = config.openWeatherApi.weather;
  return `${openWeatherURL}?q=${city}&units=metric&appid=${openWeatherAPIFreeKey}`;
}

function forecastOpenWeatherUrlBuilder(city) {
  const openWeatherURL = config.openWeatherApi.forecast;
  return `${openWeatherURL}?q=${city}&units=metric&appid=${openWeatherAPIFreeKey}`;
}

const locationByIpAPI = (ip) => {
  return `${locationURL}/ipgeo?apiKey=${ipLocationAPIFreeKey}&fields=city&ip=${ip}`;
}

const locationLocalhostAPI = () => {
  return `${locationURL}/ipgeo?apiKey=${ipLocationAPIFreeKey}&fields=city`;
}

function locationUrlBuilder(ip) {
  const localhostIP4 = "127.0.0.1";
  const localhostIP6 = "::1";
  const isLocalhost = (ip) => ip === localhostIP4 || ip === localhostIP6;

  return isLocalhost(ip)? locationLocalhostAPI() : locationByIpAPI(ip) 
}

module.exports = {
  locationUrlBuilder,
  currentOpenWeatherUrlBuilder,
  forecastOpenWeatherUrlBuilder,
};
