import React, { Component } from 'react';

class Hourly extends Component {

  render() {

      return (
        <div>
          <p>
            { this.props.time }
          </p>
          <p>
            { this.props.temp }&deg;
          </p>
          <p>
            { this.props.icon }
          </p>
        </div>
      );

  }
}

export default Hourly;
