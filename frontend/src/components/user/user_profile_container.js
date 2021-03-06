import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { fetchUser } from '../../actions/user_actions';
import { fetchProjects, updateProject } from '../../actions/project_actions'
import { openModal } from '../../actions/modal_actions';
import { deleteProject } from '../../actions/project_actions';

import UserProfile from './user_profile_component';

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.entities.users[ownProps.match.params.id],
    currentUserId: state.session.user.id
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    openUpdateModal: () => dispatch(openModal('update')),
    deleteProject: (id) => dispatch(deleteProject(id)),
    fetchUser: () => dispatch(fetchUser(ownProps.match.params.id)),
    updateProject: data => dispatch(updateProject(data)),
    fetchCreatorProjects: () => dispatch(fetchProjects({ creator: ownProps.match.params.id })),
    receiveCollaboratedProjects: () => dispatch(fetchProjects({ 
      collaborators: ownProps.match.params.id 
    }))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserProfile))