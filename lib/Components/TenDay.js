import React, { Component } from 'react';

class TenDay extends Component {

  render() {
    return (
      <section className='ten-day-section'>
        <h3 tabIndex='0' className='ten-day-title'>Ten Day Forecast</h3>
          { this.props.tenDayArray.map((value, i) => {
            return <div className="ten-day-forecast">
              <p tabIndex='0'>
                { this.props.tenDayArray[i].day }
              </p>
              <img tabIndex='0' src={ this.props.tenDayArray[i].icon }
                   alt='ten day forecast icon'/>
              <p tabIndex='0' >
                { this.props.tenDayArray[i].high }&deg; / { this.props.tenDayArray[i].low }&deg;
              </p>
            </div>;
          })}
      </section>
    );
  }
}

export default TenDay;
