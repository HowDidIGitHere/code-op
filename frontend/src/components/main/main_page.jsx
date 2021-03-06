import React from 'react';
import SplashHeader from './splash_header';
import HowTo from './how_to_container';
import './main.css'
// import ProjectListingRow from './project_listing_row';
import FeaturedProjects from './featured_projects';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.history.push(`/projects`);
  }

  componentWillMount() {
    this.props.fetchFeaturedProjects();
  }

  render() {
    return (
      <div>
        <SplashHeader handleClick={this.handleClick}/>
        <HowTo/>
        <FeaturedProjects projects={this.props.projects} />
      </div>
    );
  }
}

export default MainPage;