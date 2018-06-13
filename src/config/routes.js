const express = require('express');
const fs = require('fs');
const routes = require('./server.js');

routes.get('/itens', function (req, res) {

    let itensJson = fs.readFileSync('modelo-resposta-api.json');
    let itens = JSON.parse(itensJson);

    res.send(itens);
});

routes.get('/itens/recommendation/:id', function (req, res) {

    let itensJson = fs.readFileSync('modelo-resposta-api.json');
    let itens = JSON.parse(itensJson);

    let filterItem = itens.data.recommendation.filter(elem => elem.businessId === req.params.id);
    res.send(filterItem);
});

module.exports = routes;