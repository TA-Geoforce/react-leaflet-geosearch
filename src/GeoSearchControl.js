import { withLeaflet, MapControl } from 'react-leaflet';
import { GeoSearchControl } from 'leaflet-geosearch';
import './react-leaflet-geosearch.css';



class SearchControl extends MapControl{
  createLeafletElement(props) {
    return GeoSearchControl(props);
  }

  componentDidMount() {
    super.componentDidMount();
    const { map } = this.props.leaflet || this.context;
    const {
      onShowLocation,
      onMarkerDragend,
    } = this.props;
    map.on('geosearch/showlocation', (e) => {
      this._propagateEvent(onShowLocation, e);
    })
      .on('geosearch/marker/dragend', (e) => {
        this._propagateEvent(onMarkerDragend, e);
      });
  }

  updateLeafletElement(fromProps, toProps) {
    const { map } = this.props.leaflet || this.context;
    this.leafletElement.remove();
    this.leafletElement = new SearchControl(toProps);
    this.leafletElement.addTo(map);
  }

  _propagateEvent(eventHandler, event) {
    if (typeof eventHandler !== 'function') return;
    eventHandler(event);
  }
}

export default withLeaflet(SearchControl);