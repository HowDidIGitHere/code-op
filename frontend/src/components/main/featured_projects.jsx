import React from 'react';

function FeaturedProjects({ projects }) {
  return (
    <div className="featured-projects container-sm" >
      {
        projects ? projects.map(project => {
          return (
            <div className='featured-project row' key={project._id}>
              <div 
                className='featured-project-image col-md-6 col-12'
                style={{ backgroundImage: `url(${project.url})` }} 
              >
              </div>
              <div className='featured-project-description col-md-6 col-12'>
                { project.description }
              </div>
            </div>
          )
        }) : 'Loading...'
      }
    </div>
  )
}

export default FeaturedProjects;