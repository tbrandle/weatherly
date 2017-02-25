import React, { Component } from 'react';
import Date from './Date';

class Hourly extends Component {

  render() {
      return (
        <section className='hourly-forecast'>
          <div className='today-hourly'>
              <Date weekday={ this.props.dateObject.weekday }
                    month={ this.props.dateObject.month }
                    date={ this.props.dateObject.date } />
          </div>
          { this.props.hourlyArray.map((value, i) => {
            return <div className="hourly">
                  <p>
                    { this.props.hourlyArray[i].time }
                  </p>
                  <img src={ this.props.hourlyArray[i].icon }/>
                  <p>
                    { this.props.hourlyArray[i].temp }&deg;
                  </p>
              </div>;
          }) }
        </section>
      );
  }
}

export default Hourly;
