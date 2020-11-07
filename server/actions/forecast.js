const axios = require("axios");
const { Forecast } = require("../entities/forecast");
const { forecastOpenWeatherUrlBy } = require("../entities/urls");

const forecastWeatherByCity = async(city) => {
  const response = await axios.get(forecastOpenWeatherUrlBy(city));
  return Forecast(response.data.list);
}

module.exports = {
  forecastWeatherByCity,
};
