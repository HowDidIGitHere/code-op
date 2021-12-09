import React from 'react';
import Diagram from '../../diagram/diagram';
import Collaborators from './collaborators';
import GoalItem from './goals';
import mermaid from 'mermaid';

class ProjectsShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      project: undefined,
      collaborators: undefined,
      goals: undefined,
      diagram: undefined
    }

    this.handleDiagramChange = this.handleDiagramChange.bind(this);
    this.handleDiagramSubmit = this.handleDiagramSubmit.bind(this);
  }

  componentWillMount() {
    this.props.fetchProject()
      .then(res => this.setState({ project: res.project }, () => {
        if (this.state.project.collaborators.length !== 0) {
          this.props.fetchCollaborators(this.state.project.collaborators)
            .then(res => {
              const nextState = Object.assign({}, this.state, { collaborators: Object.values(res.collaborators) })
              this.setState(nextState);
            })
        }
        if (this.state.project.goals.length !== 0) {
          this.props.fetchGoals(this.state.project.goals)
            .then(res => {
              const nextState = Object.assign({}, this.state, { goals: Object.values(res.goals) })
              this.setState(nextState);
            })
        }
        if (this.state.project.diagram) {
          this.props.fetchDiagram(this.state.project.diagram)
            .then(res => {
              const nextState = Object.assign({}, this.state, { diagram: res.diagram })
              this.setState(nextState);
            })
        }
      }));
    // this.props.fetchTweets();
  }

  handleDiagramChange(e) {
    e.preventDefault();
    e.stopPropagation();
    const nextState = Object.assign({}, this.state, { diagram: Object.assign({}, this.state.diagram, { content: e.target.value } )})
    this.setState(nextState);
  }

  handleDiagramSubmit(e) {
    e.preventDefault();
    e.stopPropagation();

    let x = document.getElementById('potato')
    x.removeAttribute("data-processed")
    mermaid.init(undefined, x)

    const newDiagram = Object.assign({}, this.state.diagram);
    this.props.updateDiagram(newDiagram);
  }

  render() {
    if (!this.state.project) {
      return "...loading";
    }

    return(
      <div className="projects-show-page">
        <div className='project-show-container'>
          <div className='project-title-header'>
            <h1>{this.state.project.title}</h1>
          </div>
          <div className='project-body'>
            <div className='left-body'>
              <div className='collaborators-container'>
                <h1>Collaborators</h1>
                <div className='collaborator-list'>
                  {this.state.collaborators ? <Collaborators collaborators={this.state.collaborators} /> : null}
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
                {/* <div className='goal-list'>
                  <GoalItem />
                  <GoalItem />
                  <GoalItem />
                </div> */}
              </div>
              <div className='diagram-section'>
                <div className='diagram-header'>
                  <h1>Diagram:</h1>
                </div>
                <div className='diagram-viewbox'>
                  {
                    this.state.diagram ? (
                      <div>
                        <Diagram chart={this.state.diagram.content} />
                      </div>
                      ) : (
                        null
                      )
                  }
                </div>
                <div className='diagram-textbox'>
                  <form onSubmit={this.handleDiagramSubmit}>
                    <textarea onChange={this.handleDiagramChange} value={this.state.diagram ? this.state.diagram.content : ""} cols="30" rows="10"></textarea>
                    <button type='submit'>Finalize</button>
                  </form>
                </div>
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