import { EsriProvider as LeafletEsriProvider } from 'leaflet-geosearch'

const EsriProvider = key =>
  new LeafletEsriProvider({
    params: {
      key,
    },
  })
export default EsriProvider
