const Router =  require('express');
const GetDataController = require('../controller/data.controller');
const SaveDataController = require('../controller/saveData.controller');
const routes =  Router();

const getDataController = new GetDataController();
const saveDataController = new SaveDataController();

routes.get('/getData',getDataController.handle);
routes.post('/saveData',saveDataController.handle)

module.exports = routes;