import React, { Component } from 'react';
import $ from 'jquery';
import WeatherCards from './WeatherCards.js';
import ObjectCleaner from './ObjectCleaner.js';

export default class Weatherly extends Component {
  constructor() {
    super();
    this.state = {
      location: '',
      weather: [],
    };
  }

  submitLocation(e) {
    e.preventDefault();
    $.get(this.props.source + '/' + this.state.location + '.json').then((data) => {
      this.setState({ weather: ObjectCleaner(data) });
    });
  }

  render() {
    return (
      <section className="input-section">
        <h1>Weatherly</h1>

        <input className='location' type='text' placeholder='City, State' value={this.state.location} onChange={(e) => this.setState({ location: e.target.value })}/>
        <input className='submit' type="image" src="../css/search.svg" alt="Submit button" disabled={!this.state.location} onClick={this.submitLocation.bind(this)}/>
        <WeatherCards weather= {this.state.weather}/>
      </section>
    );
  }
}
