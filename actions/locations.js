const axios = require('axios');

const localhostIP4 = '127.0.0.1';
const localhostIP6 = "::1";
const isLocalhost = (ip) => (ip == localhostIP4 || ip == localhostIP6);

function buildIpApiUrl(ip) {

    if( isLocalhost(ip) ){
        return 'https://ipapi.co/json';
    }
    return 'https://ipapi.co/'+ ip +'/json';
}

async function locationCityByIP(ip) {
    let url = buildIpApiUrl(ip)
    return axios.get(url)
                .then(function(response) {
                    let city = response.data.city;
                    return {city};
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

