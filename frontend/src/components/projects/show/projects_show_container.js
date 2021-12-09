import { connect } from 'react-redux';
import ProjectsShow from './projects_show_component';
import './project_show.css'
import { fetchGoals } from '../../../actions/goal_actions';
import { fetchCollaborators } from '../../../actions/user_actions';
import { fetchCreatorProjects, fetchProject } from '../../../actions/project_actions';
import { fetchDiagram, updateDiagram } from '../../../actions/diagram_actions';
import { withRouter } from 'react-router';

const mapStateToProps = (state, ownProps)=> {
  return {
    user: state.session.user
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchProject: () => dispatch(fetchProject(ownProps.match.params.id)),
    fetchCreatorProjects: id => dispatch(fetchCreatorProjects(id)),
    fetchCollaborators: collaboratorsArr => dispatch(fetchCollaborators(collaboratorsArr)),
    fetchGoals: goalsArr => dispatch(fetchGoals(goalsArr)),
    fetchDiagram: diagramId => dispatch(fetchDiagram(diagramId)),
    updateDiagram: diagram => dispatch(updateDiagram(diagram))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProjectsShow));