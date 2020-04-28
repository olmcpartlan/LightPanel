import React, { Component } from 'react';

class RgbForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      red: "",
      green: "",
      blue: "",
    }
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

  sendColors() {
    fetch(`http://localhost:5000/rgb/${this.state.red}/${this.rgbToString}`)
    .then(res => res.json())
    .then(res => console.log(res));

  }


  rgbToString() {
    return this.state.red + this.state.green + this.state.blue
  }



  render() {
    return (
      <div>
        <div className="row">
          <div className="col">
            <p>Red:</p>
          </div>
          <div className="col">
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
            onClick={this.sendColors()} 
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
    fetch(`http://localhost:5000/rgb/`, {
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