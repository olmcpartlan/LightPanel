### Light Panel

##### Project Description:

This application communicates with Philips Hue lights on the User's network. Functionality includes turning lights on/off, updating the color/brightness, and creating scheduled routines.

The Philips Hue API is very straight-forward and is quite fun to work with. I encourage the reader to use this code as a template for a project of their own.

This project was hosted on a raspberry pi, however it now functions as a hub for my own personal use. To see the functionality of the application, here is a demo of updating the light's saturation value: 

<img src="./Client/public/light_demo.gif" alt="Light Demo" width="500" height="500">

* ###### Philips Hue API
  - Call the API via PUT requests to change Power Status and Color
  - React form can accept colors in Hex and RGB
  - Both are converted into _HSB_ (Hue, Saturation, Brightness)

##### Example call to Philips Hue API:
```javascript
fetch(`https://${YOUR_BRIDGE_IP}/api/${YOUR_API_KEY}/lights/`)
  .then(res => res.json())
  .finally(res => console.log(res));
```
* This GET request will respond with a promise containing the data from all Philips Hue lights connected to the [bridge](https://www2.meethue.com/en-us/p/hue-bridge/046677458478 "Information on Philips Hue Bridge") on `YOUR_BRIDGE_IP`
* The response will be a list of light objects that contain information like:
  - Current HSB Values
  - Current Power Status
  - Misc. lighting information like _Light Name_ and _Lighting Modes_.
* To change any of the values, send a PUT request with updated information in the body.


##### Conversions from RGB to HSB/HSV
* max/mid/min val refer to the RGB input values.

| Color Identifier      | Conversion from RGB           | Value Type              |
| :-------------------- | :---------------------------: | :---------------------: |
| (H)ue                 | (mid val - min val) / max val | 0-360° (integer) |
| (S)aturation          | (max val - min val) / max val | 0-100% (decimal)        |
| (B)rightness/(V)alue  | (max value of RGB) / 255      | 0-100% (decimal)        |

* [Great resource on HSV/HSB/HSL](https://en.wikipedia.org/wiki/HSL_and_HSV "WikiPedia Article")
* HSV/HSB and HSL are cylindrical geometries. Hue values are read as:
  - Red Primary starts at 0°.
  - Green Primary starts at 120°.
  - Blue Primary starts at 240°.
  - Cycle ends back on red at 360°.
* Saturation/Brightness will slightly alter the color based off the Hue value.

##### Calculations from HSB to RGB
If we have a class RGB:
```javascript
class RGB {
  constructor(red, green, blue) {
    this.red = red;
    this.green = green;
    this.blue = blue;
  }
}
```
Then we can convert the values using this method:
```javascript
function hsvToRgb(hue, sat, brightness) {
  // If Hue value is outside the range, default to red.
  // Could potentially return an error message back to frontend if hue > 360
  if(hue >= 360.0) hue = 0.0;

  // Checks the region of the hue input
  // Calculations will be based off of this region
  hue /= 60.0;
  var i = Number(hue);

  var ff = hue - i;
  var p = brightness * (1.0 - sat);
  var q = brightness * (1.0 - (sat * ff));
  var t = brightness * (1.0 - (sat * (1.0 - ff)));

  switch(i) {
    case 0: return new RGB(brightness, t, p);
            break;
    case 1: return new RGB(q, brightness, p);
            break;
    case 2: return new RGB(p, brightness, t);
            break;
    case 3: return new RGB(p, q, brightness);
            break;
    case 4: return new RGB(t, p, brightness);
            break;
    default:
      return new RGB(brightness, p, q);
      break;

  }
}
```
* These calculations are from [this SO answer](https://stackoverflow.com/questions/3018313/algorithm-to-convert-rgb-to-hsv-and-hsv-to-rgb-in-range-0-255-for-both), but were re-written to a simpiler JavaScript function.
* Calling this method will return the RGB object with reasonably accurate values.


###### Side Note:
* Converting to RGB values is not needed to interact with the lights.
* The converting in this application is needed so the user can enter the more common RGB values instead of entering the HSB values.
* This application also converts hex values, but those calculations are easily done by converting the hex to RGB, then to HSB
