/*jshint esversion:6 */
CurrentWeatherController.$inject = ['WeatherService', 'ImageService'];

function CurrentWeatherController(weather, images){
  this.lat = 0;
  this.lon = 0;
  this.imageLookup = images;

  this.search = function search() {
    weather.getCurrentWeather(this.lat, this.lon)
           .then(currentWeather => this.weatherData = currentWeather);

  };
}
module.exports = CurrentWeatherController;
