const weatherData = require('../../mocks/weather.json');
WeatherService.$inject = [];

function WeatherService() {

  return {
    getCurrentWeather: getCurrently
  };

  function getCurrently() {
    return weatherData.currently;
  }
}

module.exports = WeatherService;
