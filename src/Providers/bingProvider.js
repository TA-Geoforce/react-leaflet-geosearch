import { BingProvider as LeafletBingProvider } from 'leaflet-geosearch'

const BingProvider = key =>
  new LeafletBingProvider({
    params: {
      key,
    },
  })
export default BingProvider
