/*jshint esversion:6 */
CurrentWeatherController.$inject = ['WeatherService'];
CurrentWeatherController.$inject = ['ImageService'];

function CurrentWeatherController(weather){
  this.lat = 0;
  this.lon = 0;

  this.search = function search() {
    weather.getCurrentWeather(this.lat, this.lon)
           .then(currentWeather => this.weatherData = currentWeather);

  };
}
module.exports = CurrentWeatherController;
