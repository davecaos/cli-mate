const axios = require('axios');
const {locationAPI_URL} = require('../entities/urls')

async function locationCityByIP(ip) {
    let url = locationAPI_URL(ip)
    return axios.get(url)
                .then(function(response) {
                    let city = response.data.city;
                    return city;
                })
                .catch(function (error) {
                    throw error;
                });
}

module.exports = {
    locationCityByIP: async (ip) => {
        return await locationCityByIP(ip);
    }
};

