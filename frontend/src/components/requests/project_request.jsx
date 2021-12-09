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
          <p>Hi {user.username},</p>
          <p>Would you like to join {project.title}?</p>
        </div>
        <div>
          
        </div>
      </form>
    )
  }
}

export default ProjectRequest;