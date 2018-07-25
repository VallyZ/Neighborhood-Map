import React, { Component } from "react"
import Burger from "./BurgerWindow"

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
  state = {
    showBurger:false
  }

  showBurger = () => {
    let burgerWindow = document.getElementById('burger');
    let burger = document.getElementById('show-search');

    if ( burgerWindow.style.display === "block" ) {
      burgerWindow.style.display = "none";
      burger.style.left = "0px";
    } else {
      burgerWindow.setAttribute("style", "display:block; background:#38575b; float:left; left:0px");
      burger.setAttribute("style", "left:240px")
    }
  }

  render(){
    function initMap() {
      map = new google.maps.Map(document.getElementById('root'), {
        center: { lat: 44.426767, lng: 26.102538 },
        zoom: 13,
        mapTypeControl: false
      });

      let largeInfowindow = new google.maps.InfoWindow();
      let bounds = new google.maps.LatLngBounds();

      for (let i = 0; i < myLocations.length; i++) {
        let position = myLocations[i].location;
        let title = myLocations[i].title;
        let marker = new google.maps.Marker({
          map: map,
          position: position,
          title: title,
          animation: google.maps.Animation.DROP,
          id: i
        });
        markers.push(marker);
        marker.addListener('click', function() {
          populateInfoWindow(this, largeInfowindow);
        });
        bounds.extend(markers[i].position);
      }
      map.fitBounds(bounds);
    }

      function populateInfoWindow(marker, infowindow) {
        if (infowindow.marker !== marker) {
          infowindow.marker = marker;
          infowindow.setContent('<div>' + marker.title + '</div>');
          infowindow.open(map, marker);
          infowindow.addListener('closeclick',function(){
            infowindow.setMarker = null;
          });
        }
      }
    return(
      <div>
        <div>
          <a id="show-search" onClick={this.showBurger} type="button" value="Burger">
            <svg className="hamburger-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M2 6h20v3H2zm0 5h20v3H2zm0 5h20v3H2z"/>
            </svg>
          </a>
        </div>
        <div>
          {initMap()}
        </div>
          <Burger
          />
      </div>

    )
  }
}

export default MapComponent
