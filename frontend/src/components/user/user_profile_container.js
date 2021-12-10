import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { fetchUser } from '../../actions/user_actions';
import { fetchProjects } from '../../actions/project_actions'
import { openModal } from '../../actions/modal_actions';

import UserProfile from './user_profile_component';

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.entities.users[ownProps.match.params.id],
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log(typeof ownProps.match.params.id)
  return {
    openUpdateModal: () => dispatch(openModal('update')),

    fetchUser: () => dispatch(fetchUser(ownProps.match.params.id)),
    fetchCreatorProjects: () => dispatch(fetchProjects({ creator: ownProps.match.params.id })),
    receiveCollaboratedProjects: () => dispatch(fetchProjects({ 
      collaborators: ownProps.match.params.id 
    }))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserProfile))