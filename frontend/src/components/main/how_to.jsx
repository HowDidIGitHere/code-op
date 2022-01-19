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

  render(){

    return(
      <div className="how-to-container">
        <div className="how-to-banner">
          <div className="header">
            <div>Project Collaboration Reimagined</div>
            <div>We're on a mission to unite people with the right skills for the right job. Become part of a team.</div>
          </div>
          <div className="learn-more" onClick={() => this.toggleLearnMore()}>Learn More</div>
        </div>
        <div 
          className="how-to-dropdown"
          style={this.state.show ? {display: "block"} : {display: "none"}}
        >
          <div>How Code-Op Works</div>
          <div>Code-op builds strong development and production teams by attracting experts from different fields and uniting them to complete projects faster.</div>
          <div className="cards-container">
            <div className="cards">
              <div className="card-header">Endless types projects:</div>
              <div>With Code-Op, you can filter through a variety of different projects based on your language skills to join the project that fits you.</div>
            </div>
            <div className="cards">
              <div className="card-header">Send a request:</div>
              <div>See a fun or interesting project you like? Make your own request to join it and build something big!</div>
            </div>
            <div className="cards">
              <div className="card-header">Build your own team:</div>
              <div>Work on what you want by creating your own project and accepting users that meet your needs.</div>
            </div>
          </div>
        </div>
        <div>up arrow</div>
      </div>
    )
  }
}

export default howTo