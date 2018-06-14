const express = require('express');

const routes = require('./server.js');
const itemController = require('../controller/itemController')

routes.get('/itens', itemController.get);

routes.get('/itens/recommendation/:id', itemController.getRecommendation);

module.exports = routes;