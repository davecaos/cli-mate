const axios = require("axios");
const Forecast = require("../entities/forecast");
const {forecastOpenWeatherAPI_URL} = require('../entities/url')

function formatForecastResponse(rawResponse) {
  let forecastResponse = rawResponse.list;
  return new Forecast(forecastResponse);
}

async function forecastWeatherByCity(city) {
  return axios
    .get(forecastOpenWeatherAPI_URL(city))
    .then(function (response) {
      return formatForecastResponse(response.data);
    })
    .catch(function (err) {
      console.error(err);
    });
}

module.exports = {
  forecastWeatherByCity: async (city) => {
    return await forecastWeatherByCity(city);
  },
};
