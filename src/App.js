import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import MapComponent from "./Map"


class App extends React.PureComponent {
  state = {
    defaultMarkers: true,
    isOpen:false
  }

  isOpenTrue = () =>{
    this.setState({isOpen:true})
  }


  render() {
    return (
      <MapComponent
        isMarkerShown={this.state.isMarkerShown}
        defaultMarkers={this.state.defaultMarkers}
        onMarkerClick={this.handleMarkerClick}
        isOpenTrue={this.isOpenTrue}
        isOpenFalse={this.state.isOpen}
      />
    )
  }
}

export default App
