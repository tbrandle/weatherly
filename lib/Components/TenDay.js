import React, { Component } from 'react';

class TenDay extends Component {

  render() {

      return (
        <div className="ten-day">
          <p>
            { this.props.day }
          </p>
          <img src={ this.props.icon }/>
          <p>
            { this.props.high }&deg; / { this.props.low }
          </p>
        </div>
      );

  }
}

export default TenDay;
