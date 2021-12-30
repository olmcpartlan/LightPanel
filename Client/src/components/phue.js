import React, { Component } from 'react';
import colorFormHeader from './colorFormHeader';
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
      fetch('http://10.0.0.65:5000/status')
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
        <div>
          <CurrentStatus />
        </div>
      </div>
    )
  }
}
