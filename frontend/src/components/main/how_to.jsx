import React from "react";
import './how_to.css'

class howTo extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      show: false
    }
  }

  toggleLearnMore(){
    this.setState({show: !this.state.show})
    console.log("show:", this.state.show)
  }

  isLearnMoreOpen(){
    if(this.state.show){
      return ""
    } else {
      return this.toggleLearnMore()
    } 
  }

  render(){

    return(
      <div className="how-to-container">
        <div className="how-to-banner">
          <div className="header">
            <div>Project Collaboration Reimagined</div>
            <div>We're on a mission to unite people with the right skills for the right job. Become part of a team.</div>
          </div>
          <div 
            className="learn-button"
            style={this.state.show ? {backgroundColor: "transparent", color: "transparent", cursor: "default"} : {display: "block"}}
            onClick={() => this.isLearnMoreOpen()}
          >
            <div className="learn" onClick={() => this.toggleLearnMore()}>Learn More</div>
            <i class="fas fa-chevron-down"></i>
          </div>
        </div>
        <div 
          className="how-to-dropdown"
          style={this.state.show ? {display: "block"} : {display: "none"}}
        >
          <div id="title">How Code-Op Works</div>
          <div id="desc">Code-op builds strong development and production teams by attracting experts from different fields and uniting them to complete projects faster.</div>
          <div className="cards-container">
            <div className="learn-card">
              <div className="card-title">Endless types projects:</div>
              <div>With Code-Op, you can filter through a variety of different projects based on your language skills to join the project that fits you.</div>
            </div>
            <div className="learn-card">
              <div className="card-title">Send a request:</div>
              <div>See a fun or interesting project you like? Make your own request to join it and build something big!</div>
            </div>
            <div className="learn-card">
              <div className="card-title">Build your own team:</div>
              <div>Work on what you want by creating your own project and accepting users that meet your needs.</div>
            </div>
          </div>
        </div>
        <i 
          className="fas fa-chevron-up"
          style={this.state.show ? {display: "block"} : {display: "none"}}
        ></i>
      </div>
    )
  }
}

export default howTo