import { connect } from 'react-redux';
import { logout, login } from '../../actions/session_actions';
import { withRouter } from 'react-router';
import {openModal, closeModal} from "../../actions/modal_actions"

import NavBar from './navbar';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: state.session.isAuthenticated,
  user: state.session.user
});

const mapDispatchToProps = dispatch => ({
  openLoginModal: () => dispatch(openModal('login')),
  openSignupModal: () => dispatch(openModal('signup')),
  openAboutModal: () => dispatch(openModal('about')),
  openCreateGoalModal: () => dispatch(openModal('create-goal')),
  closeModal: () => dispatch(closeModal()),
  login: (user) => dispatch(login(user)),
  logout: () => dispatch(logout())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));

