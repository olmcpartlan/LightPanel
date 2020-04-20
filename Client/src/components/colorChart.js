import React, { Component } from 'react';
import { RgbForm, HexForm } from './colorForms';


export default class ColorChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      componentIsVisible: true,
      rgbVisible: true,
    }
  }

  showRgb = () => {
    if(this.state.rgbVisible) {
      // pass
    }
    else {
      this.setState({
        rgbVisible: true,
      })
    }
  }

  showHex = () => {
    if(!this.state.rgbVisible) {
      // pass
    }
    else {
      this.setState({
        rgbVisible: false,
      })
    }
  }


  render() {
    return (
      <div className="container">
        <div className="btn-group" roles="group">
          <button 
            className="btn btn-secondary"
            onClick={this.showRgb}
          >
            RGB
          </button>
          <button 
            className="btn btn-secondary"
            onClick={this.showHex}
          >
            Hex
          </button>
        </div>
        <form className="form-group">
          {this.state.rgbVisible
          ? <RgbForm />
          : <HexForm />
          }
        </form>

      </div>
    );
  }
}
