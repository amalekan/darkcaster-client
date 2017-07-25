/*jshint esversion: 6 */
MainAppController.$inject = ['WeatherService'];

function MainAppController(weather) {
  this.lat = 0;
  this.lon = 0;
  this.location = '';
  this.search = search;

  function search() {
    weather.get(this.lat, this.lon, this.location)
           .then(weatherData => this.weatherData = weatherData);
  }
}

module.exports = MainAppController;
