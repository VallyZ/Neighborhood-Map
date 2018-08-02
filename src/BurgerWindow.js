import React, { Component } from 'react'
/*global google*/

class Burger extends Component {
  state = {
    query:'',
    infoWindow:new google.maps.InfoWindow(),
    img: "",
    title:"",
    wiki: "",
    info: ""
  }

  componentDidMount(){
    if(this.state.query.length < 1){
      //first enables the list of the locations
      this.setState({query:" "})
      this.setState({query:""})
    }
    document.querySelector('#tabList').addEventListener('click', this.displayInfowindow)
}

//Search box functionality

  displayInfowindow = (event) =>{
    this.props.markers.map(m=>{
      if(m.title===event.target.valueOf().innerText){
        const mark=this.props.markers.findIndex(ms=>ms.title===m.title)
        this.setState({title : this.props.myLocations[mark].title })
        this.setState({info : this.props.myLocations[mark].info })
        this.setState({img : this.props.myLocations[mark].img })
        this.setState({wiki : this.props.myLocations[mark].wiki })
      }
    })
      const {infoWindow} = this.state
      this.displayInfowindow
      const markers = this.props.markers
      const index = markers.findIndex(m=> m.title===event.target.valueOf().innerText)
      this.populateInfoWindow(markers[index],infoWindow)
  }

  updateQuery=(query)=>{
    this.setState({query:query})
    if (query) {
      this.props.myLocations.forEach((loc,i)=>{
        if(loc.title.toLowerCase().includes(query.toLowerCase())) {
          this.props.markers[i].setVisible(true)
        } else {
          this.props.markers[i].setVisible(false)
        }
      })
    } else {
      this.props.myLocations.forEach((loc,i)=> {
        if(query && this.props.myLocations.length && this.props.markers[i]){
          this.props.markers.setvisible(true)
        }
      })
    }
  }

//Show all markers on the map
  b=()=>{
    for(var l=0;l<this.props.markers.length;l++){
      if(!this.props.markers[l].setVisible(true)){
        this.props.markers[l].setVisible(true)
      }
    }
  }
//Make visible only the marker that it's title was clicked in the list
populateInfoWindow = (marker, infowindow) => {
    infowindow.marker = marker
    infowindow.setContent(
      '<div tabIndex=0 id="infoWindow">'+
        '<img width="100%" src="'+this.state.img+'" alt="'+this.state.title+'">'+
        '<div style="margin-bottom:10px;">'+this.state.info+'</div>'+
        '<a href="'+ this.state.wiki+'">Read more on Wikipedia</a>'+
      '</div>'
    )
    infowindow.open(this.map, marker)
    infowindow.addListener('closeclick', function () {
      infowindow.marker = null
    })
}


  listClick= (event) =>{
    this.props.markers.map((m,i)=>{
      if (m.title===event.target.valueOf().innerText){
        m.setVisible(true);
        m.setAnimation(google.maps.Animation.BOUNCE);
        setTimeout(function(){m.setAnimation(null); },1000)
        document.getElementById('input').value=this.state.query;
      } else {
        m.setVisible(false);
      }
    })
  }

  render(){
    return(
      <div id="burger">
        <div id="div1">
          <div id="div2">
            <div>
              Search:
            </div>
            <div>
            <h4>Terms like:</h4><h5><br/>"arena",<br/>"park",<br/>"museum",<br/>"garden"</h5>
            </div>
          </div>
          <div id="search-input"tabIndex="-1">
            <input id="input" role="search" type="text" value={this.state.query} onChange={(event)=> this.updateQuery(event.target.value)} placeholder="Location filter..."/>
          </div>
          <ul id='tabList' role="tablist">
          {this.state.query.length === 0 && this.props.markers.map(m=>m.setVisible(true))}
          {this.state.query.length === 0 && this.props.markers.map((m,i)=>
            (<li role="link" tabIndex="0" id={"li"+i} onClick={this.listClick} key={i}>{m.title}</li>))}
          {this.state.query.length >0 && this.props.markers.filter(m=>m.getVisible()).map((m,i)=>
            (<li role="link" tabIndex="0" id={"li"+i} onClick={this.listClick} key={i}>{m.title}</li>))}
          </ul>
          <button aria-label="Show all markers" id="b" onClick={this.b}>Show all </button>
        </div>
      </div>
    )
  }
}

export default Burger
