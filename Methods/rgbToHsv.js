const fetch = require('node-fetch');
const request = require('request');

const creds = require('../creds');

module.exports = function (r, g, b, lightNo) {
  var computedH = 0;
  var computedS = 0;
  var computedV = 0;


  //remove spaces from input RGB values, convert to int
  var r = parseInt(('' + r).replace(/\s/g, ''), 10);
  var g = parseInt(('' + g).replace(/\s/g, ''), 10);
  var b = parseInt(('' + b).replace(/\s/g, ''), 10);

  if (r == null || g == null || b == null ||
    isNaN(r) || isNaN(g) || isNaN(b)) {
    return 'Please enter numeric RGB values!';
  }
  if (r < 0 || g < 0 || b < 0 || r > 255 || g > 255 || b > 255) {
    return 'RGB values must be in the range 0 to 255.';
  }
  r = r / 255; g = g / 255; b = b / 255;
  var minRGB = Math.min(r, Math.min(g, b));
  var maxRGB = Math.max(r, Math.max(g, b));

  // Black-gray-white
  if (minRGB == maxRGB) {
    computedV = minRGB;
    return [0, 0, computedV];
  }

  // Colors other than black-gray-white:
  var d = (r == minRGB) ? g - b : ((b == minRGB) ? r - g : b - r);
  var h = (r == minRGB) ? 3 : ((b == minRGB) ? 1 : 5);
  computedH = 60 * (h - d / (maxRGB - minRGB));
  computedS = (maxRGB - minRGB) / maxRGB;
  computedV = maxRGB;



  const basePath = `http://10.0.0.53/api/${creds}/lights`

  // supply the new values and adjust the hue values. the saturation does not need to be changed
  fetch(`${basePath}/${lightNo}/state`, {
    method: 'PUT',
    body: JSON.stringify({
      "hue": ((computedH/4) * 3 * 255),
    })

  })
    .then(res => res.json())
    .then(res => console.log(res));

  return [computedH, computedS, computedV];

}
