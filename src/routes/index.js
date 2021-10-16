const { Router } = require('express');
const routes = require('./routes.js');
const router = Router();

const ROUTE_BASE = '/v1';

router.use(ROUTE_BASE, routes)


module.exports = router;