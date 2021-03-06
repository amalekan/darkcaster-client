/*jshint esversion:6 */
const htmlTemplate = require('./minutely-weather.html');
const minutelyController = require('./minutely-weather.controller');

const MinutelyWeatherComponent = {
  template: htmlTemplate,
  controller: minutelyController,
  bindings: {
    weather: '<'
  }
};

module.exports = MinutelyWeatherComponent;
