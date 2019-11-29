"use strict";

exports.__esModule = true;
exports.default = void 0;

var _leafletGeosearch = require("leaflet-geosearch");

var GoogleProvider = function GoogleProvider(key) {
  return new _leafletGeosearch.GoogleProvider({
    params: {
      key: key
    }
  });
};

var _default = GoogleProvider;
exports.default = _default;