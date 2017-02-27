import React, { Component } from 'react';
import Date from './Date';

class Hourly extends Component {

  render() {
      return (
        <section>
          <Date weekday={ this.props.dateObject.weekday }
            month={ this.props.dateObject.month }
            date={ this.props.dateObject.date } />
        <section className='hourly-forecast' title='hourly forecast for next seven hours'>
          { this.props.hourlyArray.map((value, i) => {
            return <div className='hourly'>
                  <p tabIndex='0'>
                    { this.props.hourlyArray[i].time }
                  </p>
                  <img tabIndex='0' src={ this.props.hourlyArray[i].icon } alt='hourly forecast icon'/>
                  <p tabIndex='0'>
                    { this.props.hourlyArray[i].temp }&deg;
                  </p>
              </div>;
          }) }
        </section>
      </section>
      );
  }
}

export default Hourly;
