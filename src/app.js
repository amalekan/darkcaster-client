/*jshint esversion: 6*/
const angular = require('angular');
//services
const WeatherService = require('./services/weather.service');
const ImageService = require('./services/image.service');
//components
const CurrentWeatherComponent = require('./components/current-weather/');
const HourlyWeatherComponent = require('./components/hourly-weather/');
const MinutelyWeatherComponent = require('./components/minutely-weather/');
const DailyWeatherComponent = require('./components/daily-weather');
//Begin App
angular.module('darkcaster-client', [])
       .factory('WeatherService', WeatherService)
       .factory('ImageService', ImageService)
       .component('currentWeather', CurrentWeatherComponent)
       .component('hourlyWeather', HourlyWeatherComponent)
       .component('minutelyWeather', MinutelyWeatherComponent)
       .component('dailyWeather', DailyWeatherComponent)
       .filter('percentage', function (){
          return function(decimal){
            return `${Math.round(decimal*100)}%`;
         };
       });
