/*jshint esversion: 6*/
const angular = require('angular');
//services
const WeatherService = require('./services/weather.service');
//components
const CurrentWeatherComponent = require('./components/current-weather/');
//create our application

angular.module('darkcaster-client', [])
       .filter('percentage', function (){
          return function(decimal){
            return `${Math.round(decimal*100)}%`;
         };
       })
       .factory('WeatherService', WeatherService)
       .component('currentWeather', CurrentWeatherComponent);
