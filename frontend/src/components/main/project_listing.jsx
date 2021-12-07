import React from 'react';

const ProjectListing = ({ project }) => {
  return(
    <div className='listing-component'>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
    </div>
  )
}

export default ProjectListing;