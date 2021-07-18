const config = require("config");

const openWeatherAPIFreeKey = config.get("open-weather-api.apiKeyFree");
const ipLocationAPIFreeKey = config.get("location-by-ip.apiKeyFree");

const locationAPIURL = config.get("location-by-ip.url");

function currentOpenWeatherUrlBy(city) {
  const openWeatherAPIURL = config.get("open-weather-api.weather");
  return `${openWeatherAPIURL}?q=${city}&units=metric&appid=${openWeatherAPIFreeKey}`;
}

function forecastOpenWeatherUrlBy(city) {
  const openWeatherAPIURL = config.get("open-weather-api.forecast");
  return `${openWeatherAPIURL}?q=${city}&units=metric&appid=${openWeatherAPIFreeKey}`;
}

const locationByIpAPI = (ip) => {
  return `${locationAPIURL}/ipgeo?apiKey=${ipLocationAPIFreeKey}&ip=${ip}&fields=city`;
}

const locationLocalhostAPI = () => {
  return `${locationAPIURL}/ipgeo?apiKey=${ipLocationAPIFreeKey}&fields=city`;
}

function locationAPI_URL(ip) {
  const localhostIP4 = "127.0.0.1";
  const localhostIP6 = "::1";
  const isLocalhost = (ip) => ip === localhostIP4 || ip === localhostIP6;

  return isLocalhost(ip)? locationLocalhostAPI() : locationByIpAPI(ip) 
}

module.exports = {
  locationAPI_URL,
  currentOpenWeatherUrlBy,
  forecastOpenWeatherUrlBy,
};
