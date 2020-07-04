const express = require('express');

const locationGet = require('./handlers/locations').location
const {currentWeatherLocalGet, currentWeatherGet} = require('./handlers/current')
const {forecastWeatherGet, forecastWeatherLocalGet } = require('./handlers/forecast')

var router = express.Router();

function setClientIpOnHeaderMiddleware(req, _res, next){ 
  let ip =  req.headers['x-forwarded-for'] || 
            req.connection.remoteAddress || 
            req.socket.remoteAddress ||
            '127.0.0.1';

  if (ip.substr(0, 7) === "::ffff:") {
      ip = ip.substr(7)
  }
  req.headers['ClimateClientIP'] = ip
  next();
}

//Middleware
router.use('/location', setClientIpOnHeaderMiddleware);
router.use('/current', setClientIpOnHeaderMiddleware);
router.use('/forecast', setClientIpOnHeaderMiddleware);

//Routes
router.get('/location', locationGet);
router.get('/current/', currentWeatherLocalGet);
router.get('/current/:city', currentWeatherGet);

router.get('/forecast/', forecastWeatherLocalGet)
router.get('/forecast/:city', forecastWeatherGet);

router.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
})

router.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
      error: {
          message: error.message
      }
  });
}); 


module.exports = router;
