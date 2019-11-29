"use strict";

exports.__esModule = true;
exports.default = void 0;

var _leafletGeosearch = require("leaflet-geosearch");

var BingProvider = function BingProvider(key) {
  return new _leafletGeosearch.BingProvider({
    params: {
      key: key
    }
  });
};

var _default = BingProvider;
exports.default = _default;