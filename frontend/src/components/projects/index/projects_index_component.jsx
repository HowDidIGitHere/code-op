import React from 'react';
import './project_index.css'
import CategoryDropdown from './category_dropdown'
import IndexProjectListing from './index_project_listing';

class ProjectsIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    }
    this.handleRequest = this.handleRequest.bind(this)
  }

  componentWillMount() {
    this.props.fetchProjects();
  }

  handleRequest(e) {
    e.preventDefault();

    this.props.requestModal();
    this.props.fetchProject(e.target.id)
  }

  render() {
    const categories = ['Industry', 'Skill Type', 'Platform', 'Language']
    return(
      <div className="projects-index">
        <div className='category-filters'>
          {categories.map((category) => {
            return <CategoryDropdown category={category}/>
          })}
        </div>
        <div className="underline"></div>
        <div className='right-index'>
          <div className='right-index-listings'>
              {this.props.projects.map((project) => {
                return <IndexProjectListing 
                  key={project.id} 
                  project={project}
                  id={project._id}
                  handleRequest={this.handleRequest}
                />
              })}             
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectsIndex