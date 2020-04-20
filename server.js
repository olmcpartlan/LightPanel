const express = require('express');
const app = express();
const cors = require('cors');


var port = 5000

const RgbController = require('./Controllers/RgbController');
const PowerController = require('./Controllers/PowerController');


app.get('/status', function(req, res) {
  new PowerController().GetCurrentStatus()
    .then(function(data) {
      res.send(data)
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