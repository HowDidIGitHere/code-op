import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { requestUser } from '../../actions/user_actions';
import {fetchProjects} from '../../actions/project_actions'
import UserProfile from './user_profile_component';

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.entities.users[ownProps.match.params.id],
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    requestUser: () => dispatch(requestUser(ownProps.match.params.id)),
    fetchProjects: () => dispatch(fetchProjects())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserProfile))