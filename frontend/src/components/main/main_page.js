import React from 'react';
import SplashContent from './splash_content';
import './main.css'
import ProjectListingRow from './project_listing_row';

class MainPage extends React.Component {

  render() {
    return (
      <div>
        <div className='splash-content'>
          <SplashContent />
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