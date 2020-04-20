const https = require('https');
const request = require('request');


class PowerController {
  constructor(isPoweredOn, lightNumber) {
    this.isPowered = isPoweredOn;
    this.lightNumber = lightNumber;
  }


  PowerAll(isPoweredOn) {
    // hue designed api creds
    const creds = 'c-LnJbausk8uaidwuiYSH0dMAVBoeSIqWBGQ31za';
    // calling just this route will show all attributes of the lights
    const basePath = `https://10.0.0.53/api/${creds}/lights`


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
    // hue designed api creds
    const creds = 'c-LnJbausk8uaidwuiYSH0dMAVBoeSIqWBGQ31za';
    // calling just this route will show all attributes of the lights
    const basePath = `https://10.0.0.53/api/${creds}/lights`

      console.log(`Powering light number ${this.lightNumber}`)
      var flippedValue;
      if(this.isPowered.toString()[0] == 't')
      {
        flippedValue = false;
      }
      else flippedValue = true;

      //****** */ manually changing this is the only way to get it to work right now
      var body = {
        "on": flippedValue,
      }

      console.log(body);

      // the correct way to send the request is to specify the CA path
      // spent way too much time working on openSLL, will come back to it
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