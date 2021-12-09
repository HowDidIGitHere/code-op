import React from 'react';

const IndexProjectListing = ({ project }) => {
  return(
    <ul className='index-listing-component'>
      <div className='testing123'>
      <div className='index-listing-content'>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
      </div>
      {/* <div className='index-listing-footer'>
        <button className='learn-more'>Learn More</button>
        <button className='apply-now'>Apply Now</button>
      </div> */}
      </div>
    </ul>
  )
}

export default IndexProjectListing;