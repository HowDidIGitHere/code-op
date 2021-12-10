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
    this.handleSearch = this.handleSearch.bind(this)
  }

  componentWillMount() {
    this.props.fetchTags({ namesByCategory: "position,software,platform"})
    this.props.fetchProjects();
  }

  handleSearch(e) {
    e.preventDefault();

    let types = "";
    var checkboxes = document.querySelectorAll('input[type=checkbox]:checked')

    for (var i = 0; i < checkboxes.length; i++) {
      if (i === checkboxes.length - 1) 
        types = types.concat(checkboxes[i].value)
      else
        types = types.concat(checkboxes[i].value, ",")
    }
    
    this.props.fetchProjects({tags: types})
  }

  handleRequest(e) {
    e.preventDefault();

    this.props.requestModal();
    this.props.oneProject(e.target.id)
  }

  render() {
    if (!this.props.tags) return null

    const { tags } = this.props;
    const categories = [
      ['Software', tags.software.slice(0,15)],
      ['Platform', tags.platform], 
      ['Position', tags.position], 
    ]

    return(
      <div className="projects-index">
        <div className='category-filters'>
          {categories.map((category) => {
            return <CategoryDropdown category={category}/>
          })}
          <button 
            className='search-button'
            onClick={this.handleSearch}
          >Search</button>
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