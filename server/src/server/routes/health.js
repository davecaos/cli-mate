const express = require('express');
const router  = express.Router();

//Get the routes.
const {healthController} = require('../controllers/health');
const {notFoundController} = require('../controllers/not-found');

//Bind routes with controller.
router.get('/ready', healthController);
router.get('/live', healthController);
router.get('/', healthController);
router.get('*', notFoundController);

module.exports = router;