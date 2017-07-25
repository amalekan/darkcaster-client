/*jshint esversion: 6 */
WeatherService.$inject = ['$http'];

function WeatherService($http) {
  const baseUrl = 'https://salty-harbor-87960.herokuapp.com/weather/';
  return {
    get: getAll
  };

  function getAll(lat, lon, location) {
    if (location == ''){
    const url = `${baseUrl}${lat},${lon}`;
    return $http.get(url)
                .then(response => {
                  return response.data;
                });
    }
    const url = `${baseUrl}location/${location}`;
    return $http.get(url)
                .then(response => {
                  return response.data;
                });
  }
}

module.exports = WeatherService;
