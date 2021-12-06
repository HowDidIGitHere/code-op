import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import {openModal, closeModal} from "../../actions/modal_actions"
// import { withRouter } from "react-router";

import NavBar from './navbar';

const mapStateToProps = state => ({
  loggedIn: state.session.isAuthenticated,

});

const mapDispatchToProps = dispatch => ({
  openLoginModal: () => dispatch(openModal('login')),
  openSignupModal: () => dispatch(openModal('signup')),
  closeModal: () => dispatch(closeModal()),
  logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
// export default connect(
// mapStateToProps,
//   { logout }
// )(NavBar);