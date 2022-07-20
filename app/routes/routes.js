const Router =  require('express')
const GetDataController = require('../controller/data.controller')
const routes =  Router();

const getDataController = new GetDataController();


routes.get('/getData',getDataController.handle);

module.exports = routes;