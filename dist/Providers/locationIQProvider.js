"use strict";

exports.__esModule = true;
exports.default = void 0;

var _leafletGeosearch = require("leaflet-geosearch");

var LocationIQProvider = function LocationIQProvider(key) {
  return new _leafletGeosearch.LocationIQProvider({
    params: {
      key: key
    }
  });
};

var _default = LocationIQProvider;
exports.default = _default;