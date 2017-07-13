/*jshint esversion:6 */
const clearDay = require('../../images/clear-day.png');
const rain = require('../../images/rain.png');
CurrentWeatherController.$inject = ['WeatherService']; //magic for us

function CurrentWeatherController(weather){
  this.lat = 0;
  this.lon = 0;
  this.imageLookup = {
    'clear-day': clearDay,
    'rain': rain
  };

  this.search = function search() {
    console.log(this.lat);
    console.log(this.lon);
    weather.getCurrentWeather(this.lat, this.lon)
           .then(currentWeather => this.weatherData = currentWeather);
  };
}
module.exports = CurrentWeatherController;
