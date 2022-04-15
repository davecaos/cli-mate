const axios = require("axios");
const {locationAPI } = require("../helpers/urls");

const trimPostfixCityName = (city) => city.endsWith(' City')? city.slice(0, city.lastIndexOf(' City')) : city

async function fetchLocationCityByIP(ip) {
  const url = locationAPI(ip);
  const response = await axios.get(url);
  let city = response.data.city;
  city = trimPostfixCityName(city)
  return city;
}

module.exports = {
  fetchLocationCityByIP
};
