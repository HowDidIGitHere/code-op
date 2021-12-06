import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
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
                <Link to={'/profile'}>Profile</Link>
                <button onClick={this.logoutUser}>Logout</button>
            </div>
        );
      } else {
        return (
            <div>
                <Link className='signup' to={'/signup'}>Signup</Link>
                <Link className='login' to={'/login'}>Login</Link>
            </div>
        );
      }
  }

  render() {
      return (
        <div className='navbar'>
          <div className='left-nav'>
            <img className='logo' src="https://res.cloudinary.com/dzixdb9eu/image/upload/v1638811421/letter-c-o-logo-vector-260nw-532313890_hdhaz3.jpg" alt="fake-logo" />
            <h1>CODE-OP</h1>
          </div>
          <div className='right-nav'>
            <div className='right-nav-links'>
              <div>
                <a href="x">About Us</a>
              </div>
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