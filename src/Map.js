import React from "react"
import { compose, withProps, withStateHandlers } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"
 /*global google*/

const MapComponent = compose(
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
  {props.defaultMarkers && myLocations.map((loc,index) => (
    //If defaultMarkers===true, map over default Markers
    <Marker key={index} onClick={props.isOpenTrue} position={loc.location} defaultTitle={loc.title} defaultAnimation={google.maps.Animation.DROP}>
      {props.isOpenFalse && <InfoWindow>
          <div>Hello</div>
        </InfoWindow>}
      </Marker>
  ))}
  </GoogleMap>
)

//Default locations
const myLocations=[
  {title:"National Arena",location: {lat:44.437139, lng:26.152579}},
  {title:"Carol Park",location: {lat:44.418666, lng:26.096516}},
  {title:"Tineretului Park",location: {lat:44.407871, lng:26.105064}},
  {title:"Herăstrău Park",location: {lat:44.470201, lng:26.082753}},
  {title:"National Museum of Art of Romania",location: {lat:44.439367, lng:26.095874}},
  {title:"Bucharest Botanical Garden",location: {lat:44.437229, lng:26.062677}}
]


export default MapComponent
