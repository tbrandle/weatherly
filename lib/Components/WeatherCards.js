import React, { Component } from 'react';
import Hourly from './Hourly'
import TenDay from './TenDay'

const WeatherCards = ({ weather }) => {
  if (!Object.keys(weather).length) {
    return (
      <div className='valid-city'>
        Please enter a city and state
      </div>
    );
  }
  return (
    <div>
      <section className='today-current'>
        <div className='current-location'>
          {weather.location.city}, {weather.location.state}
        </div>
        <div className='current-temp'>
          { weather.current_observation.temp_f }&deg;
        </div>
        <img className='current-icon' src={weather.current_observation.icon_url}/>
        <div className='current-hi-low'>
          {weather.forecast.simpleforecast.forecastday[0].high.fahrenheit }&deg;/
          {weather.forecast.simpleforecast.forecastday[0].low.fahrenheit }&deg;
        </div>
        <div className='current-description'>
          { weather.forecast.txt_forecast.forecastday[0].fcttext }
        </div>
      </section>
      <section className='today-hourly'>
        <div className='hourly-title'>
        { weather.forecast.simpleforecast.forecastday[0].date.weekday },&nbsp;
        { weather.forecast.simpleforecast.forecastday[0].date.monthname}&nbsp;
        { weather.forecast.simpleforecast.forecastday[0].date.day }
        </div>
        <div className='hourly-forecast'>
          <Hourly time={ weather.hourly_forecast[0].FCTTIME.civil }
                  temp={ weather.hourly_forecast[0].temp.english }
                  icon={weather.hourly_forecast[0].icon_url}/>
          <Hourly time={ weather.hourly_forecast[1].FCTTIME.civil }
                  temp={ weather.hourly_forecast[1].temp.english }
                  icon={weather.hourly_forecast[1].icon_url}/>
          <Hourly time={ weather.hourly_forecast[2].FCTTIME.civil }
                  temp={ weather.hourly_forecast[2].temp.english }
                  icon={weather.hourly_forecast[2].icon_url}/>
          <Hourly time={ weather.hourly_forecast[3].FCTTIME.civil }
                  temp={ weather.hourly_forecast[3].temp.english }
                  icon={weather.hourly_forecast[3].icon_url}/>
          <Hourly time={ weather.hourly_forecast[4].FCTTIME.civil }
                  temp={ weather.hourly_forecast[4].temp.english }
                  icon={weather.hourly_forecast[4].icon_url}/>
          <Hourly time={ weather.hourly_forecast[5].FCTTIME.civil }
                  temp={ weather.hourly_forecast[5].temp.english }
                  icon={weather.hourly_forecast[5].icon_url}/>
          <Hourly time={ weather.hourly_forecast[6].FCTTIME.civil }
                  temp={ weather.hourly_forecast[6].temp.english }
                  icon={weather.hourly_forecast[6].icon_url}/>
        </div>
      </section>
      <section className='ten-day-section'>
        <div className='ten-day-title'>Ten Day Forecast</div>
        <div className='ten-day-forecast'>
          <TenDay day={weather.forecast.simpleforecast.forecastday[0].date.weekday}
            icon={weather.forecast.simpleforecast.forecastday[0].icon_url}
            high={weather.forecast.simpleforecast.forecastday[0].high.fahrenheit}
            low={weather.forecast.simpleforecast.forecastday[0].low.fahrenheit}/>
          <TenDay day={weather.forecast.simpleforecast.forecastday[1].date.weekday}
            icon={weather.forecast.simpleforecast.forecastday[1].icon_url}
            high={weather.forecast.simpleforecast.forecastday[1].high.fahrenheit}
            low={weather.forecast.simpleforecast.forecastday[1].low.fahrenheit}/>
          <TenDay day={weather.forecast.simpleforecast.forecastday[2].date.weekday}
            icon={weather.forecast.simpleforecast.forecastday[2].icon_url}
            high={weather.forecast.simpleforecast.forecastday[2].high.fahrenheit}
            low={weather.forecast.simpleforecast.forecastday[2].low.fahrenheit}/>
          <TenDay day={weather.forecast.simpleforecast.forecastday[3].date.weekday}
            icon={weather.forecast.simpleforecast.forecastday[3].icon_url}
            high={weather.forecast.simpleforecast.forecastday[3].high.fahrenheit}
            low={weather.forecast.simpleforecast.forecastday[3].low.fahrenheit}/>
          <TenDay day={weather.forecast.simpleforecast.forecastday[4].date.weekday}
            icon={weather.forecast.simpleforecast.forecastday[4].icon_url}
            high={weather.forecast.simpleforecast.forecastday[4].high.fahrenheit}
            low={weather.forecast.simpleforecast.forecastday[4].low.fahrenheit}/>
          <TenDay day={weather.forecast.simpleforecast.forecastday[5].date.weekday}
            icon={weather.forecast.simpleforecast.forecastday[5].icon_url}
            high={weather.forecast.simpleforecast.forecastday[5].high.fahrenheit}
            low={weather.forecast.simpleforecast.forecastday[5].low.fahrenheit}/>
          <TenDay day={weather.forecast.simpleforecast.forecastday[6].date.weekday}
            icon={weather.forecast.simpleforecast.forecastday[6].icon_url}
            high={weather.forecast.simpleforecast.forecastday[6].high.fahrenheit}
            low={weather.forecast.simpleforecast.forecastday[6].low.fahrenheit}/>
          <TenDay day={weather.forecast.simpleforecast.forecastday[7].date.weekday}
            icon={weather.forecast.simpleforecast.forecastday[7].icon_url}
            high={weather.forecast.simpleforecast.forecastday[7].high.fahrenheit}
            low={weather.forecast.simpleforecast.forecastday[7].low.fahrenheit}/>
          <TenDay day={weather.forecast.simpleforecast.forecastday[8].date.weekday}
            icon={weather.forecast.simpleforecast.forecastday[8].icon_url}
            high={weather.forecast.simpleforecast.forecastday[8].high.fahrenheit}
            low={weather.forecast.simpleforecast.forecastday[8].low.fahrenheit}/>
          <TenDay day={weather.forecast.simpleforecast.forecastday[9].date.weekday}
            icon={weather.forecast.simpleforecast.forecastday[9].icon_url}
            high={weather.forecast.simpleforecast.forecastday[9].high.fahrenheit}
            low={weather.forecast.simpleforecast.forecastday[9].low.fahrenheit}/>
        </div>
      </section>
    </div>
  );
};


export default WeatherCards;
