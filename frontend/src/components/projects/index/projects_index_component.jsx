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
    this.handleRequest2 = this.handleRequest2.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleClear = this.handleClear.bind(this)
  }

  componentWillMount() {
    this.props.fetchTags({ namesByCategory: "position,software,platform"})
    this.props.fetchProjects();
  }

  handleSearch(e) {
    e.preventDefault();
    let types = "";
    var checkboxes = document.querySelectorAll('input[type=checkbox]:checked')
    if (checkboxes.length === 0) 
      return this.props.fetchProjects();
      
    for (var i = 0; i < checkboxes.length; i++) {
      if (i === checkboxes.length - 1) 
        types = types.concat(checkboxes[i].value)
      else
        types = types.concat(checkboxes[i].value, ",")
    }
    this.props.fetchProjects({tags: types})

  }

  printSelection() {

    let types = "";
    var checkboxes = document.querySelectorAll('input[type=checkbox]:checked')
    if (checkboxes.length === 0) 
      return (
        <div className='filters'>
          <p className='filter-list'>None</p>
        </div>
      )
    for (var i = 0; i < checkboxes.length; i++) {
      if (i === checkboxes.length - 1) 
        types = types.concat(checkboxes[i].value)
      else
        types = types.concat(checkboxes[i].value, ", ")
    }

    return (
      <div className='filters'>
        <p className='filter-list'>{types}</p>
        <button className='clear-button' onClick={this.handleClear}>Clear</button>
      </div>
    )
  }

  handleClear(e) {
    e.preventDefault();
    document.querySelectorAll('input[type="checkbox"]')
      .forEach(el => el.checked = false);
    this.props.fetchProjects();
  }

  handleRequest(e) {
    e.preventDefault();

    this.props.requestModal();
    this.props.oneProject(e.target.id)
  }

  handleRequest2(e) {
    e.preventDefault();

    this.props.openLearnModal();
    this.props.oneProject(e.target.id)
  }

  toggleLearnModal(){
    if (this.state.openLearnModal){
      this.setState({openLearnModal: false})
    } else {
      this.setState({openLearnModal: true})
    }
  }
  
  render() {
    if (!this.props.tags) return null

    const { tags } = this.props;
    const categories = [
      ['Software', tags.software.slice(0,15)],
      ['Platform', tags.platform], 
      ['Position', tags.position], 
    ]

    var checkboxes = document.querySelectorAll('input[type=checkbox]:checked')
    console.log(checkboxes)

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
        <div className="underline-1"></div>
        <div className='show-filters'>
          <h1 className='current-filters'>Current Search Filters:</h1>
          {this.printSelection()}
        </div>
        <div className="underline-2"></div>
        <div className='right-index'>
          <div className='right-index-listings'>
              {this.props.projects.map((project) => {
                return <IndexProjectListing 
                  key={project.id} 
                  project={project}
                  id={project._id}
                  handleRequest={this.handleRequest}
                  handleRequest2={this.handleRequest2}
                />
              })}             
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectsIndex