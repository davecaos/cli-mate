const axios = require('axios');

const localhostIP4 = '127.0.0.1';
const localhostIP6 = '::1';
const isLocalhost = (ip) => (ip === localhostIP4 || ip === localhostIP6);

function buildIpApiUrl(ip) {
    if (ip.substr(0, 7) === "::ffff:") {
        ip = ip.substr(7)
    }

    if( isLocalhost(ip) ){
        return 'https://ipapi.co/json';
    }

    return 'https://ipapi.co/'+ ip +'/json';
}

async function locationCityByIP(ip) {
    return  axios.get(buildIpApiUrl(ip))
                .then(function(response) {
                    let city = response.data.city;
                    return {city} ;
                })
                .catch(function(err) {
                    console.error(err);
                });
}

module.exports.locationCityByIP = locationCityByIP;

