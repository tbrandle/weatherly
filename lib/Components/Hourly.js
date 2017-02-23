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
          <img src={ this.props.icon }/>
        </div>
      );

  }
}

export default Hourly;
