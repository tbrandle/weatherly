import React, { Component } from 'react';

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

export default CurrentWeather

// <CurrentWeather city={ weather.location.city }
//                 state={ weather.location.state }
//                 currentTemp={ weather.current_observation.temp_f }
//                 high={ weather.forecast.simpleforecast.forecastday[0].high.fahrenheit }
//                 low={ weather.forecast.simpleforecast.forecastday[0].low.fahrenheit }
//                 icon={ weather.current_observation.icon_url }
//                 description={ weather.forecast.txt_forecast.forecastday[0].fcttext }
//                 />
