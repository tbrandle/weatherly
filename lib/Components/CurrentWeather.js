import React, { Component } from 'react';

class CurrentWeather extends Component {


  render() {

    return (
      <div>
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
      </div>
    )

  }
}

export default CurrentWeather

// <CurrentWeather city={ weather.currentObject.city }
//                 state={ weather.currentObject.state }
//                 currentTemp={ weather.currentObject.currentTemp }
//                 high={ weather.currentObject.high }
//                 low={ weather.currentObject.low }
//                 icon={ weather.currentObject.icon }
//                 description={ weather.currentObject.description }
//                 />
