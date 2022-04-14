const { getLocationService } = require("../../services/locations");

async function getLocationController(req, res) {
  let ip = req.headers.ClimateClientIP;
  try {
    let cityResponse = await getLocationService(ip);
    return res.status(200).json({ city: cityResponse });
  } catch (err) {
    return res.status(503).send({
      message: "Location 3rd party source is unavailable",
    });
  }
}

module.exports = {
  getLocationController,
};
