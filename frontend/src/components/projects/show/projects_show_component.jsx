import React from 'react';
import Diagram from '../../diagram/diagram';
import Collaborators from './collaborators';
import GoalItem from './goals';

class ProjectsShow extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   project: undefined,
    //   collaborators: undefined,
    //   goals: undefined
    // }
  }

  componentWillMount() {
    this.props.fetchProject()
      .then(res => {
        console.log(res)
        if (res.project.collaborators !== 0) {
          this.props.fetchCollaborators(res.project.collaborators)
        }
        if (res.project.goals.length !== 0) {
          this.props.fetchGoals(res.project.goals)
        }
        if (res.project.diagrams.length !== 0) {
          this.props.fetchDiagrams(res.project.diagrams)
        }
      })
      // .catch((err) => console.log('bok'));
      
    // this.props.fetchProject()
    //   .then(res => this.setState({ project: res.project }, () => {
    //     if (this.state.project.collaborators) {
    //       this.props.fetchCollaborators(this.state.project.collaborators)
    //         .then(res => this.setState({ collaborators: res.collaborators }));
    //     }
    //     if (!this.state.project.goals) {
    //       this.props.fetchGoals(this.state.project.goals)
    //         .then(res => this.setState({ goals: res.goals }));
    //     }
    //   }));

    // this.props.fetchTweets();
  }

  render() {
    if (!this.props.project) {
      return "...loading";
    }

    return(
      <div className="projects-show-page">
        <div className='project-show-container'>
          <div className='project-title-header'>
            <h1>{this.props.project.title}</h1>
          </div>
          <div className='project-body'>
            <div className='left-body'>
              <div className='collaborators-container'>
                <h1>Collaborators</h1>
                <div className='collaborator-list'>
                  <Collaborators collaborators={this.props.collaborators} />
                </div>
              </div>
              <div className='tag-detail-container'>

              </div>
            </div>
            <div className='mid-body'>
              <div className='goal-header'>
                <h1>Goals:</h1>
              </div>
              {/* <div className='goal-list'>
                <GoalItem />
                <GoalItem />
                <GoalItem />
              </div> */}
              <div className='goal-list'>
                {
                  this.props.diagrams ? 
                    (<ul>
                      {this.props.diagrams.map((diagram, idx) => {
                        // this.console.log(diagram)
                        return <Diagram chart={diagram.content} />
                      })}
                    </ul>) : (
                      null
                    )
                }
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