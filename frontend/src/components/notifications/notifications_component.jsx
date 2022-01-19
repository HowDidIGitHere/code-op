import React from 'react';
import {Link} from 'react-router-dom'
import "./notifications.css"
class Notifications extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      requests: [],
      rerendner: false,
    }

    this.handleAccept = this.handleAccept.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
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

  handleDelete(requestId, idx) {
    return (e) => {
      e.preventDefault();
        this.state.requests.splice(idx, 1)
        this.setState({requests: this.state.requests});
        this.props.deleteRequest(requestId);
    }
  }

  render(){
    return(
      <div className="notifications">
        {this.state.requests.length === 0 ? 
        <div className="no-request">All up to date!</div> :
        this.state.requests.map((request, idx) =>
          <div className="single-request" key={idx}>
            <div className="note-info">
              <Link className="request-link" to={`/users/${request.senderId}`} onClick={() => this.props.closeModal()}> 
                <h5>{request.senderName}</h5>
              </Link>
              <h5>is requesting to join</h5>
              <Link className="request-link2" to={`/projects/${request.projectId}`} onClick={() => this.props.closeModal()}> 
                <h5>{request.projectName}</h5>
              </Link>
            </div>
            <div className="note-message">
              <div>{request.message}</div>
            </div>
            <div className="note-line"></div>
            <div className="note-buttons">
              <button className="accept" 
                onClick={() => this.handleAccept(request.projectId, request.senderId, request._id, idx)}
              >Accept
              </button>
              <button className="decline" onClick={this.handleDelete(request._id, idx)}>Decline</button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default Notifications