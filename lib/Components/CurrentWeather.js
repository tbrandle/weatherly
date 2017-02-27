import React, { Component } from 'react';

class CurrentWeather extends Component {


  render() {
    return (
      <section className='today-current'>
        <h3 tabIndex='0' className='current-location'>
            {this.props.city},
            {this.props.state}
        </h3>
        <div tabIndex='0' className='current-temp'>
          {this.props.currentTemp}&deg;
        </div>
        <img tabIndex='0' className='current-icon'
          src={this.props.icon} alt='current forecast icon'/>
        <div tabIndex='0' className='current-hi-low'>
          <p className='current-hi'>{this.props.high }&deg; /</p>
          <p className='current-low'>&nbsp;{this.props.low}&deg;</p>
        </div>
        <div tabIndex='0' className='current-description'>
          { this.props.description }
        </div>
      </section>
    );
  }
}

export default CurrentWeather;
