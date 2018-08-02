import React from "react"
import MapComponent from "./Map"
import ErrorBoundary from './ErrorBoundary'

class App extends React.PureComponent {

  render() {
    return (
      <div role="application" style={{height:"100%"}}>
        <ErrorBoundary><MapComponent /></ErrorBoundary>
      </div>
    )
  }
}

export default App
