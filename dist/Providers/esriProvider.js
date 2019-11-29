"use strict";

exports.__esModule = true;
exports.default = void 0;

var _leafletGeosearch = require("leaflet-geosearch");

var EsriProvider = function EsriProvider(key) {
  return new _leafletGeosearch.EsriProvider({
    params: {
      key: key
    }
  });
};

var _default = EsriProvider;
exports.default = _default;