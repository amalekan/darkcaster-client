/*jshint esversion:6 */
const clearDay = require('../../images/clear-day.png');
const rain = require('../../images/rain.png');
MainController.$inject = ['WeatherService']; //magic for us

function MainController(weather){
  this.message = 'hello from angular';
  this.imageLookup = {
    'clear-day': clearDay,
    'rain': rain
  };
  weather.getCurrentWeather(29, -81)
         .then(currentWeather => this.weatherData = currentWeather);
}
module.exports = MainController;
