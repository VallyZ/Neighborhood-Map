import React, { Component } from "react"

 /*global google*/

 let map;
 let markers = [];

 //Default myLocations
 const myLocations=[
   {title:"National Arena",location: {lat:44.437139, lng:26.152579}},
   {title:"Carol Park",location: {lat:44.418666, lng:26.096516}},
   {title:"Tineretului Park",location: {lat:44.407871, lng:26.105064}},
   {title:"Herăstrău Park",location: {lat:44.470201, lng:26.082753}},
   {title:"National Museum of Art of Romania",location: {lat:44.439367, lng:26.095874}},
   {title:"Bucharest Botanical Garden",location: {lat:44.437229, lng:26.062677}}
 ]
class MapComponent extends Component {
  render(){

    function initMap() {
      // Constructor creates a new map - only center and zoom are required.
      map = new google.maps.Map(document.getElementById('root'), {
        center: { lat: 44.426767, lng: 26.102538 },
        zoom: 13,
        mapTypeControl: false
      });

      let largeInfowindow = new google.maps.InfoWindow();
      let bounds = new google.maps.LatLngBounds();

      for (let i = 0; i < myLocations.length; i++) {
        // Get the position from the location array.
        let position = myLocations[i].location;
        let title = myLocations[i].title;
        // Create a marker per location, and put into markers array.
        let marker = new google.maps.Marker({
          map: map,
          position: position,
          title: title,
          animation: google.maps.Animation.DROP,
          id: i
        });
        // Push the marker to our array of markers.
        markers.push(marker);
        // Create an onclick event to open an infowindow at each marker.
        marker.addListener('click', function() {
          populateInfoWindow(this, largeInfowindow);
        });
        bounds.extend(markers[i].position);
      }
      map.fitBounds(bounds);
    }
      // Extend the boundaries of the map for each marker
      function populateInfoWindow(marker, infowindow) {
        // Check to make sure the infowindow is not already opened on this marker.
        if (infowindow.marker != marker) {
          infowindow.marker = marker;
          infowindow.setContent('<div>' + marker.title + '</div>');
          infowindow.open(map, marker);
          // Make sure the marker property is cleared if the infowindow is closed.
          infowindow.addListener('closeclick',function(){
            infowindow.setMarker = null;
          });
        }
      }
    return(
      <div>
        {initMap()}
      </div>
      // Create a new blank array for all the listing markers.


        // These are the real estate listings that will be shown to the user.
        // Normally we'd have these in a database instead.
    )
  }
}

export default MapComponent






// const MapComponent = compose(
//   withProps({
//     googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCyiGQuuUzQooIf4B8Fx6Pi9V-QnJT-xrk",
//     loadingElement: <div style={{ height: `100%` }} />,
//     containerElement: <div style={{ height: `100vh` }} />,
//     mapElement: <div style={{ height: `100%` }} />,
//   }),
//   withScriptjs,
//   withGoogleMap
// )((props) =>
//   <GoogleMap
//     defaultZoom={13}
//     defaultCenter={{ lat: 44.426767, lng: 26.102538 }}
//   >
//   {props.defaultMarkers && myLocations.map((loc,index) => (
//     //If defaultMarkers===true, map over default Markers
//     <Marker key={index} onClick={()=>props.showInfo(index)} position={loc.location} defaultTitle={loc.title} defaultAnimation={google.maps.Animation.DROP}>
//       {(props.isOpen==index) && <InfoWindow>
//           <div>Hello</div>
//         </InfoWindow>}
//       </Marker>
//   ))}
//   </GoogleMap>
// )
//
// //Default myLocations
// const myLocations=[
//   {title:"National Arena",location: {lat:44.437139, lng:26.152579}},
//   {title:"Carol Park",location: {lat:44.418666, lng:26.096516}},
//   {title:"Tineretului Park",location: {lat:44.407871, lng:26.105064}},
//   {title:"Herăstrău Park",location: {lat:44.470201, lng:26.082753}},
//   {title:"National Museum of Art of Romania",location: {lat:44.439367, lng:26.095874}},
//   {title:"Bucharest Botanical Garden",location: {lat:44.437229, lng:26.062677}}
// ]
//
//
// export default MapComponent
