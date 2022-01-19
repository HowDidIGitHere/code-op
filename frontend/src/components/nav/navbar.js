import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      collaborated: [],
      created: []
    }
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.projectClick = this.projectClick.bind(this);
    
  }

  componentDidMount(){
    this.props.fetchCreatorProjects()
      .then( res => this.setState({created: Object.values(res.payload.projects)}))
    this.props.receiveCollaboratedProjects({collaborators: this.props.user.id})
      .then(projects => this.setState({collaborated: Object.values(projects.payload.projects)}))
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
            <button className="dropdown-btn"><i className="fas fa-bars fa-2x"></i></button>
            <div className='dropdown-content-2'>
                <div className='drop-item' onClick={() => this.props.openNotificationsModal()}>
                  <i className="fas fa-bell"></i>
                  <p>Notifications</p>
                </div>
                <Link className='drop-item' to={'/projects'}>
                  <i className="fas fa-search"></i>
                  <div>Discover Page</div>
                </Link>
                <Link className='drop-item' to={'/projects/new'}>
                  <i className="fas fa-hammer"></i>
                  <div>Create a Project</div>
                </Link>
                <div className='drop-item current-project' onClick={() => this.toggle()}>
                  <i className="fas fa-tasks"></i>
                  <p tabIndex='1'>Current Projects</p>
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
                  {this.state.collaborated.map((project, idx) =>
                    <button 
                      key={idx}
                      id={project._id} 
                      className='hidden-project' 
                      onClick={this.projectClick}
                    >{project.title}</button>
                  )}
                </div>
                  {this.props.user.id ? 
                    <Link to={`/users/${this.props.user.id}`} className='drop-item'>
                      <i className="fas fa-user"></i>
                      <div id="profile" >Profile</div>
                    </Link> : ""}
                <div className='drop-item logout' onClick={(e) => this.logoutUser(e)}>
                  <i className="fas fa-sign-out-alt"></i>
                  <p>Logout</p>
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
        <div className='navbar-co container-fluid px-5'>
          <div className='row'>
            <div className='left-nav col-auto me-auto' onClick={this.handleClick}>
              <img 
                className='logo' 
                src="https://res.cloudinary.com/dzixdb9eu/image/upload/v1638985865/Infinity_t10mft.png" 
                alt="infinity" />
              <h1>CODE-OP</h1>
            </div>
            <div className='right-nav col-auto'>
              <button className='about-us' onClick={() => this.props.openAboutModal('about')}>About Us</button>
              { this.getLinks() }
            </div>
          </div>
        </div>
      );
  }
}

export default NavBar;