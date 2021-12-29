import React from 'react';

function FeaturedProjects({ projects }) {
  return (
    <div className="featured-projects container-sm" >
      {
        projects ? projects.map(project => {
          return (
            <div className='featured-project'>
              <div class="card">
                <img src="" class="card-img-top" alt={`Image of featured project`} />
                <div class="card-body">
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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