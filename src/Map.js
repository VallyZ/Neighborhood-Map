import React, { Component } from "react"
import Burger from "./BurgerWindow"
import Wiki from "./Wiki"

 /*global google*/
 let map;
 let markers = [];

 const myLocations=[
   {title:"National Arena",location: {lat:44.437139, lng:26.152579},info:""},
   {title:"Carol Park",location: {lat:44.418666, lng:26.096516},info:""},
   {title:"Tineretului Park",location: {lat:44.407871, lng:26.105064},info:""},
   {title:"Herăstrău Park",location: {lat:44.470201, lng:26.082753},info:""},
   {title:"National Museum of Art of Romania",location: {lat:44.439367, lng:26.095874},info:""},
   {title:"Bucharest Botanical Garden",location: {lat:44.437229, lng:26.062677},info:""}
 ]

 //Default myLocations
class MapComponent extends Component {

  componentDidMount(){

    fetch('https://en.wikipedia.org/w/api.php?action=query&format=json&action=query&prop=extracts&formatversion=2&exintro=&explaintext=&exsentences=1&titles=Arena%20Na%C8%9Bional%C4%83&origin=*')
    .then(results => results.json())
    .then(data => {var a = data.query.pages[0].extract;myLocations[0].info=a;console.log(myLocations[0].info)})

    fetch('https://en.wikipedia.org/w/api.php?action=query&format=json&action=query&prop=extracts&formatversion=2&exintro=&explaintext=&exsentences=1&titles=Tineretului%20Park&origin=*')
    .then(results => results.json())
    .then(data => {var b = data.query.pages[0].extract;myLocations[1].info=b;console.log(myLocations[1].info)})

    fetch('https://en.wikipedia.org/w/api.php?action=query&format=json&action=query&prop=extracts&formatversion=2&exintro=&explaintext=&exsentences=1&titles=National%20Museum%20of%20Art%20of%20Romania&origin=*')
    .then(results => results.json())
    .then(data => {var c = data.query.pages[0].extract;myLocations[2].info=c;console.log(myLocations[2].info)})

    fetch('https://en.wikipedia.org/w/api.php?action=query&format=json&action=query&prop=extracts&formatversion=2&exintro=&explaintext=&exsentences=1&titles=Bucharest%20Botanical%20Garden&origin=*')
    .then(results => results.json())
    .then(data => {var d = data.query.pages[0].extract;myLocations[3].info=d;console.log(myLocations[3].info)})

    fetch('https://en.wikipedia.org/w/api.php?action=query&format=json&action=query&prop=extracts&formatversion=2&exintro=&explaintext=&exsentences=1&titles=Carol%20Park&origin=*')
    .then(results => results.json())
    .then(data => {var e = data.query.pages[0].extract;myLocations[4].info=e;console.log(myLocations[4].info)})

    fetch('https://en.wikipedia.org/w/api.php?action=query&format=json&action=query&prop=extracts&formatversion=2&exintro=&explaintext=&exsentences=1&titles=Herăstrău%20Park&origin=*')
    .then(results => results.json())
    .then(data => {var f = data.query.pages[0].extract;myLocations[5].info=f;console.log(myLocations[5].info)})
  }

  showBurger = () => {
    let burgerWindow = document.getElementById('burger');
    let burger = document.getElementById('show-search');

    if ( burgerWindow.style.display === "block" ) {
      burgerWindow.style.display = "none";
      burger.style.backgroundColor="transparent";
    } else {
      burgerWindow.setAttribute("style", "display:block; background:#38575b; float:left; left:0px");
      burger.style.backgroundColor="red";
    }
  }

  onclick = (event) => {
    console.log(event.target.value)
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
        infowindow.setContent('<div>' + myLocations[0].info + '</div>');
        infowindow.open(map, marker);
        infowindow.addListener('closeclick',function(){
          infowindow.setMarker = null;
        });
      }
    }

    return(
      <div>
        <div>
          <a tabIndex="1" id="show-search" onClick={this.showBurger} type="button" value="Burger">
            <svg className="hamburger-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M2 6h20v3H2zm0 5h20v3H2zm0 5h20v3H2z"/>
            </svg>
          </a>
        </div>
        <div>
          {initMap()}
        </div>
          <Burger
            myLocations={myLocations}
            markers={markers}
            populateInfoWindow={this.populateInfoWindow}
          />
      </div>

    )
  }
}

export default MapComponent
