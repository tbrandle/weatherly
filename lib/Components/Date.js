import React, { Component } from 'react';

class Date extends Component {

  render() {
    return (
      <div className='hourly-title'>
        { this.props.weekday }
        { this.props.month }
        { this.props.date }
      </div>
    );
  }
}

export default Date;
