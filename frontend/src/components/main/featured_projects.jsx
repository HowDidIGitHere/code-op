import React from 'react';

function FeaturedProjects({ projects }) {
  return (
    <div className="featured-projects container-sm" >
      {
        projects ? projects.map(project => {
          return (
            <div className='featured-project'>
              
            </div>
          )
        }) : 'Loading...'
      }
    </div>
  )
}

export default FeaturedProjects;