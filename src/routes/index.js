require('dotenv').config();
const { Router } = require('express');
const router = Router();
const locationRoute = require('./location');
const currentRoute = require('./current');
const forecastRoute = require('./forecast');

router.use('/location', locationRoute);
router.use('/current', currentRoute);
router.use('/forecast', forecastRoute);


module.exports = router;