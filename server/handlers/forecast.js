const { forecastWeatherByCity } = require("../actions/forecast");
const { locationCityByIP } = require("../actions/locations");

async function forecastWeatherGet(req, res) {
  try {
    let city = req.params.city;
    let forecastResponse = await forecastWeatherByCity(city);
    res.send(forecastResponse);
  } catch (error) {
    if (error.response.status === 404) {
      return res.status(404).send({
        message: "City is not found",
      });
    }

    return res.status(503).send({
      message: "Forecast Weather 3rd party source is unavailable",
    });
  }
}

async function forecastWeatherLocalGet(req, res) {
  try {
    let ip = req.headers.ClimateClientIP;
    let city = await locationCityByIP(ip);
    let forecastResponse = await forecastWeatherByCity(city);
    res.send(forecastResponse);
  } catch (error) {
    return res.status(503).send({
      message: "Location Weather 3rd party source is unavailable",
    });
  }
}

module.exports.forecastWeatherGet = forecastWeatherGet;
module.exports.forecastWeatherLocalGet = forecastWeatherLocalGet;
