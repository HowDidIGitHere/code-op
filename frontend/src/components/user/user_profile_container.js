import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { fetchUser } from '../../actions/user_actions';
import {fetchCreatorProjects} from '../../actions/project_actions'
import { openModal } from '../../actions/modal_actions';
import { fetchCollaborators } from '../../actions/user_actions';

import UserProfile from './user_profile_component';

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.entities.users[ownProps.match.params.id],
    projects: Object.values(state.entities.projects)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log(typeof ownProps.match.params.id)
  return {
    openUpdateModal: () => dispatch(openModal('update')),

    fetchUser: () => dispatch(fetchUser(ownProps.match.params.id)),
    fetchCreatorProjects: () => dispatch(fetchCreatorProjects(ownProps.match.params.id)),
    fetchCollaborators: collaborators => dispatch(fetchCollaborators(collaborators))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserProfile))