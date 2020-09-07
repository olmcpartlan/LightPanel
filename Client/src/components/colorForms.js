import React, { Component } from 'react';

/*
  need form validation for 0-255
  need quick colors, buttons for red, blue, purple, orange,etc
  as well as a current rgb conversion onload from the backend
*/

class RgbForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      red: "",
      green: "",
      blue: "",
      currentLight: []
    }
  }

  componentDidMount() {
    fetch('http://10.0.0.65:5000/status')
      .then(res => res.json())
      .then(res => {
        let currentLight = res[this.props.lightNo]
        this.setState({
          currentLight: currentLight
        })
        console.log(this.state.currentLight);
      })
  }

  getCurrentRGB() {
    fetch('http://10.0.0.65:5000/currentRGB')
      .then(res => res.json())
      .then(res => console.log(res));
  }

  brightnessSlide = (e) => {
    this.setState({
      brightness: e.target.value
    })
  }


  setRed = (e) => {
    this.setState({
      red: e.target.value
    })
  }
  setBlue = (e) => {
    this.setState({
      blue: e.target.value
    })
  }
  setGreen = (e) => {
    this.setState({
      green: e.target.value
    })
  }

  rgbToString() {
    return `${this.state.red}/${this.state.green}/${this.state.blue}`
  }

  sendColors = (e) => {
    e.preventDefault();
    console.log(this.state.red)
    fetch(`http://10.0.0.65:5000/rgb/rgbToHsv/${this.rgbToString()}/${this.props.lightNo}`)
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }



  render() {
    return (
      <div>
        <div>
          <p></p>
        </div>
        <div className="row">
          <div className="col">
            <p>Brightness</p>
            <input
              type="range"
              className="form-control-range"
              onChange={this.brightnessSlide}/>
            <p>Red:</p>
          </div>
          <div className="col">
            <p>Saturation</p>
            <input type="range" className="form-control-range" id="formControlRange"/>
            <input onChange={this.setRed} className="form-control-sm rgbinput" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>Green:</p>
          </div>
          <div className="col">
            <input onChange={this.setGreen} className="form-control-sm rgbinput" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>Blue:</p>
          </div>
          <div className="col">
            <input onChange={this.setBlue} className="form-control-sm rgbinput" />
          </div>
        </div>

        <div>
          <button
            onClick={this.sendColors}
            className="btn btn-danger changergb"
          >Change
          </button>
        </div>

      </div>
    )
  }
}

class HexForm extends Component {
  sendColors() {
    fetch(`http://10.0.0.65:5000/rgb/`, {
      headers: {
        "Acess-Control-Allow-Origin": "*"
      }
    })
    .then(res => res.json())
    .then(res => console.log(res));

  }
  render() {
    return (
      <div>
        <p>Enter Hex Value:</p>
        <input className="form-control-sm" />
        <div>
          <button
          onClick={this.sendColors()}
          className="btn btn-danger changergb">Change</button>
        </div>
      </div>
    )
  }
}


export {
  RgbForm,
  HexForm
}
