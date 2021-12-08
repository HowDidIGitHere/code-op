import React from "react";

class UserUpdateComponent extends React.Component{
  constructor(props){
    super(props);
    this.state = this.props.user

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillMount(){
    this.props.requestUser()
    this.props.fetchCreatorProjects()
  }

  componentDidUpdate(){
    if (!this.state) this.setState(this.props.user)
  }

  update(field){
    return e => this.setState({[field]: e.currentTarget.value})
  }

  handleSubmit(e){
    e.preventDefault();

    this.props.updateUser(this.state)
    this.props.closeModal()

    this.props.history.push(`/users/${this.props.user._id}`)
  }

  render(){
    if(!this.props.user) return "loading";

    return(
      <form className="user-update" onSubmit={this.handleSubmit}>
        <h3>Username:</h3>
          <input className="update-username" onChange={this.update('username')} value={this.state.username}/>
        <h3>Email:</h3>
          <input className="update-email" onChange={this.update('email')} value={this.state.email}/>
        <h3>Bio:</h3>
          <input className="update-bio" onChange={this.update('bio')} value={this.state.bio}/>
        <h3>Github:</h3>
          <input className="update-github" onChange={this.update('github')} value={this.state.github}/>

        <button type="submit">Update</button>
      </form>
    )
  }
}

export default UserUpdateComponent