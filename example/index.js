import React from 'react';
import { render } from 'react-dom';
import GeoSearchExample from "./geosearch";






const example = (
    <div>
        <h1>React-Leaflet-GeoSearch example</h1>
        <GeoSearchExample />
    </div>
)

render(example, document.getElementById('app'));