const axios = require("axios");
const {locationUrlBuilder } = require("../helpers/urls.helper");

const trimPostfixCityName = (city) => city.endsWith(' City')? city.slice(0, city.lastIndexOf(' City')) : city

async function fetchLocationCityByIP(ip) {
  const url = locationUrlBuilder(ip);
  const response = await axios.get(url);
  let city = response.data.city;
  city = trimPostfixCityName(city)
  return city;
}

module.exports = {
  fetchLocationCityByIP
};
