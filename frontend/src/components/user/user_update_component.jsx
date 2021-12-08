import React from "react";

class UserUpdateComponent extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: this.props.user.username,
      email: this.props.user.email,
      bio: this.props.user.bio,
      github: this.props.user.github
    }
  }

  componentDidMount(){
    this.props.requestUser()
  }

  update(field){
    return e => this.setState({[field]: e.currentTarget.value})
  }

  handleSubmit(e){
    console.log("handling submit")
    e.preventDefault();

    this.props.updateUser()
    this.props.history.push(`/users/${this.props.user.id}`)
  }

  render(){
    if(!this.props.user) return "loading";
    console.log("rendering update")

    return(
      <form className="user-update" onSubmit={this.handleSubmit}>
        <h3>Username:</h3>
          <input className="update-username" onChange={this.update('username')}>{this.state.username}</input>
        <h3>Email:</h3>
          <input className="update-email" onChange={this.update('email')}>{this.state.email}</input>
        <h3>Bio:</h3>
          <input className="update-bio" onChange={this.update('bio')}>{this.state.bio}</input>
        <h3>Github:</h3>
          <input className="update-github" onChange={this.update('github')}>{this.state.github}</input>

        <button type="submit">Update</button>
      </form>
    )
  }
}

export default UserUpdateComponent