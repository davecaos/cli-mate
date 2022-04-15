const { fetchLocationCityByIP } = require("../lib/accesors/locations.accesor");

async function getLocationService(ip) {
  return await fetchLocationCityByIP(ip);
}

module.exports = {
  getLocationService,
};
