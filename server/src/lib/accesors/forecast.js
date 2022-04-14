const axios = require("axios");
const { Forecast } = require("../../entities/forecast");
const { forecastOpenWeatherUrlBy } = require("../helpers/urls");

const fetchForecastWeatherByCity = async(city) => {
  const response = await axios.get(forecastOpenWeatherUrlBy(city));
  return Forecast(response.data.list);
}

module.exports = {
  fetchForecastWeatherByCity,
};
