import React, { Component } from 'react';
import LightObject from './LightObject';
import ReactInterval from 'react-interval';
import ReactDOM from 'react-dom';
import ColorFormHeader from './colorFormHeader';

export default class CurrentStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      overallPower: [],
      deskPower: false,
      lampPower: false,
      spotPower: false,
      loadingApi: true,
      intervalId: "",
      currentColorFormId: 0,
      colorFormVisible: false,
      selectedLightName: ''
    };
  }

  // Learned a lesson here:
  // Storing all the objects into the parent state because previously
  // I was calling the pHue API in each light child.



  componentDidMount() {
    fetch("http://10.0.0.65:5000/status")
      .then(res => res.json())
      .then(res => {
        this.setState({
          overallPower: [
            res[1].state.on,
            res[2].state.on,
            res[3].state.on
          ],
          deskPower: res[1],
          lampPower: res[2],
          spotPower: res[3],
          loadingApi: false,
        })
        console.log(this.state.overallPower)
      })

      // handle bad api calls, probably just going to try it again
      .catch(err => console.log("ERROR: " + err));
  }


  // need to get the ID of each light from the LightObject
  // then pass that ID into the color form to be sent with the request

  setLightId(lightId, lightName) {
    this.setState({
      currentColorFormId: lightId,
      colorFormVisible: true,
      selectedLightName: lightName
    })
  }

  render() {

    return (
      <div>
        {!this.state.loadingApi
          ?
          <div className="row">
            <div className="col">
              <LightObject
                currentLightId={this.state.currentColorFormId}
                setSelectedLight={this.setLightId.bind(this)}
                response={this.state.deskPower}
              />
            </div>
            <div className="col">
              <LightObject
                currentLightId={this.state.currentColorFormId}
                setSelectedLight={this.setLightId.bind(this)}
                response={this.state.lampPower}
              />
            </div>
            <div className="col">
              <LightObject
                currentLightId={this.state.currentColorFormId}
                setSelectedLight={this.setLightId.bind(this)}
                response={this.state.spotPower}
              />
            </div>
          </div>

          : <p>Loading...</p>
        }
        <p></p>
        {this.state.colorFormVisible
        ?
        <ColorFormHeader
          lightName={this.state.selectedLightName}
          lightNo={this.state.currentColorFormId}
        />
        : <p></p>
        }

      </div>
    )
  }
}
