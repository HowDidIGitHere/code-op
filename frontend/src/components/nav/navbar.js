import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.history.push(`/`);
  }

  logoutUser(e) {
      e.preventDefault();
      this.props.logout();
  }

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
      if (this.props.loggedIn) {
        return (
            <div>
                <Link to={'/projects'}>All Projects</Link>
                <Link to={'/new_project'}>Create a Tweet</Link>
                <Link to={`/users/${this.props.userId}`}>Profile</Link>
                <button onClick={this.logoutUser}>Logout</button>
            </div>
        );
      } else {
        return (
            <div>
              <button className='signup' onClick={() => this.props.openSignupModal('signup')}>Sign Up</button>
              <button className='login' onClick={() => this.props.openLoginModal('login')}>Login</button>
              <button className='about-us' onClick={() => this.props.openAboutModal('about')}>About Us</button>
            </div>
        );
      }
  }

  render() {
    console.log(this.props.userId)
      return (
        <div className='navbar'>
          <div className='left-nav'>
            <img 
              className='logo' 
              onClick={this.handleClick}
              src="https://res.cloudinary.com/dzixdb9eu/image/upload/v1638811421/letter-c-o-logo-vector-260nw-532313890_hdhaz3.jpg" 
              alt="fake-logo" />
            <h1>CODE-OP</h1>
          </div>
          <div className='right-nav'>
            <div className='right-nav-links'>

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