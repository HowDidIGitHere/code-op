import React from 'react';
import {Link} from 'react-router-dom'

class Notifications extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      requests: []
    }

    this.handleAccept = this.handleAccept.bind(this)
  }

  componentDidMount(){
    this.props.fetchRequests(this.props.currentUser)
      .then(res => {
        this.setState({requests: Object.values(res.requests)});
      }
      )
  }

  handleAccept(projectId, senderId, requestId, index){
    this.props.fetchProject(projectId)
      .then(result => {
        this.props.updateProject({ ...result.project, [result.project.collaborators]: result.project.collaborators.push(senderId)})
      })
      .then(() => {
        this.state.requests.splice(index, 1)
        this.setState({requests: this.state.requests});
        this.props.deleteRequest(requestId);
      })
  }

  render(){
    console.log("render state:", this.state)
    return(
      <div className="notifications">
        {this.state.requests.map((request, idx) =>
          <div className="single-request" key={idx}>
            <div className="note-info">
              <Link to={`/users/${request.senderId}`} onClick={() => this.props.closeModal()}> 
                <h1>{request.senderName}</h1>
              </Link>
              <h5>is requesting to join</h5>
              <Link to={`/projects/${request.projectId}`} onClick={() => this.props.closeModal()}> 
                <h1>{request.projectName}</h1>
              </Link>
            <div className="line"></div>
              <div className="note-message">
                <h1>Message:</h1>
                <div>{request.message}</div>
              </div>
            <div className="line"></div>
              <div className="note-buttons">
                <button className="accept" 
                  onClick={() => this.handleAccept(request.projectId, request.senderId, request._id, idx)}
                >Accept
                </button>
                <button className="decline" onClick={() => this.props.deleteRequest(request._id)}>Decline</button>
              </div>
            </div>

          </div>
        )}
      </div>
    )
  }
}

export default Notifications