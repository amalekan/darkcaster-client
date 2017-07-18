/*jshint esversion:6 */
MinutelyWeatherController.$inject = ['WeatherService', 'ImageService'];

function MinutelyWeatherController(weather, images){
  this.lat = 0;
  this.lon = 0;
  this.location ='';
  this.imageLookup = images;

  this.search = function search() {
    weather.getMinutelyWeather(this.lat, this.lon, this.location)
           .then(minutelyWeather => {this.weatherData = minutelyWeather;
           });
  };
}
module.exports = MinutelyWeatherController;
