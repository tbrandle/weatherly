import React, { Component } from 'react';
import Hourly from './Hourly'
import TenDay from './TenDay'
import CurrentWeather from './CurrentWeather'


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
        <CurrentWeather city={ weather.currentObject.city }
                        state={ weather.currentObject.state }
                        currentTemp={ weather.currentObject.currentTemp }
                        high={ weather.currentObject.high }
                        low={ weather.currentObject.low }
                        icon={ weather.currentObject.icon }
                        description={ weather.currentObject.description }/>
      </section>
      <section className='today-hourly'>
        <div className='hourly-title'>
        { weather.dateObject.weekday },&nbsp;
        { weather.dateObject.month }&nbsp;
        { weather.dateObject.date }
        </div>
        <div className='hourly-forecast'>
          // create a for loop to instantiate hourly
          <Hourly time={ weather.hourlyArray[0].time }
                  temp={ weather.hourlyArray[0].temp }
                  icon={weather.hourlyArray[0].icon}/>
                <Hourly time={ weather.hourlyArray[1].time }
                  temp={ weather.hourlyArray[1].temp }
                  icon={weather.hourlyArray[1].icon}/>
                <Hourly time={ weather.hourlyArray[2].time }
                  temp={ weather.hourlyArray[2].temp }
                  icon={weather.hourlyArray[2].icon}/>
                <Hourly time={ weather.hourlyArray[3].time }
                  temp={ weather.hourlyArray[3].temp }
                  icon={weather.hourlyArray[3].icon}/>
                <Hourly time={ weather.hourlyArray[4].time }
                  temp={ weather.hourlyArray[4].temp }
                  icon={weather.hourlyArray[4].icon}/>
                <Hourly time={ weather.hourlyArray[5].time }
                  temp={ weather.hourlyArray[5].temp }
                  icon={weather.hourlyArray[5].icon}/>
                <Hourly time={ weather.hourlyArray[6].time }
                  temp={ weather.hourlyArray[6].temp }
                  icon={weather.hourlyArray[6].icon}/>
        </div>
      </section>
      <section className='ten-day-section'>
        <div className='ten-day-title'>Ten Day Forecast</div>
        <div className='ten-day-forecast'>
          // create a for loop to instsantiate

          <TenDay day={weather.tenDayArray[0].day}
            icon={weather.tenDayArray[0].icon}
            high={weather.tenDayArray[0].high}
            low={weather.tenDayArray[0].low}/>
          <TenDay day={weather.tenDayArray[1].day}
            icon={weather.tenDayArray[1].icon}
            high={weather.tenDayArray[1].high}
            low={weather.tenDayArray[1].low}/>
          <TenDay day={weather.tenDayArray[2].day}
            icon={weather.tenDayArray[2].icon}
            high={weather.tenDayArray[2].high}
            low={weather.tenDayArray[2].low}/>
          <TenDay day={weather.tenDayArray[3].day}
            icon={weather.tenDayArray[3].icon}
            high={weather.tenDayArray[3].high}
            low={weather.tenDayArray[3].low}/>
          <TenDay day={weather.tenDayArray[4].day}
            icon={weather.tenDayArray[4].icon}
            high={weather.tenDayArray[4].high}
            low={weather.tenDayArray[4].low}/>
          <TenDay day={weather.tenDayArray[5].day}
            icon={weather.tenDayArray[5].icon}
            high={weather.tenDayArray[5].high}
            low={weather.tenDayArray[5].low}/>
          <TenDay day={weather.tenDayArray[6].day}
            icon={weather.tenDayArray[6].icon}
            high={weather.tenDayArray[6].high}
            low={weather.tenDayArray[6].low}/>
          <TenDay day={weather.tenDayArray[7].day}
            icon={weather.tenDayArray[7].icon}
            high={weather.tenDayArray[7].high}
            low={weather.tenDayArray[7].low}/>
          <TenDay day={weather.tenDayArray[8].day}
            icon={weather.tenDayArray[8].icon}
            high={weather.tenDayArray[8].high}
            low={weather.tenDayArray[8].low}/>
          <TenDay day={weather.tenDayArray[9].day}
            icon={weather.tenDayArray[9].icon}
            high={weather.tenDayArray[9].high}
            low={weather.tenDayArray[9].low}/>
        </div>
      </section>
    </div>
  );
};


export default WeatherCards;
