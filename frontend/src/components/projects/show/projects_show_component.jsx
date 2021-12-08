import React from 'react';
import Collaborators from './collaborators';
import GoalItem from './goals';

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
          <div className='project-title-header'>
            <h1>Project Name</h1>
          </div>
          <div className='project-body'>
            <div className='left-body'>
              <div className='collaborators-container'>
                <h1>Collaborators</h1>
                <div className='collaborator-list'>
                  <Collaborators />
                </div>
              </div>
              <div className='tag-detail-container'>

              </div>
            </div>
            <div className='mid-body'>
              <div className='goal-header'>
                <h1>Goals:</h1>
              </div>
              <div className='goal-list'>
                <GoalItem />
                <GoalItem />
                <GoalItem />
              </div>
            </div>
            <div className='right-body'>
            <div className='details-container'>
                <h1>Project Details</h1>
                <p>Language: Ruby, Javascript</p>
                <p>Github Link: Link</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectsShow