/*jshint esversion: 6*/
const angular = require('angular');
//services
const WeatherService = require('./services/weather.service');
//create our application

angular.module('darkcaster-client', [])
       .filter('percentage', function (){
          return function(decimal){
            return `${decimal*100}%`;
         };
       }); //setter syntax

angular.module('darkcaster-client')   //getter syntax
       .controller('MainController', MainController)
       .factory('WeatherService', WeatherService);

MainController.$inject = ['WeatherService']; //magic for us

function MainController(weather){
  this.message = 'hello from angular';
  this.weatherData = weather.getCurrentWeather();
}
