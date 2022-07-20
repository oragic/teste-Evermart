const express = require('express');
const routes = require('../app/routes/routes');
const app = express();

app.use(routes)
app.use(express.json());

module.exports = app;