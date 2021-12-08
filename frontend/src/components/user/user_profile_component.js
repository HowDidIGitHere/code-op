import React from 'react';
import "./user_profile.css"

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
  }
    
  componentDidMount() {
    this.props.requestUser(this.props.user.id);
  }
    
  render() {
    if (!this.props.user) return "loading...";

    return (
      <div className="user-profile">
        <div className="header-bg">
          <div>
            <h2>All of {}'s Info</h2>
          </div>
        </div>
        <div className="profile-column">

          <div className="column-left">
            <h1>Email:</h1>
            <h2>{}</h2>
            <h1>Bio:</h1>
            <h2>{}</h2>
            <h1>Github:</h1>
            <h2>{}</h2>
            <h1>Tags:</h1>
            <h2></h2>
          </div>

          <div className="column-right">
            <h1>Projects:</h1>
          </div>
        </div>

      </div>
    );
  }
}

export default UserProfile;