const { fetchLocationCityByIP } = require("../lib/accesors/locations");

async function getLocationService(ip) {
  return await fetchLocationCityByIP(ip);
}

module.exports = {
  getLocationService,
};
