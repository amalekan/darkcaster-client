/*jshint esversion: 6*/
const angular = require('angular');
//services
const WeatherService = require('./services/weather.service');
//components
const CurrentWeatherComponent = require('./components/current-weather/');
//create our application
const MinutelyWeatherComponent = require('./components/minutely-weather/');
angular.module('darkcaster-client', [])
       .factory('WeatherService', WeatherService)
       .component('currentWeather', CurrentWeatherComponent)
       .component('minutelyWeather', MinutelyWeatherComponent)
       .filter('percentage', function (){
          return function(decimal){
            return `${Math.round(decimal*100)}%`;
         };
       });
