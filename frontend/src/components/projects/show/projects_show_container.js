import { connect } from 'react-redux';
import ProjectsShow from './projects_show_component';
import './project_show.css'
import { fetchGoals, updateGoal } from '../../../actions/goal_actions';
import { fetchCollaborators, fetchUser } from '../../../actions/user_actions';
import { fetchProjects, fetchProject, deleteProject, updateProject } from '../../../actions/project_actions';
import { fetchDiagram, updateDiagram } from '../../../actions/diagram_actions';
import { fetchTags } from '../../../actions/tag_actions';
import { withRouter } from 'react-router';
import { openModal } from '../../../actions/modal_actions';
import { deleteGoal } from '../../../actions/goal_actions';

const mapStateToProps = (state, ownProps)=> {
  return {
    user: state.session.user,
    tags: state.entities.tags.namesByCategoty,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchProject: () => dispatch(fetchProject(ownProps.match.params.id)),
    fetchCreatorProjects: id => dispatch(fetchProjects({ creator: id })),
    deleteProject: id => dispatch(deleteProject(id)),
    updateProject: data => dispatch(updateProject(data)),
    fetchCollaborators: collaboratorsArr => dispatch(fetchCollaborators(collaboratorsArr)),
    fetchGoals: goalsArr => dispatch(fetchGoals(goalsArr)),
    fetchDiagram: diagramId => dispatch(fetchDiagram(diagramId)),
    updateDiagram: diagram => dispatch(updateDiagram(diagram)),
    updateGoal: goal => dispatch(updateGoal(goal)),
    fetchTags: params => dispatch(fetchTags(params)),
    fetchUser: userId => dispatch(fetchUser(userId)),
    openGoalModal: () => dispatch(openModal('create-goal')),
    deleteGoal: (id) => dispatch(deleteGoal(id))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProjectsShow));