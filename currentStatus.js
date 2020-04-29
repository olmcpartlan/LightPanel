const axios = require('axios');
const request = require('request');
const resolve = require('resolve');

module.exports = function () {

  // hue designed api creds
  const creds = 'c-LnJbausk8uaidwuiYSH0dMAVBoeSIqWBGQ31za';

  // calling just this route will show all attributes of the lights
  const basePath = `https://10.0.0.53/api/${creds}/lights`

}
