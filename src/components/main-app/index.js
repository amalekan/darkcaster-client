/*jshint esversion: 6 */
const htmlTemplate = require('./main-app.html');
const mainAppController = require('./main-app.controller');

const MainAppComponent = {
  controller: mainAppController,
  template: htmlTemplate
};

module.exports = MainAppComponent;
