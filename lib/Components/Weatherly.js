import React, { Component } from 'react';
import $ from 'jquery';
import WeatherCards from './WeatherCards.js';
import objectCleaner from './ObjectCleaner.js';

export default class Weatherly extends Component {
  constructor() {
    super();
    this.state = {
      location: '',
      weather: [],
      storedItem: localStorage.getItem('location'),
    };
  }

  componentDidMount() {
    const { storedItem } = this.state;
    if (storedItem) {
      this.fetchWeather(storedItem);
    }
  }

  submitLocation(e) {
    localStorage.setItem('location', this.state.location);
    this.fetchWeather(this.state.location);
    this.setState({ location: '' });
  }

  fetchWeather(location) {
    fetch(this.props.source + '/' + location + '.json')
      .then(response => response.json())
      .then(data => this.setState({ weather: objectCleaner(data) }));
  }

  render() {
    return (
      <section className='wrapper'>
        <section className="input-section">
          <h1 className='logo' tabIndex='0'>Weatherly</h1>
          <form className='form'>
            <input className='location'
                   type='text'
                   placeholder='City, State'
                   value={this.state.location}
                   onChange={(e) => this.setState({ location: e.target.value })}
                   title='Search Location'/>

            <input tabIndex='0'
                   className='submit'
                   type="image"
                   src="https://rawgit.com/tbrandle/weatherly/master/css/images/search.svg" alt="Submit button"
                   disabled={!this.state.location}
                   onClick={() => this.submitLocation() }/>
          </form>
        </section>
        <WeatherCards weather= {this.state.weather}/>
      </section>
    );
  }
}
