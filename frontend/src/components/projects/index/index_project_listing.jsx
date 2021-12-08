import React from 'react';

const IndexProjectListing = ({ project }) => {
  return(
    <div className='index-listing-component'>
      <div className='index-listing-content'>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
      </div>
      <div className='index-listing-footer'>
        <button className='learn-more'>Learn More</button>
        <button className='apply-now'>Apply Now</button>
      </div>
    </div>
  )
}

export default IndexProjectListing;