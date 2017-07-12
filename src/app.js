/*jshint esversion: 6*/
const angular = require('angular');
//services
const WeatherService = require('./services/weather.service');
//components
const CurrentWeatherComponent = require('./components/current-weather/index');
//create our application

angular.module('darkcaster-client', [])
       .filter('percentage', function (){
          return function(decimal){
            return `${decimal*100}%`;
         };
       }); //setter syntax

angular.module('darkcaster-client')   //getter syntax
       .factory('WeatherService', WeatherService)
       .component('currentWeather', CurrentWeatherComponent);
