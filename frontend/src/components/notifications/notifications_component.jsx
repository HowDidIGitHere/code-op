import React from 'react';
import {Link} from 'react-router-dom'

class Notifications extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      requests: []
    }
  }

  componentDidMount(){
    this.props.fetchRequests(this.props.currentUser)
      .then(res => {
        this.setState({requests: Object.values(res.requests)});
      }
      )
  }

  handleAccept(projectId, senderId, requestId){
    this.props.fetchProject(projectId)
      .then(result => this.props.updateProject({collaborators: result.collaborators.push(senderId)}))
      .then(() => this.props.deleteRequest(requestId))
  }

  render(){
    // console.log("render state", this.state)
    return(
      <div className="notifications">
        {this.state.requests.map((request, idx) =>
          <div className="single-request" key={idx}>
            <div className="note-info">
              <Link to={`/users/${request.senderId}`}> 
                <h1>{request.senderName}</h1>
              </Link>
              <h5>is requesting to join</h5>
              <Link to={`/projects/${request.projectId}`}> 
                <h1>{request.projectName}</h1>
              </Link>
              <div className="line"></div>
              <div className="note-message">
                <h1>Message:</h1>
                <div>{request.message}</div>
              </div>
              <div className="note-buttons">
                <button className="accept" 
                  onClick={() => handleAccept(request.projectId, request.senderId, request._id)}
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