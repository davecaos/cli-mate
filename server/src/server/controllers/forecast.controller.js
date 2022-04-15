const { getForecastLocalWeatherByIpService, getForecastWeatherService } = require("../../services/forecast.service");

async function getForecastWeatherController(req, res) {
  try {
    let city = req.params.city;
    let forecastResponse = await getForecastWeatherService(city);
    return res.status(200).json(forecastResponse);
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

async function getForecastLocalWeatherController(req, res) {
  try {
    let ip = req.headers.ClimateClientIP;
    let forecastResponse = await getForecastLocalWeatherByIpService(ip);
    return res.status(200).json(forecastResponse);
  } catch (error) {
    return res.status(503).send({
      message: "Location Weather 3rd party source is unavailable",
    });
  }
}

module.exports = {
  getForecastWeatherController,
  getForecastLocalWeatherController
}
