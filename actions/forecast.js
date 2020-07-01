const axios = require('axios');

function buildIpApiUrl(city) {
    const OpenWeatherAPIKey = 'be099e83205a778778834643d8310f58';
    return 'http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=' + OpenWeatherAPIKey;
    return 'http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=' + OpenWeatherAPIKey;
}

async function forecastWeatherByCity(city) {
    return axios.get(buildIpApiUrl(city))
            .then(function(response) {
                return response.data ;
            })
            .catch(function(err) {
                console.error(err);
            });
}

module.exports = {
    forecastWeatherByCity: async (city) => {
        return await forecastWeatherByCity(city);
    }
};
