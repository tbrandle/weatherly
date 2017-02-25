import React, { Component } from 'react';

class Hourly extends Component {

  render() {
      return (
        <section className='hourly-forecast'>
          { this.props.hourlyArray.map((value, i) => {
            return <div className="hourly" >
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
