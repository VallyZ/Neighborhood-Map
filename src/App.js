import React from "react"
import MapComponent from "./Map"


class App extends React.PureComponent {
  state = {
    // defaultMarkers: true,
    // isOpen:false,
    // openInfoWindowMarkerId: '',
    // showInfoIndex: ''
  }
//
//   isOpenTrue = () =>{
//     this.setState({isOpen:true})
//   }
//
//   handleToggleOpen = () => {
//     this.setState({
//         isOpen: true
//     });
// }
//
//   handleToggleClose = () => {
//     this.setState({
//         isOpen: false
//     });
// }
//   handleToggleOpen = (markerId) => {
//     this.setState({
//         openInfoWindowMarkerId: markerId
//     });
// }
//   showInfo=(a)=>{
//     this.setState({showInfoIndex: a })
//   }


  render() {
    return (
      <MapComponent
      />
    )
  }
}

export default App
