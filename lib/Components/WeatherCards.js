import React from 'react';

const WeatherCards = ({ weather }) => {
  if (!Object.keys(weather).length) {
    return (
      <div>
        Please enter a valid city
      </div>
    );
  }
  return (
    <div>
      <section class='today-current'>
      <div class='current-location'>{weather.location.city}, {weather.location.state}</div>
      <div class='current-temp'>{ weather.current_observation.temp_f }&deg; </div>
      <img class='current-icon' src={weather.current_observation.icon_url}/>
      <div class='current-hi-low'>{weather.forecast.simpleforecast.forecastday[0].high.fahrenheit }&deg;/ {weather.forecast.simpleforecast.forecastday[0].low.fahrenheit }&deg;</div>
      <div class='current-description'>{ weather.forecast.txt_forecast.forecastday[0].fcttext }</div>
    </section>
    <section class='today-hourly'>
      <div class='today-date'>{ weather.forecast.simpleforecast.forecastday[0].date.weekday } { weather.forecast.simpleforecast.forecastday[0].date.day } { weather.forecast.simpleforecast.forecastday[0].date.monthname } </div>
    </section>
    </div>
  );
};


export default WeatherCards;
