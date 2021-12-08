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
              <p>Delectus pericula id sed. Eu mei affert tritani tacimates, probatus atomorum.</p>
              <p>“Qui alii definiebas ullamtorquatos voluptaria, te clita mollis salutatus pri.” -Karina, Software Developer
              </p>
              <p>Vel regione persequeris no. Ne cibo autem modus usu. Qui te libris antiopam patrioque. Pro paulo tim. </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectListingRow