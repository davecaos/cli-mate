const express = require('express');
const {setClientIpMiddleware} = require('../middleware');
const {getLocationController} = require('../controllers/locations.controller');
const {getCurrentWeatherController, getCurrentLocalWeatherController} = require('../controllers/current.controller');
const {getForecastWeatherController, getForecastLocalWeatherController } = require('../controllers/forecast.controller');

const router = express.Router();


//Routes
router.get('/location', [setClientIpMiddleware], getLocationController);
router.get('/current/', [setClientIpMiddleware], getCurrentLocalWeatherController);
router.get('/current/:city', getCurrentWeatherController);

router.get('/forecast/', [setClientIpMiddleware],getForecastLocalWeatherController)
router.get('/forecast/:city', getForecastWeatherController);

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
