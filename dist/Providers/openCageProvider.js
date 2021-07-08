"use strict";

exports.__esModule = true;
exports.default = void 0;

var _leafletGeosearch = require("leaflet-geosearch");

var OpenCageProvider = function OpenCageProvider(key) {
  return new _leafletGeosearch.OpenCageProvider({
    params: {
      key: key
    }
  });
};

var _default = OpenCageProvider;
exports.default = _default;