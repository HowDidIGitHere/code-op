import React from 'react';

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
        <h2>All of {this.props.currentUser.username} Info</h2>
        {this.state.username}
        {this.state.email}
        {this.state.bio}
        {this.state.github}
        {this.state.positions}
      </div>
    );
  }
}

export default UserProfile;