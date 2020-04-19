import React, { Component } from 'react';
import ColorChart from './colorChart';
import CurrentStatus from './currentStats';


export default class PHueSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorButton: "btn-success",
      colorsVisible: false,
      currentPower: false
    }
  }

  componentDidMount() {
    const creds = 'c-LnJbausk8uaidwuiYSH0dMAVBoeSIqWBGQ31za';
    fetch(`https://10.0.0.53/api/${creds}/lights/`)
      .then(res => res.json())
      .then(res => console.log(res))
      
  }

  colorsHover = () => {
    this.setState({
      colorButton: "btn-button-outline-success",
      colorsVisible: true
    });
  }


  render() {
    return (
      <div>
        <div className="row">
          <div className="col">
            <h4>Power</h4>
            <button onClick={this.powerSwitch} className="btn btn-primary">Power</button>
          </div>
          <div className="col">
            <h4>Color</h4>
            <button 
              className={'btn ' + this.state.colorButton} 
              onMouseEnter={this.colorsHover} 
              >
                Colors
            </button>
          </div>
        </div>
        <div>
          <CurrentStatus />
        </div>
        <div className="row">
          {this.state.colorsVisible
          ? <ColorChart />
          : <p></p>
          }
        </div>
      </div>

    )
  }
}