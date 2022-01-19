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
  }

  isLearnMoreOpen(){
    if(this.state.show){
      return ""
    } else {
      return this.toggleLearnMore()
    } 
  }

  isNotSignedIn(){
    if(!this.props.isAuthenticated){
      return(
        <div className="learn-card">
          <div className="card-title card-two">Send a request:</div>
          <div className="bottom-card-2">
            <div className="card-text">See a fun or interesting project you like? Make your own request to join in and build something big!</div>
            <div className="redirect" id="sign-up" onClick={() => this.props.openSignUpModal()}>Sign Up</div>
          </div>
        </div>
      )
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
          style={this.state.show ? {maxHeight: "100vh"} : {maxHeight: "0px"}}
        >
          <div id="title">How Code-Op Works</div>
          <div id="desc">Code-op builds strong development and production teams by attracting experts from different fields and uniting them to complete projects faster.</div>
          <div className="cards-container">
            <div className="learn-card">
              <div className="card-title card-one">Endless Projects:</div>
              <div className="bottom-card-1">
                <div className="card-text">With Code-Op, you can filter through different projects based on your skills. Join the project that fits you.</div>
                <div className="redirect" id="begin-search" onClick={() => this.props.history.push("projects")}>Begin Search</div>
              </div>
            </div>
            {this.isNotSignedIn()}
            <div className="learn-card">
              <div className="card-title card-three">Manage Your Projects:</div>
              <div className="bottom-card-3">
                <div className="card-text">View all your projects all in one place and manage them as you grow. Start your contribution.</div>
                <div className="redirect" id="manage-now" onClick={() => this.props.isAuthenticated ? this.props.history.push(`users/${this.props.currentUser.id}`) : this.props.openSignUpModal()}>Manage Now</div>
              </div>
            </div>
            <div className="learn-card">
              <div className="card-title card-four">Build Your Own Team:</div>
              <div className="bottom-card-4">
                <div className="card-text">Work on what you want by creating your own project and accepting users that meet your needs.</div>
                <div className="redirect" id="start" onClick={() => this.props.isAuthenticated ? this.props.history.push("projects/new") :this.props.openSignUpModal()}>Start Your Project</div>
              </div>
            </div>
          </div>
        </div>
        <i 
          className="fas fa-chevron-up close"
          style={this.state.show ? {display: "block"} : {display: "none"}}
          onClick={() => this.toggleLearnMore()}
        ></i>
      </div>
    )
  }
}

export default howTo