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
    // debugger
  }

  render() {
    return (
      <div>
        <section>Weatherly</section>
        <input type='text' placeholder='Denver' value={this.state.city} onChange={(e) => this.setState({ city: e.target.value })}/>
        <input type='text' placeholder='CO' maxLength = '2' value={this.state.state} onChange={(e) => this.setState({ state: e.target.value })}/>
        <input type='submit' disabled={!this.state.state && !this.state.city} onClick={this.submitLocation.bind(this)}/>
        <WeatherCards weather= {this.state.weather}/>
      </div>
    );
  }
}
