import React, { Component } from 'react';
import Weatherly from './Weatherly.js';

export default class Main extends Component {
  render() {
    return (
      <div>
        <Weatherly source={'https://api.wunderground.com/api/30cc6047ec5458e3/forecast/geolookup/conditions/forecast10day/hourly/q/'} />
      </div>
    );
  }
}
