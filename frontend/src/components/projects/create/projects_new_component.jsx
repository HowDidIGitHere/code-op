import React from 'react';
import CategoryChecklist from '../index/category_checklist';
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
          <div className='form-header'>
            <p>Create a New Project</p>
          </div>
          <div className='form-body'>
            <div className='left-form'>
            <input className='project-title'
              type="text"
              placeholder="Add your title"
              // value={this.state.title}
              // onChange={this.update('title')}
            />
            <br />
            <input className='project-git'
              type="text"
              placeholder="Add your Github repository"
              // value={this.state.title}
              // onChange={this.update('title')}
            />
            <br />
            <textarea 
              className='project-description'
              placeholder="Tell everyone what your project is about"
              // value={this.state.description}
              // onChange={this.update('description')}
            />
            </div>
            <div className='right-form'>
              <CategoryChecklist />
              <CategoryChecklist />
              <CategoryChecklist />
              <CategoryChecklist />
            </div>
          </div>
          <div className='form-footer'>
            <button className='save-button' type='submit'>Save</button>
          </div>
        </form>
      </div>
    )
  }
}

export default ProjectsNew