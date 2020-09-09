const https = require('https');
const request = require('request');
const creds = require('../creds');


class PowerController {
  constructor(isPoweredOn, lightNumber) {
    this.isPowered = isPoweredOn;
    this.lightNumber = lightNumber;
  }


  PowerAll(isPoweredOn) {
    // /lights all attributes of the lights
    const basePath = `http://10.0.0.53/api/${creds}/lights`


    // power all on/off by passing a 4 as a light number
    if (this.lightNumber == 4) {
      console.log(`Lights are no longer ${this.isPowered}`);
      var reqBody = JSON.stringify({
        "on": isPoweredOn
      });
      console.log(reqBody);

      for(let i = 1; i < 4; i++) {

        request.put({
          rejectUnauthorized: false,
          url: `${basePath}/${i}/state/on`,
          body: !isPoweredOn
        }, function (err, res, resBody) {
          console.log(res);
        })
      }

    }


    else {

      console.log(`Powering light number ${this.lightNumber}`)
      var flippedValue;
      if(this.isPowered.toString()[0] == 't')
      {
        flippedValue = false;
      }
      else flippedValue = true;

      var body = {
        "on": flippedValue,
      }

      console.log(body);

      request({
        method: "PUT",
        rejectUnauthorized: false,
        url: basePath + "/" + this.lightNumber + "/state",
        json: body
      }, function (err, res, resBody) {
        console.log(resBody);
      })
    }

  }

}

module.exports = PowerController
