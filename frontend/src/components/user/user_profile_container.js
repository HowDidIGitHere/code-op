import { connect } from 'react-redux';
import UserProfile from './user_profile_component';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // getUser: userId => dispatch()
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);