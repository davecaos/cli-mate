const express = require('express');

const {locationGet} = require('./handlers/locations')
const {currentWeatherGet} = require('./handlers/current')

let router = express.Router();

function setClientIpOnHeaderMiddleware(req, _res, next){ 
  let ip =  req.headers['x-forwarded-for'] || 
            req.connection.remoteAddress || 
            req.socket.remoteAddress ||
            '127.0.0.1';

   req.headers['ClimateClientIP'] = ip
   next();
}

router.use('/location', setClientIpOnHeaderMiddleware);
router.get('/location', locationGet);

router.use('/current', setClientIpOnHeaderMiddleware);
router.get('/current/', currentWeatherGet);
router.get('/current/:city', currentWeatherGet);

router.get('/forecast/', function (req, res) {
  res.send({})
})
router.get('/forecast/:city', function (req, res) {
    res.send({})
})

module.exports = router;
