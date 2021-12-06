import React from 'react';
import './project_index.css'
import CategoryChecklist from './category_checklist';

class ProjectsIndex extends React.Component {
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
      </div>
    )
  }
}

export default ProjectsIndex