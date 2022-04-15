const axios = require("axios");
const { Forecast } = require("../../entities/forecast");
const { forecastOpenWeatherUrlByCity } = require("../helpers/urls");

const fetchForecastWeatherByCity = async(city) => {
  const response = await axios.get(forecastOpenWeatherUrlByCity(city));
  return Forecast(response.data.list);
}

module.exports = {
  fetchForecastWeatherByCity,
};
