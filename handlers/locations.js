let {locationByIP} = require('../actions/locations')


 function locationGet (req, res) {
    var ip = req.headers['x-forwarded-for'] || 
       req.connection.remoteAddress || 
       req.socket.remoteAddress ||
       (req.connection.socket ? req.connection.socket.remoteAddress : null);
       
     console.log('req',req)
     locationByIP(ip).then( response => res.send(response))
     
      
    }





module.exports.locationGet = locationGet;
