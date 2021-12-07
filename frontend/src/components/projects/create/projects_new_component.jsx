import React from 'react';
import './project_create.css'

class ProjectsNew extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  componentWillMount() {
    // this.props.fetchTweets();
  }

  render() {
    return(
      // <p>hiii</p>
      <div className='create-project'>
        <form className='create-project-form' onSubmit={this.handleSubmit}>
          <p>Create a New Project</p>
          <div className='form-header'>
            <button className='save-button' type='submit'>Save</button>
          </div>
          <div className='form-body'>
            <input className='project-title'
              type="text"
              placeholder="Add your title"
              // value={this.state.title}
              // onChange={this.update('title')}
            />
            <br />
            <textarea 
              rows='5'
              cols='50'
              className='project-description'
              placeholder="Tell everyone what your project is about"
              // value={this.state.description}
              // onChange={this.update('description')}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default ProjectsNew