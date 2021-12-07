import React from 'react';

const IndexProjectListing = ({ project }) => {
  return(
    <div className='index-listing-component'>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
    </div>
  )
}

export default IndexProjectListing;