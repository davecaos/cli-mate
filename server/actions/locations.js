const axios = require("axios");
const { locationAPI_URL } = require("../entities/urls");

async function locationCityByIP(ip) {
  const url = locationAPI_URL(ip);
  const response = await axios.get(url);

  let city = response.data.city;
  return city;
}

module.exports = {
  locationCityByIP
};
