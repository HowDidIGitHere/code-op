import React from "react";

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

  render(){

    return(
      <div className="how-to-container">
        <div className="how-to-banner">
          <div>Project Collaboration Reimagined</div>
          <div>We're on a mission to unite people with the right skills for the right job. Join us.</div>
          <div className="learn-more" onClick={this.toggleLearnMore}>Learn More</div>
        </div>
      </div>
    )
  }
}

export default howTo