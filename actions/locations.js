const axios = require('axios');

const buildIpApiUrl = (ip) => ('https://ipapi.co/'+ ip +'/json');

async function locationByIP(ip) {
    console.log(buildIpApiUrl(ip));
    return axios.get(buildIpApiUrl(ip))
    .then(function(response) {
        console.log(response.data)
        return response.data;
    })
    .catch(function(err) {
        console.error(err);
    });
}

module.exports.locationByIP = locationByIP;

