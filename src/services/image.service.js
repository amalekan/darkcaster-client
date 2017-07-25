/*jshint esversion:6 */
const clearDay = require('../images/clear-day.png');
const clearNight = require('../images/clear-night.png');
const snow = require('../images/snow.png');
const fog = require('../images/fog.png');
const sleet = require('../images/sleet.png');
const cloudy = require('../images/cloudy.png');
const wind = require('../images/wind.png');
const partlyCloudyNight = require('../images/partly-cloudy-night.png');
const partlyCloudyDay = require('../images/partly-cloudy-day.png');
const rain = require('../images/rain.png');
const missingImage = require('../images/missing.png');

function ImageService() {
  const imageLookup = {
    'clear-Day': clearDay,
    'clear-night': clearNight,
    'snow': snow,
    'fog': fog,
    'sleet': sleet,
    'cloudy': cloudy,
    'rain': rain,
    'wind': wind,
    'partly-cloudy-night': partlyCloudyNight,
    'partly-cloudy-day': partlyCloudyDay
  };
  return {
    lookUp: imageLookup,
    missing: missingImage
  };
}

module.exports = ImageService;
