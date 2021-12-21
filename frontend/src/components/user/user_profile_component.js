import React from 'react';
import {Link} from 'react-router-dom'
import "./user_profile.css"

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      created: [],
      collaborated: []
    }
  }
    
  componentWillMount() {
    this.props.fetchUser();
    this.props.fetchCreatorProjects()
      .then( res => this.setState({created: Object.values(res.payload.projects)}))
    this.props.receiveCollaboratedProjects()
    .then ( res => this.setState({collaborated: Object.values(res.payload.projects)}))
  }

  handleDelete(projectId, idx){
    this.props.deleteProject(projectId);
    this.state.created.splice(idx, 1)    
    this.setState({created: this.state.created})
  }

  render() {
    if (!this.props.user) return "loading...";
    return (
      <div className="user-profile">
        <div className="header-bg">
          <div className="banner">
            <h2>welcome, {this.props.user.username}</h2>
          </div>
        </div>
        
        <div className="profile-column">
          <div className="column-left">
            <h1>Email</h1>
            <h2>{this.props.user.email}</h2>
            <h1>Bio</h1>
            <h2>{this.props.user.bio}</h2>
            <h1>Github</h1>
            <h2>{this.props.user.github}</h2>
            <h1>Tags</h1>
            
            <div onClick={() => this.props.openUpdateModal()} className="edit-btn">Edit</div>
          </div>

          <div className="column-right1">
            <div className="column-right">
              <h1>Created Projects:</h1>
                {this.state.created.length === 0 ? 
                  <Link to="/projects/new" className="project-list-item" id="new">Start a new Project</Link> 
                  : this.state.created.map((project, idx) => 
                    <div key={idx} className="project-list">
                      <Link to={`/projects/${project._id}`} className="project-list-item">
                        <div className="project-list-title">{project.title}</div>
                      </Link>
                      <i className="fas fa-trash-alt" onClick={() => this.handleDelete(project._id, idx)}></i>                    
                    </div>
                    )
                }
            </div>

            <div className="column-right">
              <h1>Collaborated Projects:</h1>
                {this.state.collaborated.length === 0 ? 
                  <Link to="/projects" className="project-list-item" id="new">Join a Project</Link> 
                : this.state.collaborated.map((proj, idx) => 
                    <div className="project-list" key={idx}>
                          <Link className="project-list-item" to={`/projects/${proj._id}`}>
                            <div className="project-list-title">{proj.title}</div>
                          </Link>
                        {/* <div className="project-list-description">{proj.description}</div> */}
                    </div>
                    )
                }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;