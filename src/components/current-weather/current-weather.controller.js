/*jshint esversion:6 */
CurrentWeatherController.$inject = ['ImageService'];

function CurrentWeatherController(images){
  this.lat = 0;
  this.lon = 0;
  this.location = '';
  this.imageLookup = images.lookUp;

}
module.exports = CurrentWeatherController;
