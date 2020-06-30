let {locationCityByIP} = require('../actions/locations')


function locationGet (req, res) {
  let ip = req.headers.ClimateClientIP
  locationCityByIP(ip)
  .then( 
    response => res.send(response)
  )
}


module.exports.location = locationGet;
