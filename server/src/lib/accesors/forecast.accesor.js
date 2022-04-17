const axios = require("axios");
const { forecastOpenWeatherUrlBuilder } = require("../helpers/urls.helper");

const fetchForecastWeatherByCity = async(city) => {
  const url = forecastOpenWeatherUrlBuilder(city);
  const response = await axios.get(url);
  return response.data.list;
}

module.exports = {
  fetchForecastWeatherByCity,
};
