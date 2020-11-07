const config = require("config");

const openWeatherAPIKey = config.get("open-weather-api.apiKey");

function currentOpenWeatherUrlBy(city) {
  const openWeatherAPIURL = config.get("open-weather-api.weather");
  return `${openWeatherAPIURL}?q=${city}&units=metric&appid=${openWeatherAPIKey}`;
}

function forecastOpenWeatherUrlBy(city) {
  const openWeatherAPIURL = config.get("open-weather-api.forecast");
  return `${openWeatherAPIURL}?q=${city}&units=metric&appid=${openWeatherAPIKey}`;
}

function locationAPI_URL(ip) {
  const localhostIP4 = "127.0.0.1";
  const localhostIP6 = "::1";
  const isLocalhost = (ip) => ip === localhostIP4 || ip === localhostIP6;

  if (isLocalhost(ip)) {
    return "https://ipapi.co/json";
  }
  return `https://ipapi.co/${ip}/json`;
}

module.exports = {
  locationAPI_URL,
  currentOpenWeatherUrlBy,
  forecastOpenWeatherUrlBy,
};
