/* jshint esversion: 6 */
SearchController.$inject = ['WeatherService'];

function SearchController(weather){
  this.lat = 0;
  this.lon = 0;
  this.location = '';
}

module.exports = SearchController;
