/*jshint esversion:6 */
const searchController = require('./search.controller');
const htmlTemplate = require('./search.html');

const SearchComponent = {
  controller: searchController,
  template: htmlTemplate,
  bindings: {
    search: '&',
    lat: '=',
    lon: '=',
    location: '='
  }
};

module.exports = SearchComponent;
