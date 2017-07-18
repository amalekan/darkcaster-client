/*jshint esversion:6 */
MinutelyWeatherController.$inject = ['WeatherService']; //magic for us
MinutelyWeatherController.$inject = ['ImageService'];

function MinutelyWeatherController(weather){
  this.lat = 0;
  this.lon = 0;

  this.search = function search() {
    weather.getMinutelyWeather(this.lat, this.lon)
           .then(minutelyWeather => {this.weatherData = minutelyWeather;
           });
  };
}
module.exports = MinutelyWeatherController;
