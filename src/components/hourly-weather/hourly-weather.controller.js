/*jshint esversion:6 */
HourlyWeatherController.$inject = ['WeatherService'];
HourlyWeatherController.$inject = ['ImageService'];

function HourlyWeatherController(weather) {
  this.lat = 0;
  this.lon = 0;

  this.search = function search() {
    weather.getHourlyWeather(this.lat, this.lon)
           .then(hourlyWeather => this.weatherData = hourlyWeather);
  };
}
module.exports = HourlyWeatherController;
