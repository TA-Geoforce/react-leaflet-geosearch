"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = require("react");

var _reactLeaflet = require("react-leaflet");

var _leafletGeosearch = require("leaflet-geosearch");

var SearchControl = function SearchControl(props) {
  var map = (0, _reactLeaflet.useMap)();
  (0, _react.useEffect)(function () {
    var searchControl = new _leafletGeosearch.GeoSearchControl((0, _extends2.default)({
      provider: props.provider
    }, props));
    map.addControl(searchControl);
    return function () {
      return map.removeControl(searchControl);
    };
  }, [props]);
  return null;
};

var _default = SearchControl;
exports.default = _default;