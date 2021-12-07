import React from 'react';
import SplashContent from './splash_content';
import './main.css'
import ProjectListingRow from './project_listing_row';

class MainPage extends React.Component {

  handleClick(e) {
    e.preventDefault();
    this.props.history.push(`/projects`);
  }

  render() {
    return (
      <div>
        <div className='splash-content'>
          <SplashContent handleClick={this.handleClick.bind(this)}/>
        </div>
        <div className='listings'>
          <ProjectListingRow />
          <ProjectListingRow />
          <ProjectListingRow />
          <ProjectListingRow />
        </div>
      </div>
    );
  }
}

export default MainPage;