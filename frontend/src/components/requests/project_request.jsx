import React from 'react';
import './requests.css'

class ProjectRequest extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleSubmit(e) {
    e.preventDefault();
    const { user, project } = this.props;
    let position = document.querySelector('input[name="radio-options"]:checked').value;

    let request = {};
    request['recipient'] = project.creator;
    request['senderId'] = user.id;
    request['senderName'] = user.username;
    request['message'] = `${user.username} would like to join ${project.title} as a ${position} team member`;
    request['projectId'] = project._id;
    request['projectName'] = project.title;

    this.props.createRequest(request)
      .then(this.props.closeModal())
  }

  render() {
    const { user, project, tags } = this.props;
    return (
      <form className='project-request' onSubmit={this.handleSubmit}>
        <div className='form-greeting'>
          <p className='greeting'>Hi {user.username}!</p>
          <p className='question'>Would you like to send a request to join {project.title}?</p>
        </div>
        <div className='roles'>
          <p>Please choose which role you would like to fill: </p>
          <div className='position-request'>
            {tags.position.map((position) => {
              return (
                <div className='radio-item'>
                  <input 
                    name='radio-options' 
                    type="radio" 
                    value={position} />
                  <label className="position-label">{position}</label>
                </div>
                )
            })}
          </div>
        </div>
        <button className='submit' type='submit'>Send Request</button>
      </form>
    )
  }
}

export default ProjectRequest;