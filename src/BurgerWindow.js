import React, { Component } from 'react'

class Burger extends Component {
  state = {
    query:''
  }

//Search box functionality
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
  listClick= (event) =>{
    this.props.markers.map((m,i)=>{
      if (m.title===event.target.valueOf().innerText){
        m.setVisible(true);
        document.getElementById('input').value=this.state.query;
      } else {
        m.setVisible(false);
      }
    })

  }
  render(){
    //If input.value.length is 0,markers won't make themselves visible.
    //If value.length=0 and space is pressed, all become visible.
    //Here is the only palce you cannot delete the first space
    //Don't know other way to make this functionality, sorry!
    if(this.state.query.length < 1){
      this.setState({query:" "})
    }
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
          <ul role="tablist">
          {this.state.query.length >0 && this.props.markers.filter(m=>m.getVisible()).map((m,i)=>
            (<li role="tab" tabIndex="0" id="li" onClick={this.listClick} key={i}>{m.title}</li>))}
          </ul>
          <button aria-label="Show all markers" id="b" onClick={this.b}>Show all </button>
        </div>
      </div>
    )
  }
}

export default Burger
