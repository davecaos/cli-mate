const express = require('express');
const port = 3000;
let {locationByIP} = require('./actions/locations')
const {locationGet} = require('./handlers/locations')

app = express();

app.use(express.static('public'));

app.get('/status', function (req, res) {
    res.send({status: 'ok'})
  })

app.get('/v2/location', locationGet);

  
app.get('/v1/location', function (req, res) {
  var ip = req.headers['x-forwarded-for'] || 
     req.connection.remoteAddress || 
     req.socket.remoteAddress ||
     (req.connection.socket ? req.connection.socket.remoteAddress : null);
     if (ip.substr(0, 7) == "::ffff:") {
      ip = ip.substr(7)
    }
   console.log('req',ip)
   locationByIP(ip).then( response => res.send(response))
   
    
  })
  
  app.get('/v1/current/:city', function (req, res) {
    res.send({})
  })

  app.get('/v1/forecast/:city', function (req, res) {
    res.send({})
  })

const server = app.listen(port, function () {
    console.log("Server is running on "+ port +" port");
  });

module.exports = { app, server };
