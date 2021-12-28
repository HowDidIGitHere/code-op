import React from 'react';
import SplashContent from './splash_content';
import './main.css'
import ProjectListingRow from './project_listing_row';

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
        <SplashContent handleClick={this.handleClick.bind(this)}/>
        <div className='featured-projects'>
          <ProjectListingRow projects={this.props.projects} />
        </div>
      </div>
    );
  }
}

export default MainPage;