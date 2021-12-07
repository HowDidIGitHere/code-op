import { connect } from 'react-redux';
import { requestUser } from '../../actions/user_actions';
import { withRouter } from "react-router";
import UserProfile from './user_profile_component';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.user[state.session.user.id]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestUser: userId => dispatch(requestUser(userId))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserProfile))