import React from 'react';
import { withRouter } from 'react-router-dom';
import "./login.css"

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      passwordConfirm: '',
      bio: '',
      github: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push('/login');
    }

    this.setState({errors: nextProps.errors})
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      handle: this.state.handle,
      password: this.state.password,
      passwordConfirm: this.state.password2
    };

    this.props.signup(user, this.props.history); 
  }

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
        <h2>Sign Up</h2>
        <form className="login-form" onSubmit={this.handleSubmit}>
          <div className="signup-form">
            <br/>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="Email"
              />
            <br/>
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                placeholder="Username"
              />
            <br/>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
              />
            <br/>
              <input type="password"
                value={this.state.confirmPassword}
                onChange={this.update('confirmPassword')}
                placeholder="Confirm Password"
              />
            <br/>
            <button className="login-form-button" type="submit" value="Submit">Sign Up</button>
            {this.renderErrors()}

            <div className="line"></div>

            <div className="login-form-footer">
              <h4>Already have an account?</h4>
              <h5 onClick={() => this.props.openLoginModal()}>Sign up</h5>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);