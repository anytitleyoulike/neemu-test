const express = require('express');

module.exports = function(server) {
    const router = express.Router();
    server.use('/api', router);

    server.get('/', function (req, res) {
        res.send('helloworld');
    });
    server.get('/produtos', function (req, res) {
        res.send('pagina dos produtos');
    });

}