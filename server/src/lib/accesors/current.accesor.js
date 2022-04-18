const axios = require("axios");
const { currentOpenWeatherUrlBuilder } = require("../helpers/urls.helper");

const fetchCurrentWeatherByCity = async(city) => { 
  const url = currentOpenWeatherUrlBuilder(city)
  const response = await axios.get(url);
  return response.data;
}

module.exports = {
  fetchCurrentWeatherByCity,
};
