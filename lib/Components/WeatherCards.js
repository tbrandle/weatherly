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
      <div>Location: </div>
      <div>Date: </div>

      <div>Current Weather: { weather.current_observation.temp_f }</div>
      <div>Description:{ weather.forecast.txt_forecast.forecastday[0].fcttext }</div>
      <div>High: { weather.forecast.simpleforecast.forecastday[0].high.fahrenheit }</div>
      <div>Low:  { weather.forecast.simpleforecast.forecastday[0].low.fahrenheit }</div>
    </div>
  );
};


export default WeatherCards;

// { weather.map((item, index) => {
//   return (
//     <div key={ index }>
//       <p> { item.temp_f }</p>
//     </div>
//   );
// })}
