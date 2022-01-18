import React from 'react';
import Diagram from '../../diagram/diagram';
import Collaborators from './collaborators';
import mermaid from 'mermaid';
import GoalsShow from '../../goals/goals_show_component';
import { Link } from 'react-router-dom';

class ProjectsShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      creator: undefined,
      project: undefined,
      collaborators: undefined,
      goals: undefined,
      staticDiagram: undefined,
      diagram: undefined,
      edit: false,
    }

    this.handleDiagramChange = this.handleDiagramChange.bind(this);
    this.handleDiagramSubmit = this.handleDiagramSubmit.bind(this);
    this.toggleDeleteGoal = this.toggleDeleteGoal.bind(this);
    this.handleCollaboratorUpdate = this.handleCollaboratorUpdate.bind(this);
  }


  componentWillMount() {
    this.props.fetchProject()
      .then(res => this.setState({ project: res.project }, () => {
        if (this.state.project.creator !== this.props.user.id && (this.state.project.collaborators && !this.state.project.collaborators.includes(this.props.user.id))) {
          this.props.history.goBack();
        }
        if (this.state.project.collaborators.length !== 0) {
          this.props.fetchCollaborators(this.state.project.collaborators)
            .then(res => {
              const nextState = Object.assign({}, this.state, { collaborators: Object.values(res.collaborators) })
              this.setState(nextState);
            })
        }
        if (this.state.project.goals.length !== 0) {
          console.log(this.state)
          this.props.fetchGoals(this.state.project.goals)
            .then(res => {
              const nextState = Object.assign({}, this.state, { goals: Object.values(res.goals) })
              this.setState(nextState);
            })
        }
        if (this.state.project.diagram) {
          this.props.fetchDiagram(this.state.project.diagram)
            .then(res => {
              const nextState = Object.assign({}, this.state, { staticDiagram: res.diagram }, { diagram: res.diagram })
              this.setState(nextState);
            })
        }

      }))
      .then(res => {
        this.props.fetchUser(this.state.project.creator)
          .then(res => {
            this.setState({ creator: res.user })})
      });

    this.props.fetchCreatorProjects(this.props.user.id);
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
    const newDiagram = Object.assign({}, this.state.diagram);
    this.props.updateDiagram(newDiagram).then(() => {
      const nextState = Object.assign({}, this.state, { staticDiagram: newDiagram })
      this.setState(nextState, () => {
        if (nextState.staticDiagram.content) {
          let x = document.getElementById('potato')
          x.removeAttribute("data-processed")
          mermaid.init(undefined, x);
        }
      })
    });
  }

  updateTitle() {
    return e => {
      this.setState({ project: {...this.state.project, title: e.currentTarget.value} })
    }
  }

  updateDescription() {
    return e => {
      this.setState({ project: {...this.state.project, description: e.currentTarget.value} })
    }
  }

  toggleEdit() {
    this.setState({edit: !this.state.edit})
  }

  toggleDeleteGoal(idx) {
    let tempGoals = [];
    for (let i = 0; i < this.state.goals.length; i++) {
      if (i !== idx) {
        tempGoals.push(this.state.goals[i]);
      }
    }
    this.setState({ goals: tempGoals });
  }

  handleUpdate(e){
    e.preventDefault()
    this.props.updateProject(this.state.project)
  }

  handleCollaboratorUpdate(user, idx) {
    let tempSimpCollaborators = [...this.state.project.collaborators];
    tempSimpCollaborators.splice(idx, 1);
    let tempProject = Object.assign({}, this.state.project);
    tempProject.collaborators = tempSimpCollaborators;

    let tempCollaborators = [...this.state.collaborators];
    tempCollaborators.splice(idx, 1);

    this.props.updateProject(tempProject).then(() => {
      this.setState({ project: tempProject }, this.setState({ collaborators: tempCollaborators }))
    });
  }

  render() {
    if (!this.state.project) {
      return "...loading";
    }

    return(
      <div className="projects-show-page">
        <div className='project-show-container'>
          {!this.state.edit ?
            <div className='project-title-header'>
              <h1>{this.state.project.title}</h1>
              <p>{this.state.project.description}</p>
              <button onClick={() => this.toggleEdit()}>Edit</button>
            </div>
            :
            <div className='project-title-header-edit'>
              <textarea onChange={this.updateTitle()}>{this.state.project.title}</textarea>
              <textarea onChange={this.updateDescription()}>{this.state.project.description}</textarea>
              <div className='proj-edit-btns'>
                <button onClick={(e) => this.toggleEdit(e)}>Close</button>
                <button onClick={(e) => {this.handleUpdate(e); this.toggleEdit(e)}}>Update</button>
              </div>
            </div>
          }
          <div className='project-body'>
            <div className='outer-left'>
            <div className='left-body'>
              <div className='creator-container'>
                  <h1>Creator</h1>
                  {this.state.creator ? <p className='collab'><Link to={`/users/${this.state.creator._id}`}>{this.state.creator.username}</Link></p> : null}
              </div>
              <div className='collaborators-container'>
                <h1>Collaborators</h1>
                <div className='collaborator-list'>
                  {this.state.collaborators ? <Collaborators handleCollaboratorUpdate={this.handleCollaboratorUpdate} currentUser={this.props.user} creator={this.state.creator} collaborators={this.state.collaborators} /> : null}
                </div>
              </div>
            </div>
            <div className='goal-container'>
            <div className='goal-header'>
                <h1>Goals</h1>
                <button className="create-goal"
                  onClick={() => this.props.openGoalModal()}>Create Goal</button>
            </div>
            <div className='goal-list'>
              {
                this.state.goals ? (
                  <ul>
                    {
                      this.state.goals.map((goal, idx) => {
                        return <GoalsShow key={`goals-list-item-${idx}`} idx={idx} goal={goal} updateGoal={this.props.updateGoal} deleteGoal={this.props.deleteGoal} toggleDeleteGoal={this.toggleDeleteGoal} />
                      })
                    }
                  </ul>
                ) : (
                  null
                )
              }
            </div>
          </div>
              <div className='tag-detail-container'>

              </div>
            </div>
            <div className='mid-body'>
              <div className='diagram-section'>
                <div className='diagram-header'>
                  <h1>Diagram:</h1>
                </div>
                <div className='diagram-container'>
                  <div className='diagram-viewbox'>
                    {
                      this.state.diagram ? (
                        <div className='test-diagram'>
                          <Diagram chart={this.state.staticDiagram.content} />
                        </div>
                        ) : (
                          null
                        )
                    }
                  </div>
                  <div className='diagram-textbox'>
                    <form onSubmit={this.handleDiagramSubmit}>
                      <textarea className='diagram-text' onChange={this.handleDiagramChange} value={this.state.diagram ? this.state.diagram.content : ""} cols="30" rows="10"></textarea>
                      <button className='finalize' type='submit'>Finalize</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
    )
  }
}

export default ProjectsShow