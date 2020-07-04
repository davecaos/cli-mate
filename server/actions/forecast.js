const axios = require("axios");
const Forecast = require("../entities/forecast");
const {forecastOpenWeatherAPI_URL} = require('../entities/urls')

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
    .catch(function(error) {
      throw error;
   });
}

module.exports = {
  forecastWeatherByCity: async (city) => {
    return await forecastWeatherByCity(city);
  },
};
