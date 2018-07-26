import React, { Component } from 'react'

class Burger extends Component {
  state = {
    query:''
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

  listClick= (event) =>{
    this.props.markers.map(m=>{
      if (m.title===event.target.valueOf().innerText){
        m.setVisible(true);
        document.getElementById('input').value=m.title;
      } else {
        m.setVisible(false)
      }
    })

  }

  render(){
    return(
      <div id="burger">
        <div id="div1">
          <div id="div2">
            Search
          </div>
          <div id="search-input">
            <input id="input" role="search" type="text" value={this.state.query} onChange={(event)=> this.updateQuery(event.target.value)} placeholder="Location filter..."/>
          </div>
          <ul>
          {this.state.query === "" && this.props.markers.map((m,i)=>
            (<li onClick={this.listClick} key={i}>{m.title}</li>))}
          {this.state.query.length >0 && this.props.markers.filter(m=>m.getVisible()).map((m,i)=>
            (<li onClick={this.listClick} key={i}>{m.title}</li>))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Burger
