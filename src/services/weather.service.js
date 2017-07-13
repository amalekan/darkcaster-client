/*jshint esversion: 6 */
const weatherData = require('../../mocks/weather.json');
WeatherService.$inject = ['$http'];

function WeatherService($http) {
  const baseUrl = 'https://salty-harbor-87960.herokuapp.com/weather/';
  return {
    getCurrentWeather: getCurrently
  };

  function getCurrently(lat, lon) {
    const url = `${baseUrl}${lat},${lon}`;
    return $http.get(url)
                 .then(response => {
                   return response.data.currently;
                 });
  }
}

module.exports = WeatherService;
