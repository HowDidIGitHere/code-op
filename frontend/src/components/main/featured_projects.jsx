import React from 'react';

function FeaturedProjects({ projects }) {
  return (
    <div className="featured-projects container-sm" >
      {
        projects ? projects.map(project => {
          return (
            <div className='featured-project row gy-4 gx-5 justify-content-center' key={project._id}>
              <div 
                className='featured-project-image col-md-5 col-12'
              >
                <div style={{ backgroundImage: `url(${project.image})` }} ></div>
              </div>
              <div 
                className='
                  featured-project-details 
                  col-md-7  
                  col-12 
                  container-fluid
                '
              >
                <div className='featured-project-header row'>
                  <h1 className='col-auto me-auto'> {project.title} </h1>
                  <a href={project.liveLink || '#'} className='col-auto learn-more'>Live Site</a>
                </div>
                <div className='featured-project-description row'>
                  { project.description }
                </div>
              </div>
            </div>
          )
        }) : 'Loading...'
      }
    </div>
  )
}

export default FeaturedProjects;