import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { logout, login } from '../../actions/session_actions';
import {openModal, closeModal} from "../../actions/modal_actions"
import NavBar from './navbar';
import { fetchProjects } from '../../actions/project_actions'

const mapStateToProps = (state, ownProps) => ({
  loggedIn: state.session.isAuthenticated,
  user: state.session.user,
  projects: Object.values(state.entities.projects)

});

const mapDispatchToProps = (dispatch, ownProps) => ({
  openLoginModal: () => dispatch(openModal('login')),
  openSignupModal: () => dispatch(openModal('signup')),
  openAboutModal: () => dispatch(openModal('about')),
  openCreateGoalModal: () => dispatch(openModal('create-goal')),
  openUpdateGoalModal: () => dispatch(openModal('update-goal')),
  openNotificationsModal: () => dispatch(openModal('notifications')),
  fetchCreatorProjects: () => dispatch(fetchProjects({ creator: ownProps.match.params.id })),
  receiveCollaboratedProjects: data => dispatch(fetchProjects(data)),

  closeModal: () => dispatch(closeModal()),
  login: (user) => dispatch(login(user)),
  logout: () => dispatch(logout())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));

