import React, { Component } from "react"
import Burger from "./BurgerWindow"

 /*global google*/

 let map;
 let markers = [];
 //Default myLocations
 const myLocations=[
   {title:"National Arena",location: {lat:44.437139, lng:26.152579},info:"",wiki:"https://en.wikipedia.org/wiki/Arena_Na%C8%9Bional%C4%83",img:''},
   {title:"Tineretului Park",location: {lat:44.407871, lng:26.105064},info:"",wiki:"https://en.wikipedia.org/wiki/Tineretului_Park",img:''},
   {title:"Carol Park",location: {lat:44.418666, lng:26.096516},info:"",wiki:"https://en.wikipedia.org/wiki/Carol_Park",img:''},
   {title:"Herăstrău Park",location: {lat:44.470201, lng:26.082753},info:"",wiki:"https://en.wikipedia.org/wiki/Her%C4%83str%C4%83u_Park",img:''},
   {title:"National Museum of Art of Romania",location: {lat:44.439367, lng:26.095874},info:"",wiki:"https://en.wikipedia.org/wiki/National_Museum_of_Art_of_Romania",img:''},
   {title:"Bucharest Botanical Garden",location: {lat:44.437229, lng:26.062677},info:"",wiki:"https://en.wikipedia.org/wiki/Bucharest_Botanical_Garden",img:''}
 ]

class MapComponent extends Component {

state = {
  locations:[]
}
gm_authFailure(){
    window.alert("Google Maps error!")
}

  componentDidMount(){
// callback, Initialize the map
    this.initMap()

    window.gm_authFailure = this.gm_authFailure;

  //FETCH DATA FROM WIKIPEDIA API
//Fetch preview info : National Arena

    fetch('https://en.wikipedia.org/w/api.php?action=query&format=json&action=query&prop=extracts&formatversion=2&exintro=&explaintext=&exsentences=1&titles=Arena%20Na%C8%9Bional%C4%83&origin=*')
    .then(results => results.json())
    .then(data => {var a = data.query.pages[0].extract;myLocations[0].info=a})
    .catch(function(error) {
      var a = 'There has been a problem with your fetch operation: '+ error.message
      myLocations[0].info=a;
}); //Fetch image about location : National Arena
    fetch('https://en.wikipedia.org/w/api.php?action=query&titles=Arena_Na%C8%9Bional%C4%83&prop=pageimages&format=json&pithumbsize=200&formatversion=2&origin=*')
    .then(results => results.json())
    .then(data => {var h = data.query.pages[0].thumbnail.source;myLocations[0].img=h})
    .catch(function(error) {
      var z = 'There has been a problem with your fetch operation: '+ error.message;
      myLocations[0].img=z;
});

//Fetch preview info : Tineretului Park
    fetch('https://en.wikipedia.org/w/api.php?action=query&format=json&action=query&prop=extracts&formatversion=2&exintro=&explaintext=&exsentences=1&titles=Tineretului%20Park&origin=*')
    .then(results => results.json())
    .then(data => {var b = data.query.pages[0].extract;myLocations[1].info=b})
    .catch(function(error) {
      var b = 'There has been a problem with your fetch operation: '+ error.message;
      myLocations[1].info=b;
}); //Fetch image about location : Tineretului Park
    fetch('https://en.wikipedia.org/w/api.php?action=query&titles=Tineretului%20Park&prop=pageimages&format=json&pithumbsize=200&formatversion=2&origin=*')
    .then(results => results.json())
    .then(data => {var i = data.query.pages[0].thumbnail.source;myLocations[1].img=i})
    .catch(function(error) {
      var z = 'There has been a problem with your fetch operation: '+ error.message;
      myLocations[1].img=z;
});

//Fetch preview info : Carol Park
fetch('https://en.wikipedia.org/w/api.php?action=query&format=json&action=query&prop=extracts&formatversion=2&exintro=&explaintext=&exsentences=1&titles=Carol%20Park&origin=*')
    .then(results => results.json())
    .then(data => {var c = data.query.pages[0].extract;myLocations[2].info=c})
    .catch(function(error) {
      var c = 'There has been a problem with your fetch operation: '+ error.message;
      myLocations[2].info=c;
}); //Fetch image about location : Carol Park
fetch('https://en.wikipedia.org/w/api.php?action=query&titles=Carol%20Park&prop=pageimages&format=json&pithumbsize=200&formatversion=2&origin=*')
    .then(results => results.json())
    .then(data => {var j = data.query.pages[0].thumbnail.source;myLocations[2].img=j})
    .catch(function(error) {
      var z = 'There has been a problem with your fetch operation: '+ error.message;
      myLocations[2].img=z;
});

//Fetch preview info : Herăstrău Park
fetch('https://en.wikipedia.org/w/api.php?action=query&format=json&action=query&prop=extracts&formatversion=2&exintro=&explaintext=&exsentences=1&titles=Herăstrău%20Park&origin=*')
    .then(results => results.json())
    .then(data => {var d = data.query.pages[0].extract;myLocations[3].info=d})
    .catch(function(error) {
      var d = 'There has been a problem with your fetch operation: '+ error.message;
      myLocations[3].info=d;
}); //Fetch image about location : Herăstrău Park
fetch('https://en.wikipedia.org/w/api.php?action=query&titles=Herăstrău%20Park&prop=pageimages&format=json&pithumbsize=200&formatversion=2&origin=*')
    .then(results => results.json())
    .then(data => {var l = data.query.pages[0].thumbnail.source;myLocations[3].img=l})
    .catch(function(error) {
      var z = 'There has been a problem with your fetch operation: '+ error.message;
      myLocations[3].img=z;
});

//Fetch preview info : National Museum of Art of Romania
fetch('https://en.wikipedia.org/w/api.php?action=query&format=json&action=query&prop=extracts&formatversion=2&exintro=&explaintext=&exsentences=1&titles=National%20Museum%20of%20Art%20of%20Romania&origin=*')
    .then(results => results.json())
    .then(data => {var e = data.query.pages[0].extract;myLocations[4].info=e})
    .catch(function(error) {
      var e = 'There has been a problem with your fetch operation: '+ error.message;
      myLocations[4].info=e;
}); //Fetch image about location : National Museum of Art of Romania
fetch('https://en.wikipedia.org/w/api.php?action=query&titles=National%20Museum%20of%20Art%20of%20Romania&prop=pageimages&format=json&pithumbsize=200&formatversion=2&origin=*')
    .then(results => results.json())
    .then(data => {var m = data.query.pages[0].thumbnail.source;myLocations[4].img=m})
    .catch(function(error) {
      var z = 'There has been a problem with your fetch operation: '+ error.message;
      myLocations[4].img=z;
});

//Fetch preview info : Bucharest Botanical Garden
fetch('https://en.wikipedia.org/w/api.php?action=query&format=json&action=query&prop=extracts&formatversion=2&exintro=&explaintext=&exsentences=1&titles=Bucharest%20Botanical%20Garden&origin=*')
    .then(results => results.json())
    .then(data => {var f = data.query.pages[0].extract;myLocations[5].info=f})
    .catch(function(error) {
      var f = 'There has been a problem with your fetch operation: '+ error.message;
      myLocations[5].info=f;
}); //Fetch image about location : Bucharest Botanical Garden
fetch('https://en.wikipedia.org/w/api.php?action=query&titles=Bucharest%20Botanical%20Garden&prop=pageimages&format=json&pithumbsize=200&formatversion=2&origin=*')
    .then(results => results.json())
    .then(data => {var n = data.query.pages[0].thumbnail.source;myLocations[5].img=n})
    .catch(function(error) {
      var z = 'There has been a problem with your fetch operation: '+ error.message;
      myLocations[5].img=z;
});

  }
//Initialize the map
  initMap = () => {
     /*global google*/
    map = new google.maps.Map(document.getElementById('map-container'), {
      center: { lat: 44.426767, lng: 26.102538 },
      zoom: 13,
      mapTypeControl: false
    });
//Add infoWindow and bounds for the map
    let largeInfowindow = new google.maps.InfoWindow();
    let bounds = new google.maps.LatLngBounds();
//Place markers
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
//Set infoWindow
      marker.addListener('click',function(){
        marker.setAnimation(google.maps.Animation.BOUNCE);
        setTimeout(function(){marker.setAnimation(null); },1000)
      })
      google.maps.event.addListener(marker, 'click', (function (marker) {
        return function () {
              largeInfowindow.setContent(
                '<div id="infoWindow">'+
                  '<img width="100%" src="'+myLocations[i].img+'" alt="'+myLocations[i].title+'">'+
                  '<div style="margin-bottom:10px;">'+myLocations[i].info+'</div>'+
                  '<a href="'+ myLocations[i].wiki+'">Read more on Wikipedia</a>'+
                '</div>'

              );
              largeInfowindow.open(map, marker);
        }
      })(marker));
//Resize view for all markers
      bounds.extend(markers[i].position);
    }
//Fit all markers in the view
    map.fitBounds(bounds);
  }


//Show/Hide the search DIV
  showBurger = () => {
    let burgerWindow = document.getElementById('burger');
    let svg = document.getElementById('hamburger-icon');
    let input = document.querySelector('#input');

    if ( burgerWindow.style.display === "block" ) {
      burgerWindow.style.display = "none";
      svg.style.backgroundColor="transparent";
    } else {
      burgerWindow.setAttribute("style", "display:block; background:#38575b; float:left; left:0px");
      svg.style.backgroundColor="red";
      input.focus();
    }
  }

  render(){
    return(
      <div style={{height: "100%"}}>
        <div>
          <button aria-label="menu" id="show-search" onClick={this.showBurger} type="button" style={{zIndex: 10000}}>
            <svg tabIndex="0" id="hamburger-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M2 6h20v3H2zm0 5h20v3H2zm0 5h20v3H2z"/>
            </svg>
          </button>
        </div>
        <div id="map-container" style={{height: "100%"}}/>
        <Burger
          myLocations={myLocations}
          markers={markers}
          largeInfowindow={this.largeInfowindow}
        />
      </div>

    )
  }
}

export default MapComponent
