import React from 'react';
import './requests.css'

class ProjectRequest extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleSubmit() {

  }

  render() {
    const { user, project } = this.props;
    return (
      <form className='project-request' >
        <div className='form-greeting'>
          <p>Hi {user.username}!</p>
          <p>Would you like to send a request to join {project.title}?</p>
        </div>
        <div className='roles'>
          <p>Please choose which role you would like to fill: </p>
        </div>
        <button type='submit'>Send Request</button>
      </form>
    )
  }
}

export default ProjectRequest;