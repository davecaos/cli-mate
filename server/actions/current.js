const axios = require('axios');
const {currentOpenWeatherAPI_URL} = require('../entities/url')
const  Weather = require('../entities/weather')

async function currentWeatherByCity(city) {
    return axios.get(currentOpenWeatherAPI_URL(city))
            .then(function(response) {
                return new Weather(response.data) ;
            })
            .catch(function(err) {
                console.error(err);
            });
}

module.exports = {
    currentWeatherByCity: async (city) => {
        return await currentWeatherByCity(city);
    }
};
