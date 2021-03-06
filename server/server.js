const express = require('express');
const router = require('./router');
const port = 1337;

app = express();

app.use(express.static('public'));

app.get('/status',  (_req, res) => res.send({ status: 'ok' }))

app.use('/v1', router)

const server = app.listen(port, function () {
    console.log("Server is running on "+ port +" port");
  });

module.exports = { app, server };
