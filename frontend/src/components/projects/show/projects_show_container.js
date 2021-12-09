import { connect } from 'react-redux';
import ProjectsShow from './projects_show_component';
import './project_show.css'
import { fetchGoals } from '../../../actions/goal_actions';
import { fetchCollaborators } from '../../../actions/user_actions';
import { fetchProject } from '../../../actions/project_actions';
import { fetchDiagrams } from '../../../actions/diagram_actions';

const mapStateToProps = (state, ownProps)=> {
  return {
    project: state.entities.projects[ownProps.match.params.id],
    collaborators: Object.values(state.entities.users),
    goals: Object.values(state.entities.goals),
    diagrams: Object.values(state.entities.diagrams)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchProject: () => dispatch(fetchProject(ownProps.match.params.id)),
    fetchCollaborators: collaboratorsArr => dispatch(fetchCollaborators(collaboratorsArr)),
    fetchGoals: goalsArr => dispatch(fetchGoals(goalsArr)),
    fetchDiagrams: diagramsArr => dispatch(fetchDiagrams(diagramsArr))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsShow);