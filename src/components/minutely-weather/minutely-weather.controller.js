/*jshint esversion:6 */
const clearDay = require('../../images/clear-day.png');
const rain = require('../../images/rain.png');
MinutelyWeatherController.$inject = ['WeatherService']; //magic for us

function MinutelyWeatherController(weather){
  this.lat = 0;
  this.lon = 0;
  this.imageLookup = {
    'clear-day': clearDay,
    'rain': rain
  };

  this.search = function search() {
    console.log('searching...');
    weather.getMinutelyWeather(this.lat, this.lon)
           .then(minutelyWeather => {this.weatherData = minutelyWeather;
            console.log(this.weatherData);
           });
  };
}
module.exports = MinutelyWeatherController;
