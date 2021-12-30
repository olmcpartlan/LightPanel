import React, { Component } from 'react';

export default class LightObject extends Component{
  constructor(props) {
    super(props);
    this.state = {
      lightName: this.props.response.name,
      lightStatus: this.props.response.state.on,
      lightHue: this.props.response.state.hue,
      lightSat: this.props.response.state.sat,
      lightBrightness: this.props.response.state.bri,
      lightNumber: 0,
      colorButtonText: "btn btn-outline-secondary"
    }
    console.log(this.state)
  }

  componentDidMount() {
    // essentially setting a primary key with each light

    // id will be sent back to the parent to identify which light
    // is getting changed with the color form
    if(this.state.lightName.includes("Desk")) {
      this.setState({
        lightNumber: 1
      })
    }
    else if(this.state.lightName.includes("Main")) {
      this.setState({
        lightNumber: 2
      })
    }
    else if(this.state.lightName.includes("Spot")) {
      this.setState({
        lightNumber: 3
      })
    }


    // the first time the form is clicked, the id is 0
    // its fine after the first click

  }


  setPower = () => {
    let lightNumber = this.state.lightNumber;
    var path = `http://10.0.0.65:5000/power/${lightNumber}/${this.state.lightStatus}/`;
    fetch(path)
      .then(res => res.json())
      .then(res => {
        console.log(res);
      })
      .then(window.history.go(0))
  }

  changeColor = () => {
    this.setState({
      colorButtonText: "btn btn-success"
    })
  }

  // Have to use conditional rendering because js will
  // not render booleans


  render() {
    return (
      <div>
        <p>{this.state.lightName}</p>
              {this.state.lightStatus
                ? <p>On</p>
                : <p>Off</p>
              }
        <button className="btn btn-outline-primary" onClick={this.setPower}>Power</button>
        <button
          className={this.state.colorButtonText}
          onClick={() => this.props.setSelectedLight(this.state.lightNumber, this.state.lightName)}
        >Colors</button>

      </div>
    )
  }
}
