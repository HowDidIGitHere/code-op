import React from 'react';

import "./user_profile.css"

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
    
  componentWillMount() {
    this.props.fetchUser();
    this.props.fetchCreatorProjects();
    // this.props.receiveCollaboratedProjects()
      // .then(res => {this.setState(res); console.log(res)})
  }
    
  render() {
    if (!this.props.user) return "loading...";
    console.log(this.state)
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
            
            <div onClick={() => this.props.openUpdateModal()}>Edit</div>
          </div>

          <div className="column-right1">
            <div className="column-right">
              <h1>Created Projects:</h1>
                {this.props.projects.map((project, idx) => 
                  <div className="project-list-item" key={idx}>
                    <div className="project-list-title" to={`/projects/${project._id}`}>{project.title}</div>
                    <div className="project-list-github">{project.github}</div>
                  </div>
                  )}
            </div>

            <div className="column-right">
              <h1>Collaborated Projects:</h1>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;