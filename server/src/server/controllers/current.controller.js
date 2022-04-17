const { getCurrentWeatherService, getCurrentLocalWeatherByIpService } = require("../../services/current.service");

async function getCurrentWeatherController(req, res) {
  try {
    let city = req.params.city;
    let currentResponse = await getCurrentWeatherService(city);
    return res.status(200).json(currentResponse);
  } catch (error) {
    if (error?.response?.status === 404) {
      return res.status(404).send({
        message: "City is not found",
      });
    }

    return res.status(503).send({
      message: "Location Weather 3rd party source is unavailable",
    });
  }
}

async function getCurrentLocalWeatherController(req, res) {
  try {
    let ip = req.headers.ClimateClientIP;
    let currentResponse = await getCurrentLocalWeatherByIpService(ip);
    return res.status(200).json(currentResponse);
  } catch (error) {
    return res.status(503).send({
      message: "Location Weather 3rd party source is unavailable",
    });
  }
}

module.exports ={
  getCurrentWeatherController,
  getCurrentLocalWeatherController
};
