/*jshint esversion:6 */
DailyWeatherController.$inject = ['WeatherService', 'ImageService'];

function DailyWeatherController(weather, images) {
  this.lat = 0;
  this.lon = 0;
  this.location = '';
  this.imageLookup = images;

  this.search = function search() {
    weather.getDailyWeather(this.lat, this.lon, this.location)
           .then(dailyWeather => {
             this.weatherData = dailyWeather;
           });
  };
}
module.exports = DailyWeatherController;
