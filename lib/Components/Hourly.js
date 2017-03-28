import React, { Component } from 'react';
import Date from './Date';

class Hourly extends Component {

  render() {
    return (
      <section className='hourly-section'>
        <Date { ...this.props.dateObject } />
        <section className='hourly-forecast' title='hourly forecast for next seven hours'>
          { this.props.hourlyArray.map((value, i) => {
            return <div className='hourly'>
                <p className='hourly-time' tabIndex='0'>
                  { this.props.hourlyArray[i].time }
                </p>
                <img tabIndex='0' src={ this.props.hourlyArray[i].icon } alt='hourly forecast icon'/>
                <p className='hourly-temp' tabIndex='0'>
                  { this.props.hourlyArray[i].temp }&deg;
                </p>
              </div>;
          }) }
        </section>
      <img className='dot-icon' src='../../css/images/dots.svg' alt='scrolling dots'/>
    </section>
    );
  }
}

export default Hourly;
