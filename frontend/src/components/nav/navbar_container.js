import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { withRouter } from 'react-router';
import {openModal, closeModal} from "../../actions/modal_actions"

import NavBar from './navbar';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: state.session.isAuthenticated,
  userId: state.session.user.id
});

const mapDispatchToProps = dispatch => ({
  openLoginModal: () => dispatch(openModal('login')),
  openSignupModal: () => dispatch(openModal('signup')),
  openAboutModal: () => dispatch(openModal('about')),
  closeModal: () => dispatch(closeModal()),
  logout: () => dispatch(logout())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));

