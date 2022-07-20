const Router =  require('express')
const getdata = require('../controller/data.controller')
const routes =  Router();

routes.get('/deal/events',getdata());

export default routes;