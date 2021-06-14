# react-leaflet-geosearch [![npm version](https://img.shields.io/npm/v/react-leaflet-geosearch.svg)](https://www.npmjs.com/package/react-leaflet-geosearch)![npm downloads](https://img.shields.io/npm/dw/react-leaflet-geosearch)[![Node.js CI](https://github.com/TA-Geoforce/react-leaflet-geosearch/actions/workflows/node.js.yml/badge.svg?branch=master)](https://github.com/TA-Geoforce/react-leaflet-geosearch/actions/workflows/node.js.yml)[![Release](https://github.com/TA-Geoforce/react-leaflet-geosearch/actions/workflows/npm-publish.yml/badge.svg?branch=master)](https://github.com/TA-Geoforce/react-leaflet-geosearch/actions/workflows/npm-publish.yml)

Most recently tested with Leaflet React-Leaflet 2.5.0.

React Leaflet geosearching/geocoding control build on top of [React-Leaflet](https://github.com/PaulLeCam/react-leaflet). 

The SearchControl is using the plugin from [leaflet-geosearch](https://github.com/smeijer/leaflet-geosearch) 

## Complete example with react-leaflet-geosearch

To get started, to be able to run the example you have execute:
```bash
npm install
```

```jsx
import React from "react";
import { Map, TileLayer } from "react-leaflet";
import { SearchControl, OpenStreetMapProvider } from "../dist/index";

//here you can add some styles
import './example/react-leaflet-geosearch.css';

export default class GeoSearchExample extends React.Component {
  constructor() {
    super();
  }

  render() {
    const prov = OpenStreetMapProvider();
    const GeoSearchControlElement = SearchControl;

    return (
      <Map
        center={[42.09618442380296, -71.5045166015625]}
        zoom={2}
        zoomControl={true}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        <GeoSearchControlElement
          provider={prov}
          showMarker={true}
          showPopup={false}
          maxMarkers={3}
          retainZoomLevel={false}
          animateZoom={true}
          autoClose={false}
          searchLabel={"Enter address, please"}
          keepResult={true}
          popupFormat={({ query, result }) => result.label}
        />
      </Map>
    );
  }
}
```

You can find the following example in the folder ```example```. Run the above code by executing the following scripts in package.json, with the order they are stated underneath:

1) ```build```

1) ```example```
