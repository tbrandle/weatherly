import React, { Component } from 'react';

class Hourly extends Component {

  render() {

      return (
        <div className="hourly">
          <p>
            { this.props.time }
          </p>
          <img src={ this.props.icon }/>
          <p>
            { this.props.temp }&deg;
          </p>
        </div>
      );

  }
}

export default Hourly;
