const express = require('express');
const morgan = require('morgan');
const routes = require('./src/routes');
const cors = require('cors');
const app = express();

const ROUTE_BASE = '/v1';

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use(ROUTE_BASE, routes);

module.exports = app;