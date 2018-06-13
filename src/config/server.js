const port = 3003;
const express = require('express');
const server = express();

server.listen(port, function () {
    console.log(`backend running on ${port}`);
});

module.exports = server;