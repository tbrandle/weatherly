import React, { Component } from 'react';

class TenDay extends Component {

  render() {
      return (
        <section className='ten-day-section'>
            { this.props.tenDayArray.map((value, i) => {
            return <div className="ten-day-forecast">
                  <p>
                    { this.props.tenDayArray[i].day }
                  </p>
                  <img src={ this.props.tenDayArray[i].icon }/>
                  <p>
                    { this.props.tenDayArray[i].high }&deg; / { this.props.tenDayArray[i].low }&deg;
                  </p>
              </div>;
          }) }
        </section>
      );
  }
}

export default TenDay;
