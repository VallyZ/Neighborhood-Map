import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
 /*global google*/

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCyiGQuuUzQooIf4B8Fx6Pi9V-QnJT-xrk",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100vh` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={13}
    defaultCenter={{ lat: 44.426767, lng: 26.102538 }}
  >
  {props.defaultMarkers && myLocations.map(loc => (
    <Marker position={loc.location} onClick={props.onMarkerClick} defaultTitle={loc.title} defaultAnimation={google.maps.Animation.DROP}/>
  ))}
  </GoogleMap>
)

const myLocations=[
  {title:"National Arena",location: {lat:44.437139, lng:26.152579}},
  {title:"Carol Park",location: {lat:44.418666, lng:26.096516}},
  {title:"Tineretului Park",location: {lat:44.407871, lng:26.105064}},
  {title:"Herăstrău Park",location: {lat:44.470201, lng:26.082753}},
  {title:"National Museum of Art of Romania",location: {lat:44.439367, lng:26.095874}},
  {title:"Bucharest Botanical Garden",location: {lat:44.437229, lng:26.062677}}
]

class App extends React.PureComponent {
  state = {
    isMarkerShown: false,
    defaultMarkers: true,
  }

  componentDidMount() {
    this.delayedShowMarker()
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 3000)
  }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }

  render() {
    return (
      <MyMapComponent
        isMarkerShown={this.state.isMarkerShown}
        defaultMarkers={this.state.defaultMarkers}
        onMarkerClick={this.handleMarkerClick}
      />
    )
  }
}

export default App
