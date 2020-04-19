### Light Panel
Communicates with:
* ###### Philips Hue API
  - Call the API via PUT requests to change Power Status and Color
  - React form can accept colors in Hex and RGB
  - Both are converted into _HSB_ (Hue, Saturation, Brilliance)
  - An example of the connection to the Hue API can be found [here](server/Controllers/PowerController.js)
* ###### Will connecto toe OpenWeatherMaps API to display current weather
* ###### Potentially connect to the Spotify API to display a media player because why not

### Calculations from RGB to HSB
| Color Identifier  | Calculation                   | Value Type            |
| ----------------- | :---------------------------: | :-------------------- |
| (H)ue             | (mid val - min val) / max val | 0-360 Degrees         |
| (S)aturation      | (max val - min val) / max val | Number between 0-100% |
| (B)rilliance      | (max value of RGB) / 255      | Number between 0-100% |

  * max/mid/min val refer to the RGB input values

###### Example call to Philips Hue API:
```javascript
fetch("https://10.0.0.53/api/{APIKEY}/lights/")
  .then(res => res.json())
  .finally(res => console.log(res));
```
* This GET request is getting the data from all Philips Hue lights connected to the [bridge](https://www2.meethue.com/en-us/p/hue-bridge/046677458478 "Information on Philips Bridge") on `10.0.0.53`
* The response will be a list of light objects that contain information like:
  - Current HSB Values
  - Current Power Status
  - Misc. lighting information like _Light Name_ and _Lighting Modes_.
* To change any of the values, send a PUT request with updated information in the body.
