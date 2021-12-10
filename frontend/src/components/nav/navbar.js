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
                <p className='drop-item' onClick={() => this.props.openNotificationsModal()}>Notifications</p>
                <Link className='drop-item' to={'/projects'}>Discover Page</Link>
                <Link className='drop-item' to={'/projects/new'}>Create a Project</Link>
                <p className='drop-item current-project' tabIndex='1' onClick={() => this.toggle()}>Current Projects</p>
                <div 
                  className='hidden-projects' 
                  style={this.state.show ? {display: "block"} : {display: "none"}}
                >
                  {this.props.projects.map((project, idx) => {
                    if (project.creator === this.props.user.id)
                      return (
                        <div key={idx}>
                          <button 
                            className='hidden-project' 
                            onClick={() => this.projectClick()}
                          >{project.title}</button>
                        </div>
                      )
                  })}
                </div>
                  {this.props.user.id ? <Link className='drop-item' id="profile" to={`/users/${this.props.user.id}`}>Profile</Link> : ""}
                <p className='drop-item logout' onClick={(e) => this.logoutUser(e)}>Logout</p>
            </div>
          </div>
        );
      } else {
        return (
            <div>
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
            <div className='right-nav-links'>
              <button className='about-us' onClick={() => this.props.openAboutModal('about')}>About Us</button>
            </div>
            <div className='right-nav-button'>
              { this.getLinks() }
            </div>
          </div>
        </div>
      );
  }
}

export default NavBar;