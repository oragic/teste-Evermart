const express = require('express');
const connect = require('../infra/database/dabase');
const routes = require('../app/routes/routes');
const app = express();

connect()
app.use(express.json());
app.use(routes);


module.exports = app;