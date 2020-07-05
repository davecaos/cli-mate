const { locationCityByIP } = require("../actions/locations");

async function locationGet(req, res) {
  let ip = req.headers.ClimateClientIP;
  try {
    let cityResponse = await locationCityByIP(ip);
    res.send({city: cityResponse});
  } catch (err) {
    return res.status(503).send({
      message: "Location 3rd party source is unavailable",
    });
  }
}

module.exports.location = locationGet;
