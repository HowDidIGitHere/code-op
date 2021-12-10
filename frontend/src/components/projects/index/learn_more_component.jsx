import React from 'react'

class LearnMoreComponent extends React.Component{
  constructor(props){
    super(props)
    this.handleRequest = this.handleRequest.bind(this)
  }

  // componentDidMount(){
  //   console.log(this.props.project)
  //   this.props.oneProject(this.props.project.id)
  // }

  handleRequest(e) {
    e.preventDefault();

    this.props.requestModal();
    this.props.oneProject(e.target.id)
  }

  render(){
    console.log("project:", this.props.project)
    return(
      <div className='index-listing-component' id="one">
        <div className='testing123' id="two">
        <div className='index-listing-content'>
          <h1>{this.props.project.title}</h1>
          <p>{this.props.project.description}</p>
        </div>
        <div className='index-listing-footer'>
          <button className='learn-more' onClick={() => this.props.closeModal()}>close</button>
          <button 
            id={this.props.project.id}
            className='apply-now' 
            onClick={this.handleRequest}
          >Apply Now
          </button>
        </div>
        </div>
      </div>
    )
  }
}

export default LearnMoreComponent