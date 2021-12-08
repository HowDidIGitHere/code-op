import React from "react";
import ProjectListing from "./project_listing";

class ProjectListingRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() { 
    return (
      <div>
        <div className='listing-heading'>
          <h1>Featured Projects</h1>
        </div>
        <div className='first-project'>
          <img src="https://res.cloudinary.com/dzixdb9eu/image/upload/v1639001054/unsplash_EzYq1HOl5_8_y8slio.png" alt="pic" />
          <div className='first-project-summary'>
            <div className='testing'>
              <p className='para'>Delectus pericula id sed. Eu mei affert tritani tacimates, probatus atomorum.</p>
              <p className='quote'>“Qui alii definiebas ullamtorquatos voluptaria, te clita mollis salutatus pri.”
              </p>
              <p className='quoter'>-Karina, Software Developer</p>
              <p className='para'>Vel regione persequeris no. Ne cibo autem modus usu. Qui te libris antiopam patrioque. Pro paulo tim. </p>
            </div>
          </div>
        </div>
        <div className='second-project'>
          <div className='second-project-summary'>
            <div className='testing'>
              <p className='para'>Lorem ipsum dolor sit amet, sit an blandit omnesque, porro petentium.</p>
              <p className='quote'>Ea per esse dicam, duo eu feugiat torquatos voluptaria, te clita mollis salutatus pri.”
              </p>
              <p className='quoter'>-Peter, UX Designer</p>
            </div>
          </div>
          <img src="https://res.cloudinary.com/dzixdb9eu/image/upload/v1639001054/unsplash_EzYq1HOl5_8_y8slio.png" alt="pic" />
        </div>
      </div>
    )
  }
}

export default ProjectListingRow