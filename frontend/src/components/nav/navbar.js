import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.demoUser = {email: 'demo@demo.com', password: 'password'}
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  loginDemoUser(e) {
    e.preventDefault()
    this.props.login(this.demoUser)
    this.props.closeModal()
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

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
      if (this.props.loggedIn) {
        return (
            <div>
                <Link to={'/projects'}>All Projects</Link>
                <Link to={'/new_project'}>Create a Project</Link>
                {this.props.user.id ? <Link to={`/users/${this.props.user.id}`}>Profile</Link> : ""}
                <button onClick={(e) => this.logoutUser(e)}>Logout</button>
            </div>
        );
      } else {
        return (
            <div>
              <button className="demo-button" onClick={(e) => this.loginDemoUser(e)}>Demo Login</button>
              <button className='signup' onClick={() => this.props.openSignupModal('signup')}>Sign Up</button>
              <button className='login' onClick={() => this.props.openLoginModal('login')}>Login</button>
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
            <h1>CODE-OP</h1>
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