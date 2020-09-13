const axios = require('axios');
const {currentOpenWeatherAPI_URL} = require('../entities/urls')
const  {Weather} = require('../entities/weather')

async function currentWeatherByCity(city) {
    return axios.get(currentOpenWeatherAPI_URL(city))
            .then(function(response) {
                let mainWeatherFromOWM = response.data.weather[0];
                let temp = response.data.main.temp;
                let dt = response.data.dt_tx ? response.data.dt_tx : new Date().toISOString();
                let id = response.data.id;
                return Weather(mainWeatherFromOWM, temp, dt, id);
            })
            .catch(function(err) {
               throw err;
            });
}

module.exports = {
    currentWeatherByCity: async (city) => {
        return await currentWeatherByCity(city);
    }
};
