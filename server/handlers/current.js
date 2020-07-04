let { currentWeatherByCity } = require("../actions/current");
let { locationCityByIP } = require("../actions/locations");

async function currentWeatherGet(req, res) {
  try {
    let city = req.params.city;
    let currentResponse = await currentWeatherByCity(city);
    res.send(currentResponse);
  } catch (error) {
    if (error.response.status == 404) {
      return res.status(404).send({
        message: "City is not found",
      });
    }

    return res.status(503).send({
      message: "Location Weather 3rd party source is unavailable",
    });
  }
}

async function currentWeatherLocalGet(req, res) {
  try {
    let ip = req.headers.ClimateClientIP;
    let city = await locationCityByIP(ip);
    let currentResponse = await currentWeatherByCity(city);
    res.send(currentResponse);
  } catch (error) {
    return res.status(503).send({
      message: "Location Weather 3rd party source is unavailable",
    });
  }
}

module.exports.currentWeatherGet = currentWeatherGet;
module.exports.currentWeatherLocalGet = currentWeatherLocalGet;
