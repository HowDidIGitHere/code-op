import React from 'react';

function FeaturedProjects({ projects }) {
  console.log(projects);
  return (
    <div 
      id="featured-projects" 
      className="carousel slide carousel-fade container-sm" 
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
      { projects ? projects.map((project, index) => {
        return (
            <div className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <h1>{ project.title }</h1>
              <p>{ project.description }</p>
            </div>
        )
      }) : '' }
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#featured-projects" data-bs-slide="prev">
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#featured-projects" data-bs-slide="next">
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default FeaturedProjects;