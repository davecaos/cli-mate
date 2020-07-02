const axios = require('axios');

function buildIpApiUrl(city) {
    const OpenWeatherAPIKey = 'be099e83205a778778834643d8310f58';
    return 'http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=' + OpenWeatherAPIKey;
    
}

function formatForecastResponse(rawResponse) {
    let forecastResponse = rawResponse.list
    let fomatedResponse = 
        forecastResponse.map( 
            forecastByHour => (
                {id: forecastByHour.id, weather: forecastByHour.weather, dt_txt:  forecastByHour.dt_txt })
        );
        
    return fomatedResponse;
 }

async function forecastWeatherByCity(city) {
    return axios.get(buildIpApiUrl(city))
            .then(function(response) {
                return formatForecastResponse(response.data);
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
