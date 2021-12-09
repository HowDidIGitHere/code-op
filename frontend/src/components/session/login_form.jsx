
import React from 'react';
import { withRouter } from 'react-router-dom';
import "./login.css"

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.demoUser = {email: 'demo@demo.com', password: 'password'}
    this.state = {
      email: '',
      password: '',
      errors: {}
    };
    this.loginDemoUser = this.loginDemoUser.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  loginDemoUser(e) {
    e.preventDefault()
    this.props.login(this.demoUser)
    this.props.closeModal()
  }

  // Once the user has been authenticated, redirect to the Tweets page
  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
    }

    // Set or clear errors
    this.setState({errors: nextProps.errors})
  }

  // Handle field updates (called in the render method)
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  // Handle form submission
  handleSubmit(e) {
    console.log("handling submit")
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.login(user).then(this.props.closeModal);
  }
  
  // Render the session errors if there are any
  renderErrors() {
    return(
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-modal">
        <p className="login-form-close-button" onClick={()=> this.props.closeModal()}>X</p> 
        <h2>Login</h2>
        <form className="login-form" onSubmit={this.handleSubmit}>
          <div>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="Email"
              />
            <br/>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
              />
            <br/>
            <button className="login-form-button" type="submit" >Login</button>
            {this.renderErrors()}
            <p className='or'>&nbsp;OR&nbsp;</p>
            <button className="demo-button" onClick={(e) => this.loginDemoUser(e)}>Demo Login</button>

            <div className="line"></div>

            <div className="login-form-footer">
              <h4>Don't have an account?</h4>
              <h2 onClick={() => this.props.openSignupModal()}>Sign up</h2>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);