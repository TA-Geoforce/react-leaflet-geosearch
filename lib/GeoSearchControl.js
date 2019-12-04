"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _reactLeaflet = require("react-leaflet");

var _leafletGeosearch = require("leaflet-geosearch");

var SearchControl =
/*#__PURE__*/
function (_MapControl) {
  (0, _inheritsLoose2.default)(SearchControl, _MapControl);

  function SearchControl() {
    return _MapControl.apply(this, arguments) || this;
  }

  var _proto = SearchControl.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    return (0, _leafletGeosearch.GeoSearchControl)(props);
  };

  _proto.componentDidMount = function componentDidMount() {
    var _this = this;

    _MapControl.prototype.componentDidMount.call(this);

    var _ref = this.props.leaflet || this.context,
        map = _ref.map;

    var _this$props = this.props,
        onShowLocation = _this$props.onShowLocation,
        onMarkerDragend = _this$props.onMarkerDragend;
    map.on('geosearch/showlocation', function (e) {
      _this._propagateEvent(onShowLocation, e);
    }).on('geosearch/marker/dragend', function (e) {
      _this._propagateEvent(onMarkerDragend, e);
    });
  };

  return SearchControl;
}(_reactLeaflet.MapControl);

var _default = (0, _reactLeaflet.withLeaflet)(SearchControl);

exports.default = _default;