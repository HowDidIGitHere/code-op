import React from 'react';
import CategoryChecklist from '../index/category_checklist';
import './project_create.css'

class ProjectsNew extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      desctiption: "",
      github: "",
    }
    this.handleSubmit=this.handleSubmit.bind(this)
  }

  update(type) {
    return e => this.setState({ [type]: e.currentTarget.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    let project = {
      title: this.state.title,
      description: this.state.description,
      creator: this.props.user.id,
    }

    this.props.createProject(project)
      .then(this.props.history.push('/projects'))
      .then(window.location.reload());
  }

  render() {
    return(
      <div className='create-project'>
        <form className='create-project-form' onSubmit={this.handleSubmit}>
          <div className='main-form'>
          <div className='form-header'>
            <p>Create a New Project</p>
          </div>
          <div className='form-body'>
            <div className='user-input'>
            <label className='input-field'>Project Title</label>
            <input className='project-title'
              type="text"
              value={this.state.title}
              onChange={this.update('title')}
            />
            <br />
            <label className='input-field'>Github Link</label>
            <input className='project-git'
              type="text"
              value={this.state.github}
              onChange={this.update('github')}
            />
            <br />
            <div className='user-checks'>
              <CategoryChecklist />
              <CategoryChecklist />
              <CategoryChecklist />
            </div>
            <label className='input-field'>Add a description of your project</label>
            <textarea 
              className='project-description'
              value={this.state.description}
              onChange={this.update('description')}
            />
            </div>
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