const axios = require("axios");
const { Forecast } = require("../../entities/forecast");
const { forecastOpenWeatherUrlBuilder } = require("../helpers/urls.helper");

const fetchForecastWeatherByCity = async(city) => {
  const url = forecastOpenWeatherUrlBuilder(city);
  const response = await axios.get(url);
  return response.data;
}

module.exports = {
  fetchForecastWeatherByCity,
};
