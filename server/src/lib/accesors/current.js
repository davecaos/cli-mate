const axios = require("axios");
const { currentOpenWeatherUrlByCity } = require("../helpers/urls");
const { Weather } = require("../../entities/weather");

const fetchCurrentWeatherByCity = async(city) => { 
  const response = await axios.get(currentOpenWeatherUrlByCity(city));

  const mainWeatherFromOWM = response.data.weather[0];
  const temp = response.data.main.temp;
  const dt = response.data.dt_tx;
  const id = response.data.id;
  return Weather(mainWeatherFromOWM, temp, dt, id);
}

module.exports = {
  fetchCurrentWeatherByCity,
};
