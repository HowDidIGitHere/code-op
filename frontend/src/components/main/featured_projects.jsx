import React from 'react';

function FeaturedProjects({ projects }) {
  const tempDefaultImage = 'https://images.unsplash.com/photo-1566413358759-0b36d585f04a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by';
  return (
    <div className="featured-projects container-fluid px-5" >
      <h1>Featured Projects</h1>
      {
        projects ? projects.map((project, index) => {
          return (
            <div 
              className={`
                featured-project 
                row 
                justify-content-center
                ${index % 2 === 1 ? 'reverse-order' : ''}`
              } 
              key={project._id}
            >
              <div 
                className='featured-project-image col-md-5 col-12'
              >
                <div style={{ backgroundImage: `url(${project.image || tempDefaultImage})` }} ></div>
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
                  <h1 className='col-sm-auto me-auto col-12'> {project.title} </h1>
                  <a target='_blank' rel='noreferrer' href={project.liveLink || '#'} className='col-auto learn-more'>Live Site</a>
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