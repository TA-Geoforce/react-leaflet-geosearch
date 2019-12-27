import { useEffect } from 'react'
import { useLeaflet } from 'react-leaflet'
import { GeoSearchControl } from 'leaflet-geosearch'

const SearchControl = (props) => {
  const { map } = useLeaflet()

  useEffect(() => {
    const searchControl = new GeoSearchControl({
      provider: props.provider,
      ...props,
    })

    map.addControl(searchControl)
    return () => map.removeControl(searchControl)
  }, [props])

  return null
}
export default SearchControl
