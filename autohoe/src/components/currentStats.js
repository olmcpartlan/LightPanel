import React, { Component } from 'react';
import LightObject from './LightObject';
import ReactInterval from 'react-interval';
import ReactDOM from 'react-dom';

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
    };
  }

  // Learned a lesson here:
  // Storing all the objects into the parent state because previously
  // I was calling the pHue API in each light child.



  componentDidMount() {
    fetch("https://10.0.0.53/api/c-LnJbausk8uaidwuiYSH0dMAVBoeSIqWBGQ31za/lights/")
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
          loadingApi: false
        })
        console.log(this.state.overallPower)
      })

      // handle bad api calls, probably just going to try it again
      .catch(err => console.log("ERROR: " + err));
  }

  showColorForm = (lightNumber) => {
    console.log(lightNumber);
  }

  // The plan is to set an interval for the lightobjects 
  // If the lights change, the component will need to update to reflect it
  // I can forcefully reload it once a value has been changed,
  // as well as setting the interval

  render() {

    // First condition is met if the api is finished loading, 
    // Second condition is checking the state value of the light 
    //   Cant render a boolean
    return (
      <div>
        {!this.state.loadingApi
          ?
          <div className="row">
            <div className="col">
              <LightObject response={this.state.deskPower} />
            </div>
            <div className="col">
              <LightObject response={this.state.lampPower} />
            </div>
            <div className="col">
              <LightObject 
                response={this.state.spotPower} 
                showColorForm={this.showColorForm}
              />
            </div>
          </div>

          : <p>Loading...</p>
        }

      </div>
    )
  }
}
