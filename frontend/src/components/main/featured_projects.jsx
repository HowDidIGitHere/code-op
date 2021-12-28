import React from 'react';

export default class FeaturedProjects extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.props.fetchProjects()
  }

  render() {
    const featuredProjects = this.props.featuredProjects;
    return (
      <div id="featured-projects" className="carousel slide carousel-fade" data-bs-ride="carousel">
        { featuredProjects ? featuredProjects.map((project, index) => {
          return (
            <div className="carousel-inner">
              <div className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                <h1>project.title</h1>
                <p>project.description</p>
              </div>
            </div>
          )
        }) : '' }
        <button className="carousel-control-prev" type="button" data-bs-target="#featured-projects" data-bs-slide="prev">
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#featured-projects" data-bs-slide="next">
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    )
  }
}