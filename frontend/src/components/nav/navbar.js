import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.projectClick = this.projectClick.bind(this);
    
  }

  projectClick(e) {
    e.preventDefault()
    this.props.history.push(`/projects/${e.target.id}`)
    window.location.reload();

  }

  handleClick(e) {
    e.preventDefault();
    this.props.history.push(`/`);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
    this.props.history.push("/");
  }

  toggle(){
    this.setState({show: !this.state.show});
  }

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
      if (this.props.loggedIn) {
        return (
          <div className='dropdown'>
            <button className="dropdown-btn"><i class="fas fa-bars fa-2x"></i></button>
            <div className='dropdown-content-2'>
                <div className='drop-item'>
                  <i className="fas fa-bell"></i>
                  <p  onClick={() => this.props.openNotificationsModal()}>Notifications</p>
                </div>
                <div className='drop-item'>
                  <i className="fas fa-search"></i>
                  <Link to={'/projects'}>Discover Page</Link>
                </div>
                <div className='drop-item'>
                  <i class="fas fa-hammer"></i>
                  <Link  to={'/projects/new'}>Create a Project</Link>
                </div>
                <div className='drop-item current-project'>
                  <i class="fas fa-tasks"></i>
                  <p  tabIndex='1' onClick={() => this.toggle()}>Current Projects</p>
                </div>
                <div 
                  className='hidden-projects' 
                  style={this.state.show ? {display: "flex"} : {display: "none"}}
                >
                  {this.props.projects.map((project, idx) => {
                    if (project.creator === this.props.user.id)
                      return (
                        <button 
                          key={idx}
                          id={project._id} 
                          className='hidden-project' 
                          onClick={this.projectClick}
                        >{project.title}</button>
                      )
                  })}
                </div>
                  {this.props.user.id ? 
                    <div className='drop-item'>
                      <i class="fas fa-user"></i>
                      <Link id="profile" to={`/users/${this.props.user.id}`}>Profile</Link>
                    </div> : ""}
                <div className='drop-item logout'>
                  <i class="fas fa-sign-out-alt"></i>
                  <p onClick={(e) => this.logoutUser(e)}>Logout</p>
                </div>
            </div>
          </div>
        );
      } else {
        return (
            <div className='auth-buttons'>
              <button className='signup' onClick={() => this.props.openSignupModal()}>Sign Up</button>
              <button className='login' onClick={() => this.props.openLoginModal()}>Login</button>
            </div>
        );
      }
  }

  render() {
      return (
        <div className='navbar'>
          <div className='left-nav'>
            <img 
              className='logo' 
              onClick={this.handleClick}
              src="https://res.cloudinary.com/dzixdb9eu/image/upload/v1638985865/Infinity_t10mft.png" 
              alt="infinity" />
            <h1 onClick={this.handleClick}>CODE-OP</h1>
          </div>
          <div className='right-nav'>
            <button className='about-us' onClick={() => this.props.openAboutModal('about')}>About Us</button>
            { this.getLinks() }
          </div>
        </div>
      );
  }
}

export default NavBar;