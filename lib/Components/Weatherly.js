import React, { Component } from 'react';
import $ from 'jquery';
import WeatherCards from './WeatherCards.js';

export default class Weatherly extends Component {
  constructor() {
    super();
    this.state = {
      city: '',
      state: '',
      weather: [],
    };
  }

  submitLocation(e) {
    e.preventDefault();
    $.get(this.props.source + '/' + this.state.state + '/' + this.state.city + '.json').then((data) => {
      this.setState({ weather: data });
    });
  }

  render() {
    return (
      <section className="input-section">
        <h1>Weatherly</h1>

        <input className='city' type='text' placeholder='City' value={this.state.city} onChange={(e) => this.setState({ city: e.target.value })}/>
        <input className='state'  type='text' placeholder='State' maxLength = '2' value={this.state.state} onChange={(e) => this.setState({ state: e.target.value })}/>
        <input className='submit' type="image" src="../css/search.svg" alt="Submit button"disabled={!this.state.state && !this.state.city} onClick={this.submitLocation.bind(this)}/>
        <WeatherCards weather= {this.state.weather}/>
      </section>
    );
  }
}
