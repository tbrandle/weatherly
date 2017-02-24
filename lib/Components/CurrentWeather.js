import React, { Component } from 'react';
//import helper function

class CurrentWeather extends Component {


  render() {

    return (
      <div className='current-location'>
        {this.props.city}, {this.props.state}
      </div>
      <div className='current-temp'>
        {this.props.currentTemp}&deg;
      </div>
      <img className='current-icon' src={this.props.icon}/>
      <div className='current-hi-low'>
        {this.props.high }&deg;/
        {this.props.low}&deg;
      </div>
      <div className='current-description'>
        { this.props.description }
      </div>
    )

  }
}


        // <CurrentWeather city=  state=  currentTemp=  high=  low=  icon=  description=  />
