# react-leaflet-geosearch [![npm version](https://img.shields.io/npm/v/react-leaflet-geosearch.svg)](https://www.npmjs.com/package/react-leaflet-geosearch)
React Leaflet geosearching/geocoding control build on top of [React-Leaflet](https://github.com/PaulLeCam/react-leaflet). 

The SearchControl is using the plugin from [leaflet-geosearch](https://github.com/smeijer/leaflet-geosearch) 



# Getting started

```
import { SearchControl, OpenStreetMapProvider } from 'react-leaflet-geosearch'

//here you can add some styles
import './example/react-leaflet-geosearch.css';

....
const prov = OpenStreetMapProvider();
const GeoSearchControlElement = withLeaflet(SearchControl);

 <Map center={[42.09618442380296, -71.5045166015625]} zoom={2} zoomControl={true}>
               ...Layers
                <GeoSearchControlElement provider={prov} showMarker= {true} showPopup={false} popupFormat={({ query, result }) => result.label} 
                  maxMarkers={3}  retainZoomLevel= {false}  animateZoom= {true} autoClose= {false}  
                  searchLabel={'Enter address, please'} keepResult= {true} />
</Map>


```

For more details on how to use this plugin check the example.