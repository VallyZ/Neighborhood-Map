import React from "react"
import MapComponent from "./Map"

class App extends React.PureComponent {

  render() {
    return (
      <div style={{height:"100%"}}>
        <MapComponent
        />
      </div>
    )
  }
}

export default App
