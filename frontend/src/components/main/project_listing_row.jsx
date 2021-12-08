import React from "react";
import ProjectListing from "./project_listing";

class ProjectListingRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() { 
    return (
      <div className='listings'>
        <div className="project-row">
          <div className='listing-heading'>
              <h1>Category Name Placeholder</h1>
              <a href="x">View all</a>
          </div>
          <div className='underline'></div>
        <div className='listing-carousel'>
          {this.props.projects.map((project) => {
            return  <ProjectListing key={project.id} project={project}/>
          })}
        </div>
      </div>
    </div>
    )
  }
}

export default ProjectListingRow