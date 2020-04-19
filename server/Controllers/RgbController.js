const https = require('https');
const request = require('request');

class RgbController {

  constructor(rgbvalues) {
    this.err = null
    this.rgb = rgbvalues
    this.response = this.CallPhilHue()
    this.convertedValues = this.ConvertRgb()
  }

  ConvertRgb() {


    let r = this.rgb[0];
    let g = this.rgb[1];
    let b = this.rgb[2];
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    let difference = max - min;
    let saturation = (max === 0 ? 0 : difference / max)
    let v = max / 255;
    var h

    switch (max) {
      case min:
        h = 0;
        break;
      case r:
        h = (g - b) + difference * (g < b ? 6 : 0);
        h /= 6 * difference;
        break;
      case g:
        h = (b - r) + difference * 2;
        h /= 6 * difference;
        break;
      case b:
        h = (g - b) + difference * 4;
        h /= 6 * difference;
        break;
    }
    return [h, saturation, v];
  }
  CallPhilHue() {
    const creds = 'c-LnJbausk8uaidwuiYSH0dMAVBoeSIqWBGQ31za';
    const basePath = `https://192.168.0.30/api/${creds}/lights`
    var response;

    var fullPath = `${basePath}/1/state`
    var convertedValues = this.ConvertRgb();
    var body = {
      "sat": convertedValues[1],
      "xy": [convertedValues[0], convertedValues[1]]
    }

    request({
      rejectUnauthorized: false,
      url: fullPath,
      method: 'PUT',
      json: body
    }, function (err, res, resBody) {
      try {
        this.err = err;
      } 
      catch {  }
      response = resBody;
    })

    return "success";
  }

}
module.exports = RgbController;