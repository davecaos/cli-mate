const axios = require("axios");
const { currentOpenWeatherUrlBuilder } = require("../helpers/urls.helper");
const { Weather } = require("../../entities/weather");

const fetchCurrentWeatherByCity = async(city) => { 
  const url = currentOpenWeatherUrlBuilder(city)
  const response = await axios.get(url);

  const mainWeatherFromOWM = response.data.weather[0];
  const temp = response.data.main.temp;
  const dt = response.data.dt_tx;
  const id = response.data.id;
  return Weather(mainWeatherFromOWM, temp, dt, id);
}

module.exports = {
  fetchCurrentWeatherByCity,
};
