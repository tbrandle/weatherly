import React, { Component } from 'react';
import Hourly from './Hourly';
import TenDay from './TenDay';
import CurrentWeather from './CurrentWeather';
import Date from './Date';

const WeatherCards = ({ weather }) => {
  if (!Object.keys(weather).length) {
    return (
      <div className='valid-city'>
        Please enter a valid city and state
      </div>
    );
  }
  return (
    <section className='bottom-section'>
      <CurrentWeather { ...weather.currentObject }/>
      <Hourly hourlyArray={ weather.hourlyArray }
              dateObject={ weather.dateObject }/>
      <TenDay tenDayArray={ weather.tenDayArray }/>
    </section>
  );
};


export default WeatherCards;
