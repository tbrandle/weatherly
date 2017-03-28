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
    };
  }

  submitLocation(e) {
    localStorage.setItem('location', this.state.location);
    this.componentDidMount();
    this.setState({ location: '' });
  }

  componentDidMount() {
    const storedItem = localStorage.getItem('location');
    if (storedItem) {
      $.get(this.props.source + '/' + storedItem + '.json').then((data) => {
        this.setState({ weather: objectCleaner(data) });
      });
    }
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
                   src="../../css/images/search.png" alt="Submit button"
                   disabled={!this.state.location}
                   onClick={this.submitLocation.bind(this)}/>
          </form>
        </section>
        <WeatherCards weather= {this.state.weather}/>
      </section>
    );
  }
}
