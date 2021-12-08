import React from 'react';

class ProjectsShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  componentWillMount() {
    // this.props.fetchTweets();
  }

  render() {
    return(
      <div className="projects-show-page">
        <div className='project-show-container'>
          <div className='project-title'>
            <h1>Project Title</h1>
          </div>
          <div className='project-body'>
            <div className='left-body'>
              <div className='collaborators-container'>
                <h1>Collaborators</h1>
                <div className='collaborator-list'>

                </div>
              </div>
            </div>
            <div className='right-body'>
              <div className='mvp-title'>

              </div>
              <div className='mvp-list'>

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectsShow