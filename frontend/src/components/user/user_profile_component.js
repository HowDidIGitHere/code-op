import React from 'react';
import { Link } from "react-router-dom";

import "./user_profile.css"

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.projects = this.props.projects
  }
    
  componentWillMount() {
    this.props.requestUser();
    this.props.fetchCreatorProjects()
  }
    
  render() {
    if (!this.props.user) return "loading...";

    return (
      <div className="user-profile">
        <div className="header-bg">
          <div>
            <h2>welcome, {this.props.user.username}</h2>
          </div>
        </div>
        <div className="profile-column">

          <div className="column-left">
            <h1>Email:</h1>
            <h2>{this.props.user.email}</h2>
            <h1>Bio:</h1>
            <h2>{this.props.user.bio}</h2>
            <h1>Github:</h1>
            <h2>{this.props.user.github}</h2>
            <h1>Tags:</h1>
            
          </div>

          <div className="column-right">
            <h1>Projects:</h1>
              {this.projects.map((project, idx) => 
                <div className="project-list-item" key={idx}>
                  <Link className="project-list-title" to={`projects/${project._id}`}>{project.title}</Link>
                  <div className="project-list-github">{project.github}</div>
                  <div className="project-list-collaborator">{project.collaborators}</div>
                </div>
                )}
          </div>
        </div>

      </div>
    );
  }
}

export default UserProfile;