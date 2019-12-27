import { OpenCageProvider as LeafletOpenCageProvider } from 'leaflet-geosearch'

const OpenCageProvider = key =>
  new LeafletOpenCageProvider({
    params: {
      key,
    },
  })
export default OpenCageProvider
