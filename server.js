const request = require('request');
const axios = require('axios');
const express = require('express');
const app = express();
const cors = require('cors');
const currentStatus = require('./currentStatus');
app.use(cors());


var port = 5000

const RgbController = require('./Controllers/RgbController');
const PowerController = require('./Controllers/PowerController');


// this will return the current status of all lights
app.get('/status', function(req, res) {
  const creds = 'c-LnJbausk8uaidwuiYSH0dMAVBoeSIqWBGQ31za';

  const basePath = `https://10.0.0.53/api/${creds}/lights`

  request.get({
    url: basePath,
    rejectUnauthorized: false
  }, function(err, response, resbody) {
    if(err) return "ERR: " + err;

    res.send(resbody)
  })

})
  
app.get('/rgb', function(req, res) {
  res.send(new RgbController([40,170,120])); 
 })
 

// can successfully power on/off each light
// if 3 is passed through, will handle both lights
app.get(`/power/:lightNo/:isPoweredOn`, function(req, res) {
  var lightNumber = req.params.lightNo;
  var isPoweredOn = req.params.isPoweredOn;
  // this could be cleaner but too afraid to touch it right now
  res.send(new PowerController(isPoweredOn, lightNumber).PowerAll(isPoweredOn))
});



app.listen(port, function(req, res) {
  console.log(`Listening on port ${port}`)
})

app.use(function(req, res, next) {
  next();
});