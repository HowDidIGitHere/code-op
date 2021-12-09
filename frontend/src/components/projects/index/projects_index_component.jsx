import React from 'react';
import './project_index.css'
import CategoryDropdown from './category_dropdown'
import IndexProjectListing from './index_project_listing';

class ProjectsIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  componentWillMount() {
    this.props.fetchProjects();
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
            <div className='index-item'>
              {this.props.projects.map((project) => {
                return <IndexProjectListing key={project.id} project={project}/>
              })}
            </div>                 
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectsIndex