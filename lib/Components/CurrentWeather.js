import React, { Component } from 'react';

class CurrentWeather extends Component {


  render() {

    return (
      <section className='today-current'>
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
      </section>
    )

  }
}

export default CurrentWeather
