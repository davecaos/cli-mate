const axios = require("axios");
const { currentOpenWeatherUrlBy } = require("../entities/urls");
const { Weather } = require("../entities/weather");

const currentWeatherByCity = async(city) => { 
  const response = await axios.get(currentOpenWeatherUrlBy(city));

  const mainWeatherFromOWM = response.data.weather[0];
  const temp = response.data.main.temp;
  const dt = response.data.dt_tx;
  const id = response.data.id;
  return Weather(mainWeatherFromOWM, temp, dt, id);
}

module.exports = {
  currentWeatherByCity,
};
