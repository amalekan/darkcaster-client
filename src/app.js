/*jshint esversion: 6*/
const angular = require('angular');
const weatherData = require('../mocks/weather.json');
const image = require('./images/download.jpg');
console.log(image);
//create our application

angular.module('darkcaster-client', [])
       .filter('percentage', function (){
      return function(decimal){
        return `${decimal*100}%`;
      };
       }); //setter syntax

angular.module('darkcaster-client')
       .controller('MainController', MainController); //getter syntax
MainController.$inject = []; //magic for us

function MainController(){
  this.message = 'hello from angular';
  this.weatherData = weatherData.currently;
}
