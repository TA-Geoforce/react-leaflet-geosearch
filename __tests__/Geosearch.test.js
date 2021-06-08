import React from 'react';
import { MapContainer, TileLayer } from "react-leaflet";
import { SearchControl } from "../dist/index";
import { mount } from "enzyme"
import Enzyme from "enzyme"
import Adapter from "@wojtekmaj/enzyme-adapter-react-17"

Enzyme.configure({ adapter: new Adapter() })

const GeoSearchControlElement = SearchControl;

const props = {
    provider: {},
    showMarker: true,
    showPopup: false,
    maxMarkers: 3,
    retainZoomLevel: false,
    animateZoom: true,
    autoClose: false,
    searchLabel: "Enter address, please",
    keepResult: true,
    popupFormat: {}
}
describe("Check if GeoSearchControlElement renders", () => {
    it("Simple render of component", () => {
        const wrapper = mount(
            <MapContainer
                center={[42.09618442380296, -71.5045166015625]}
                zoom={2}
                zoomControl={true}
            >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
                />
                <GeoSearchControlElement {...props} />
            </MapContainer>
        )
        expect((wrapper).find(GeoSearchControlElement).prop('provider')).toEqual({});
        expect((wrapper).find(GeoSearchControlElement).prop('showMarker')).toEqual(true);
        expect((wrapper).find(GeoSearchControlElement).prop('showPopup')).toEqual(false);
        expect((wrapper).find(GeoSearchControlElement).prop('maxMarkers')).toEqual(3);
        expect((wrapper).find(GeoSearchControlElement).prop('retainZoomLevel')).toEqual(false);
        expect((wrapper).find(GeoSearchControlElement).prop('animateZoom')).toEqual(true);
        expect((wrapper).find(GeoSearchControlElement).prop('autoClose')).toEqual(false);
        expect((wrapper).find(GeoSearchControlElement).prop('searchLabel')).toEqual("Enter address, please");
        expect((wrapper).find(GeoSearchControlElement).prop('keepResult')).toEqual(true);
        expect((wrapper).find(GeoSearchControlElement).prop('popupFormat')).toEqual({});
    })
})