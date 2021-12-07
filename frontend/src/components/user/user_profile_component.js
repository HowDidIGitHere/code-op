import React from 'react';
import "./user_profile.css"

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.currentUser.username,
      email: this.props.currentUser.email,
      bio: this.props.currentUser.bio,
      github: this.props.currentUser.github,
      positions: this.props.currentUser.positions
    }
  }
    
  componentDidMount() {
    this.props.requestUser(this.props.currentUser.id);
  }
    
  render() {
    if (!this.props.currentUser) return "loading...";

    return (
      <div className="user-profile">
        <div className="header-bg">
          <div>
            <h2>All of {this.props.currentUser.username}'s Info</h2>
          </div>
        </div>
        <div className="profile-column">
          <div className="column-left">
            <h1>Email:</h1>
            <h2>{this.state.email}</h2>
            <h1>Bio:</h1>
            <h2>{this.state.bio}</h2>
            <h1>Github:</h1>
            <h2>{this.state.github}</h2>
            <h1>Positions:</h1>
            <h2>{this.state.positions}</h2>
          </div>

          <div className="column-right">

          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;