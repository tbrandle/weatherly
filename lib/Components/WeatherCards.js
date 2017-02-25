import React, { Component } from 'react';
import Hourly from './Hourly';
import TenDay from './TenDay';
import CurrentWeather from './CurrentWeather';
import Date from './Date';

const WeatherCards = ({ weather }) => {
  if (!Object.keys(weather).length) {
    return (
      <div className='valid-city'>
        Please enter a city and state
      </div>
    );
  }
  return (
    <section className='bottom-section'>
      <CurrentWeather city={ weather.currentObject.city }
                      state={ weather.currentObject.state }
                      currentTemp={ weather.currentObject.currentTemp }
                      high={ weather.currentObject.high }
                      low={ weather.currentObject.low }
                      icon={ weather.currentObject.icon }
                      description={ weather.currentObject.description }/>
      <Hourly hourlyArray={ weather.hourlyArray }
              dateObject={ weather.dateObject }/>
      <TenDay tenDayArray={ weather.tenDayArray }/>
    </section>
  );
};


export default WeatherCards;
