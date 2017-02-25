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
      <section className='today-hourly'>
          <Date weekday={ weather.dateObject.weekday }
                month={ weather.dateObject.month }
                date={ weather.dateObject.date } />
          <Hourly hourlyArray={ weather.hourlyArray }/>
      </section>
      <section className='ten-day'>
          <h2 className='ten-day-title'>Ten Day Forecast</h2>
          <TenDay tenDayArray={ weather.tenDayArray }/>
      </section>
    </section>
  );
};


export default WeatherCards;
