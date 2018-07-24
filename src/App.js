import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

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
  {myLocations.map(loc => (
    <Marker position={loc.location} onClick={props.onMarkerClick} defaultTitle={loc.title}/>
      ))}
  </GoogleMap>
)

const myLocations=[
  {title:"National Arena",location: {lat:44.437139, lng:26.152579}},
  {title:"Alexandru Ioan Cuza Park",location: {lat:44.425512, lng:26.153533}},
  {title:"Tineretului Park",location: {lat:44.407871, lng:26.105064}},
  {title:"Izvor Park",location: {lat:44.431855, lng:26.087451}},
  {title:"National Art Museum of Romania",location: {lat:44.439367, lng:26.095874}}
]

class App extends React.PureComponent {
  state = {
    isMarkerShown: false,
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
        onMarkerClick={this.handleMarkerClick}
      />
    )
  }
}

export default App
