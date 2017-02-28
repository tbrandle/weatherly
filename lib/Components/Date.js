import React, { Component } from 'react';

class Date extends Component {

  render() {
    return (
      <h3 tabIndex='0' className='hourly-title'>
        <p>Hourly Forecast</p>
        { this.props.weekday },&nbsp;
        { this.props.month }&nbsp;
        { this.props.date }
      </h3>
    );
  }
}

export default Date;
