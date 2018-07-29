import React, { Component } from "react"
import Burger from "./BurgerWindow"
import Wiki from "./Wiki"

 /*global google*/
 let map;
 let markers = [];

 const myLocations=[
   {title:"National Arena",location: {lat:44.437139, lng:26.152579},info:"",wiki:"https://en.wikipedia.org/wiki/Arena_Na%C8%9Bional%C4%83",img:''},
   {title:"Tineretului Park",location: {lat:44.407871, lng:26.105064},info:"",wiki:"https://en.wikipedia.org/wiki/Tineretului_Park",img:''},
   {title:"Carol Park",location: {lat:44.418666, lng:26.096516},info:"",wiki:"https://en.wikipedia.org/wiki/Her%C4%83str%C4%83u_Park",img:''},
   {title:"Herăstrău Park",location: {lat:44.470201, lng:26.082753},info:"",wiki:"https://en.wikipedia.org/wiki/Carol_Park",img:''},
   {title:"National Museum of Art of Romania",location: {lat:44.439367, lng:26.095874},info:"",wiki:"https://en.wikipedia.org/wiki/Bucharest_Botanical_Garden",img:''},
   {title:"Bucharest Botanical Garden",location: {lat:44.437229, lng:26.062677},info:"",wiki:"https://en.wikipedia.org/wiki/National_Museum_of_Art_of_Romania",img:''}
 ]

 //Default myLocations
class MapComponent extends Component {

  componentDidMount(){
//Initialize the map
    this.initMap()
//Fetch preview info : National Arena
    fetch('https://en.wikipedia.org/w/api.php?action=query&format=json&action=query&prop=extracts&formatversion=2&exintro=&explaintext=&exsentences=1&titles=Arena%20Na%C8%9Bional%C4%83&origin=*')
    .then(results => results.json())
    .then(data => {var a = data.query.pages[0].extract;myLocations[0].info=a;console.log(myLocations[0].info)})
    .catch(function(error) {
      var a = 'There has been a problem with your fetch operation: '+ error.message
      myLocations[0].info=a;
}); //Fetch image about location : National Arena
    fetch('https://en.wikipedia.org/w/api.php?action=query&titles=Arena_Na%C8%9Bional%C4%83&prop=pageimages&format=json&pithumbsize=200&formatversion=2&origin=*')
    .then(results => results.json())
    .then(data => {var h = data.query.pages[0].thumbnail.source;myLocations[0].img=h;console.log(myLocations[0].img)})

//Fetch preview info : Tineretului Park
    fetch('https://en.wikipedia.org/w/api.php?action=query&format=json&action=query&prop=extracts&formatversion=2&exintro=&explaintext=&exsentences=1&titles=Tineretului%20Park&origin=*')
    .then(results => results.json())
    .then(data => {var b = data.query.pages[0].extract;myLocations[1].info=b;console.log(myLocations[1].info)})
    .catch(function(error) {
      var b = 'There has been a problem with your fetch operation: '+ error.message;
      myLocations[1].info=b;
}); //Fetch image about location : Tineretului Park
    fetch('https://en.wikipedia.org/w/api.php?action=query&titles=Tineretului%20Park&prop=pageimages&format=json&pithumbsize=200&formatversion=2&origin=*')
    .then(results => results.json())
    .then(data => {var i = data.query.pages[0].thumbnail.source;myLocations[1].img=i;console.log(myLocations[1].img)})

//Fetch preview info : Carol Park
    fetch('https://en.wikipedia.org/w/api.php?action=query&format=json&action=query&prop=extracts&formatversion=2&exintro=&explaintext=&exsentences=1&titles=National%20Museum%20of%20Art%20of%20Romania&origin=*')
    .then(results => results.json())
    .then(data => {var c = data.query.pages[0].extract;myLocations[2].info=c;console.log(myLocations[2].info)})
    .catch(function(error) {
      var c = 'There has been a problem with your fetch operation: '+ error.message;
      myLocations[2].info=c;
}); //Fetch image about location : Carol Park
    fetch('https://en.wikipedia.org/w/api.php?action=query&titles=National%20Museum%20of%20Art%20of%20Romania&prop=pageimages&format=json&pithumbsize=200&formatversion=2&origin=*')
    .then(results => results.json())
    .then(data => {var j = data.query.pages[0].thumbnail.source;myLocations[2].img=j;console.log(myLocations[2].img)})

//Fetch preview info : Herăstrău Park
    fetch('https://en.wikipedia.org/w/api.php?action=query&format=json&action=query&prop=extracts&formatversion=2&exintro=&explaintext=&exsentences=1&titles=Bucharest%20Botanical%20Garden&origin=*')
    .then(results => results.json())
    .then(data => {var d = data.query.pages[0].extract;myLocations[3].info=d;console.log(myLocations[3].info)})
    .catch(function(error) {
      var d = 'There has been a problem with your fetch operation: '+ error.message;
      myLocations[3].info=d;
}); //Fetch image about location : Herăstrău Park
    fetch('https://en.wikipedia.org/w/api.php?action=query&titles=Bucharest%20Botanical%20Garden&prop=pageimages&format=json&pithumbsize=200&formatversion=2&origin=*')
    .then(results => results.json())
    .then(data => {var l = data.query.pages[0].thumbnail.source;myLocations[3].img=l;console.log(myLocations[3].img)})

//Fetch preview info : National Museum of Art of Romania
    fetch('https://en.wikipedia.org/w/api.php?action=query&format=json&action=query&prop=extracts&formatversion=2&exintro=&explaintext=&exsentences=1&titles=Carol%20Park&origin=*')
    .then(results => results.json())
    .then(data => {var e = data.query.pages[0].extract;myLocations[4].info=e;console.log(myLocations[4].info)})
    .catch(function(error) {
      var e = 'There has been a problem with your fetch operation: '+ error.message;
      myLocations[4].info=e;
}); //Fetch image about location : National Museum of Art of Romania
    fetch('https://en.wikipedia.org/w/api.php?action=query&titles=Carol%20Park&prop=pageimages&format=json&pithumbsize=200&formatversion=2&origin=*')
    .then(results => results.json())
    .then(data => {var m = data.query.pages[0].thumbnail.source;myLocations[4].img=m;console.log(myLocations[4].img)})

//Fetch preview info : Bucharest Botanical Garden
    fetch('https://en.wikipedia.org/w/api.php?action=query&format=json&action=query&prop=extracts&formatversion=2&exintro=&explaintext=&exsentences=1&titles=Herăstrău%20Park&origin=*')
    .then(results => results.json())
    .then(data => {var f = data.query.pages[0].extract;myLocations[5].info=f;console.log(myLocations[5].info)})
    .catch(function(error) {
      var f = 'There has been a problem with your fetch operation: '+ error.message;
      myLocations[5].info=f;
}); //Fetch image about location : Bucharest Botanical Garden
    fetch('https://en.wikipedia.org/w/api.php?action=query&titles=Herăstrău%20Park&prop=pageimages&format=json&pithumbsize=200&formatversion=2&origin=*')
    .then(results => results.json())
    .then(data => {var n = data.query.pages[0].thumbnail.source;myLocations[5].img=n;console.log(myLocations[5].img)})

  }

  initMap = () => {
    const self = this
    map = new google.maps.Map(document.getElementById('map-container'), {
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
      google.maps.event.addListener(marker, 'click', (function (marker) {
        return function () {
              largeInfowindow.setContent(
                '<div id="infoWindow">'+
                  '<img width="100%" src="'+myLocations[i].img+'" alt="'+myLocations[i].title+'">'+
                  '<div style="margin-bottom:10px;">'+myLocations[i].info+'</div>'+
                '<a href="'+ myLocations[i].wiki+'">Read more on Wikipedia</a></div>'

              );
              largeInfowindow.open(map, marker);
        }
      })(marker));

      // marker.addListener('click', function(e) {
      //   self.populateInfoWindow(this, largeInfowindow);
      // });
      // marker.addListener('click', function(e){
      //   console.log(this.title)
      // });
      bounds.extend(markers[i].position);
    }
    map.fitBounds(bounds);
  }

  // populateInfoWindow = (marker, infowindow) => {
  //   if (infowindow.marker !== marker) {
  //     infowindow.marker = marker;
  //     infowindow.setContent('<div>' + marker.title + '</div>');
  //     infowindow.open(map, marker);
  //     infowindow.addListener('closeclick',function(){
  //       infowindow.setMarker = null;
  //     });
  //   }
  // }

  showBurger = () => {
    let burgerWindow = document.getElementById('burger');
    let burger = document.getElementById('show-search');
    let svg = document.getElementById('hamburger-icon');

    if ( burgerWindow.style.display === "block" ) {
      burgerWindow.style.display = "none";
      svg.style.backgroundColor="transparent";
    } else {
      burgerWindow.setAttribute("style", "display:block; background:#38575b; float:left; left:0px");
      svg.style.backgroundColor="red";
    }
  }

  render(){
    return(
      <div style={{height: "100%"}}>
        <div>
          <a id="show-search" onClick={this.showBurger} type="button" value="Burger" style={{zIndex: 10000}}>
            <svg tabIndex="1" id="hamburger-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M2 6h20v3H2zm0 5h20v3H2zm0 5h20v3H2z"/>
            </svg>
          </a>
        </div>
        <div id="map-container" style={{height: "100%"}}/>
        <Burger
          myLocations={myLocations}
          markers={markers}
        />
      </div>

    )
  }
}

export default MapComponent
