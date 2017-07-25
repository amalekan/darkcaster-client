/*jshint esversion:6 */
HourlyWeatherController.$inject = ['ImageService'];

function HourlyWeatherController(images) {
  this.lat = 0;
  this.lon = 0;
  this.location ='';
  this.imageLookup = images.lookUp;

  // this.search = function search() {
  //   weather.getHourlyWeather(this.lat, this.lon, this.location)
  //          .then(hourlyWeather => this.weatherData = hourlyWeather);
  // };
}
module.exports = HourlyWeatherController;
