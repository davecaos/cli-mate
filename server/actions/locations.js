const axios = require("axios");
const { locationAPI_URL } = require("../entities/urls");

const trimPostfixCityName = (city) => city.endsWith(' City')? city.slice(0, city.lastIndexOf(' City')) : city

async function locationCityByIP(ip) {
  const url = locationAPI_URL(ip);
  const response = await axios.get(url);
  let city = response.data.city;
  city = trimPostfixCityName(city)
  return city;
}

module.exports = {
  locationCityByIP
};
