import { LocationIQProvider as LeafletLocationIQProvider } from 'leaflet-geosearch'

const LocationIQProvider = key =>
  new LeafletLocationIQProvider({
    params: {
      key,
    },
  })
export default LocationIQProvider
