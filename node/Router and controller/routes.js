const express = require('express');
const route = express.Router();
const homeController = require('./controllers/homeController');

route.get('/', homeController.inicial);
route.post('/', homeController.inicialPost);

module.exports = route;