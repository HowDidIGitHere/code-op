import React from 'react';
import './project_index.css'
import CategoryChecklist from './category_checklist';
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
    return(
      <div className="projects-index">
        <div className='left-filter-column'>
          <h1 className='header'>PROJECTS</h1>
          <div className='category-checkboxes'>
            <CategoryChecklist />
            <CategoryChecklist />
            <CategoryChecklist />
            <CategoryChecklist />
          </div>
        </div>
        <div className='right-index'>
          <div>
            <h1 className='right-header'>DISCOVER YOUR NEXT PROJECT</h1>
          </div>
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