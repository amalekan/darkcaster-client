/*jshint esversion:6 */
MinutelyWeatherController.$inject = ['WeatherService', 'ImageService'];

function MinutelyWeatherController(weather, images){
  this.lat = 0;
  this.lon = 0;
  this.imageLookup = images;

  this.search = function search() {
    weather.getMinutelyWeather(this.lat, this.lon)
           .then(minutelyWeather => {this.weatherData = minutelyWeather;
           });
  };
}
module.exports = MinutelyWeatherController;
