/*jshint esversion: 6*/
const angular = require('angular');
const weatherData = require('../mocks/weather.json');
//create our application

angular.module('darkcaster-client', []); //setter syntax

angular.module('darkcaster-client')
       .controller('MainController', MainController); //getter syntax

MainController.$inject = []; //magic for us

function MainController(){
  this.message = 'hello from angular';
  this.weatherData = weatherData.currently;
}
