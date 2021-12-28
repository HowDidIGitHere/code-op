import React from 'react';
import SplashHeader from './splash_header';
import './main.css'
// import ProjectListingRow from './project_listing_row';
import FeaturedProjects from './featured_projects';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.history.push(`/projects`);
  }

  componentWillMount() {
    this.props.fetchProjects();
  }

  render() {
    return (
      <div>
        <SplashHeader handleClick={this.handleClick.bind(this)}/>
        {/* <div className='featured-projects'>
          <ProjectListingRow projects={this.props.projects} />
        </div> */}
        <FeaturedProjects />
      </div>
    );
  }
}

export default MainPage;