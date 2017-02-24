function ObjectCleaner(weather) {
  let hourlyArray = hourlyForecast(weather);
  let tenDayArray = tenDayForecast(weather);
  let currentArray = currentForecast(weather);

  return {hourlyArray, tenDayArray}
}

export default ObjectCleaner

const currentForecast = (weather) => {
  let tempArray = weather.hourly_forecast;
  let hourlyForecast = [];

  tempArray.forEach((obj, index) => {
    if (index < 7) {
      hourlyForecast.push(tempArray[index] = {
        time: tempArray[index].FCTTIME.civil,
        temp: tempArray[index].temp.english,
        icon: tempArray[index].icon_url,
      });
    }
  });
  return hourlyForecast;

  // city
  // state
  // current temp
  // high
  // low
  // description
  //

}
const hourlyForecast = (weather) => {
  let tempArray = weather.hourly_forecast;
  let hourlyForecast = [];

  tempArray.forEach((obj, index) => {
    if (index < 7) {
      hourlyForecast.push(tempArray[index] = {
        time: tempArray[index].FCTTIME.civil,
        temp: tempArray[index].temp.english,
        icon: tempArray[index].icon_url,
      });
    }
  });
  return hourlyForecast;
};

const tenDayForecast = (weather) => {
  let tempArray = weather.forecast.simpleforecast.forecastday;
  let tenDayForecast = [];
  tempArray.forEach((obj, index) => {
    if (index < 10) {
      tenDayForecast.push(tempArray[index] = {day: tempArray[index].date.weekday, icon: tempArray[index].icon_url, high: tempArray[index].high.fahrenheit, low: tempArray[index].low.fahrenheit})
    }
  });
  return tenDayForecast;
};
